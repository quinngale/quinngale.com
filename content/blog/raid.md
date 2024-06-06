---
description: Results from putting 9 USB drives into various RAID configurations.
thumbnail: https://assets.quinngale.com/blog/raid/usb-raid-array-thumbnail.jpg
alt_text: An image of 9 USB drives plugged into a USB hub that has been strapped to the side of a computer
draft: true
---

# RAID-ing things that shouldn't be RAID-ed

![A ten-port USB hub full of flash drives](https://assets.quinngale.com/blog/raid/usb-raid-array.jpg)

## What am I looking at?

First things first, there's a 10-port Sabrent USB 3.0 hub (https://a.co/d/6v8RTMt) strapped to the side of the computer I have running it. The hub gets pretty hot under load, so to hopefully fix that I have attached a fan to the back side of the case blowing air out of the case and over the hub.

The USB drives aren't anything special. They _were_ 10x 32GB SanDisk flash drives, like the one here: https://a.co/d/a1MCj78. Unfortunately, one of them stopped working while I was moving and putting this together so now there's just 9 of them.

The computer is my former desktop repurposed as a media, game, and file share server. For the nerds, the specs are:

-   Intel i5 7500
-   32GB of 3200MHz RAM
-   500GB Samsung SSD 970 EVO NVMe drive
-   Ubuntu Server 23.04

The drive is important because of how I set up the tests.

## Why?

One reason:

1. Why not?

## Methodology

The goal of this is to benchmark USB drives in a series of different RAID configurations and see how they perform.

1. We are using lvm to create logical volumes for RAID0, RAID4, RAID5, and RAID6, so we first need to set up the volume group with:

    ```sh
    # vgcreate usb /dev/sd{a..i}
    ```

    The `/dev/sd{a..i}` will automatically get expanded to `/dev/sda /dev/sdb /dev/sdc ... /dev/sdi` on the execution side, and since our drives are all consecutive in our system we can do that.

2. Now we need to set up the logical volumes. I'm pretty sure performance stays constant through the entire flash memory block, so I am creating all of the RAID volumes at the same time. They are all going to be 16GB-ish due to the way LVM works.

    ```sh
    # lvcreate --type raid0 -L 16G usb -n raid0 -i 9
    # lvcreate --type raid4 -L 16G usb -n raid4 -i 8
    # lvcreate --type raid5 -L 16G usb -n raid5 -i 8
    # lvcreate --type raid6 -L 16G usb -n raid6 -i 7
    ```

3. Apply a filesystem to each volume with:

    ```sh
    # mkfs.ext4 /dev/usb/raid0
    # mkfs.ext4 /dev/usb/raid4
    # mkfs.ext4 /dev/usb/raid5
    # mkfs.ext4 /dev/usb/raid6
    ```

4. For testing, we are going to pre-compose 16 files, with sizes of 1KB, 10KB, 100KB, 1MB, 10MB, 100MB, 1GB, and 10GB and place them on the internal SSD. One half of them is going to be all zeros, and the other half is going to be full of random data.

    ```sh
    mkdir sources

    for size in "1k" "10k" "100k" "1M" "10M" "100M" "1G"; do
        for file in "urandom" "zero"; do
            dd if=/dev/$file of=sources/$size-$file.dat bs=$size
        done
    done
    ```

    The 10GB files had to be created specially due to some internal limitations in `dd`:

    ```sh
    for file in "urandom" "zero"; do
        dd if=/dev/$file of=sources/10G-$file.dat bs=1G count=10
    done
    ```

    I know there are more efficient ways to do this, but speed isn't important here and we have more than enough computing power to make it work.

5. Now, we have this messy bash file that essentially does a few things: It takes files that I've already created sized 1KB, 10KB, 100KB, 1MB, 10MB, 100MB, 1GB, and 10GB and times how long it takes to write that file to each logical volume and then how long it takes to read it back again. There's a 30 second pause between each segment to wait for temperatures to settle back down to normal. The results get thrown into two .csv files for analysis later.

    ```sh
    #!/bin/bash

    count="1"
    sleeptime="30"
    sectorsize="16k"

    echo "volume,source,trial number,file size,bytes,seconds" | tee "raid-results-write.csv" "raid-results-read.csv"

    for volume in "raid0" "raid4" "raid5" "raid6"; do
        for sourcefile in "zero" "urandom"; do
            for bs in "1k" "10k" "100k" "1M" "10M" "100M" "1G" "10G"; do
                for rep in {1..20}; do
                    touch mounts/$volume/.raid_test
                    sleep 1

                    dd if=sources/$bs-$sourcefile.dat of=mounts/$volume/.raid_test bs=$sectorsize 2>&1 | awk 'END{print "'$volume'"",""'$sourcefile'"",""'$rep'"",""'$bs'"","$1","$8}' | tee --append "raid-results-write.csv"

                    # echo "Sleeping $sleeptime seconds for things to equalize before proceeding..."
                    sleep $sleeptime

                    dd if=mounts/$volume/.raid_test of=/dev/null 2>&1 | awk 'END{print "'$volume'"",""'$sourcefile'"",""'$rep'"",""'$bs'"","$1","$8}' | tee --append "raid-results-read.csv"

                    # echo "Sleeping $sleeptime seconds for things to equalize before proceeding..."
                    sleep $sleeptime

                    rm mounts/$volume/.raid_test
                    sleep 1
                done
            done
        done
    done
    ```

    Just a copule of notes: `$sectorsize` is 16kb to match the default sector size that got set up with the logical volumes. And because the files are come from an NVMe drive I'm not concerned about the write speeds on the USB drives outpacing the read speeds of the system drive.

## Results

**to be filled in later once results are available.**
