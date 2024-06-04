<template>
    <main class="grid">
        <h1>Page title</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aspernatur dolore repudiandae quae omnis in
            fuga numquam magni incidunt, magnam quis libero atque deserunt cum? Accusamus distinctio voluptate ipsa
            nihil.
        </p>

        <h2>This is a heading</h2>
        <p>Some more text here</p>
        <ul>
            <li>an unordered</li>
            <li>list with</li>
            <li>4 items</li>
            <li>in it</li>
        </ul>

        <h3>Check it out!</h3>
        <Columns>
            <Column>
                <Card emphasis>
                    <CardTitle>
                        <strong>
                            Attention-grabbing card title
                        </strong>
                    </CardTitle>
                    <CardSection>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ipsa magni animi, deleniti
                        deserunt voluptatem iure adipisci modi maiores repellat ab expedita quod hic consequatur aut
                        veritatis eveniet in tempore.
                    </CardSection>
                </Card>
            </Column>
            <Column>
                <Card>
                    <CardTitle>
                        <strong>
                            Another attention grabbing title
                        </strong>
                    </CardTitle>
                    <CardSection>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste quaerat minima nesciunt,
                        corporis, voluptas tenetur iusto necessitatibus impedit a odit eveniet dolorem porro tempore
                        aliquam sint dolorum facilis. Ratione?
                    </CardSection>
                </Card>
            </Column>
        </Columns>


        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima rerum placeat quidem,
            necessitatibus architecto veniam eos excepturi alias earum. Odio, quas modi blanditiis id facere deleniti
            exercitationem? Explicabo, quo.
        </p>
        <hr>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro iste molestias dolores aliquam totam sunt
            consequatur odit cumque temporibus! Quia praesentium itaque saepe. Mollitia ipsam minima adipisci ea unde!
        </p>
        <h2>Another heading</h2>
        <ol>
            <li>four more</li>
            <li>items in</li>
            <li>this list</li>
            <li>for demonstration</li>
        </ol>

        <Tags>
            <Tag>
                <template #icon>
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'tag']" fixed-width />
                    </Icon>
                </template>
                Tag 1
            </Tag>
            <Tag>
                <template #icon>
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'tag']" fixed-width />
                    </Icon>
                </template>
                Tag 2
            </Tag>
            <Tag>
                <template #icon>
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'tag']" fixed-width />
                    </Icon>
                </template>
                Tag 3
            </Tag>
            <Tag>
                <template #icon>
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'tag']" fixed-width />
                    </Icon>
                </template>
                Tag 4
            </Tag>
        </Tags>
    </main>

</template>