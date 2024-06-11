<template>
    <main class="grid">
        <header class="header">
            <h1>About me</h1>
        </header>

        <article>
            <h2>Who I am</h2>
            <p>
                My name is Quinn. Outside of work, I'm usually learning new things, experimenting, and <small>attempting
                    to</small> push
                the envelope. Hobbies include 3D modeling in <a href="blender.org">Blender</a> (mostly hard-surface
                things),
                building and playing with web
                technologies, fidling with my desktop-computer-turned-linux-server, cooking, and playing mostly
                single-player computer games.
            </p>
        </article>

        <article>
            <h2>Contact</h2>

            <Columns>
                <Column>
                    <Card>
                        <CardIconOverlay>
                            <Icon>
                                <fontAwesomeIcon :icon="['fas', 'envelope']" />
                            </Icon>
                        </CardIconOverlay>
                        <CardSection>
                            <strong>Email:</strong> <a href="mailto:q.gale@live.com">q.gale@live.com</a>
                        </CardSection>
                    </Card>
                </Column>
                <Column>
                    <Card>
                        <CardIconOverlay>
                            <Icon>
                                <fontAwesomeIcon :icon="['fab', 'github']" />
                            </Icon>
                        </CardIconOverlay>
                        <CardSection>
                            <strong>GitHub:</strong> <a href="https://github.com/quinngale">@quinngale</a>
                        </CardSection>
                    </Card>
                </Column>
            </Columns>
        </article>

        <article class="full-width">
            <h2>Skills</h2>

            <p>
                Through my work and school experience I have picked up a set of soft skills—mostly centered around
                technical communication and troubleshooting. I have been told that I am good at communicating technical
                information to my end users in a way that they understand.
            </p>

            <p>
                My philosophy on that point is that as a rule, people work better when they have information about how
                the system they are using works. Further: Anytime someone doesn't understand an application or process
                in their system it is an education issue and not a user issue. To put that another way, anyone can write
                a program in Python that prints "Hello world!"—copy and paste <code>print("Hello world!")</code> into a
                file with a .py extension—but understanding why that works and how Python makes that happen behind the
                curtains allows one to write better scripts and programs. To that end, I have geared my
                processes toward prioritizing education.
            </p>

            <p>
                Education is a two-way street. Just like the person on the other end of your phone call doesn't usually
                have
                your context, you don't have theirs. It is your responsiblity to understand their life and how
                you fit into it <em>before</em> any meaningful problem solving and solutions can start happening.
            </p>

            <p>
                With that in mind, here's the obligatory list of hard skills. Pick and choose from that list what you
                want.
            </p>

            <Tags>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'css3']" fixed-width />
                        </Icon>
                    </template>
                    CSS
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'git']" fixed-width />
                        </Icon>
                    </template>
                    Git
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['solid', 'cat']" fixed-width />
                        </Icon>
                    </template>
                    Herding cats
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['fab', 'html5']" fixed-width />
                        </Icon>
                    </template>
                    HTML
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'apple']" fixed-width />
                        </Icon>
                    </template>
                    iOS
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'js']" fixed-width />
                        </Icon>
                    </template>
                    Javascript
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'linux']" fixed-width />
                        </Icon>
                    </template>
                    Linux
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'apple']" fixed-width />
                        </Icon>
                    </template>
                    macOS
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'microsoft']" fixed-width />
                        </Icon>
                    </template>
                    Microsoft Office
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'windows']" fixed-width />
                        </Icon>
                    </template>
                    Microsoft Windows
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'php']" fixed-width />
                        </Icon>
                    </template>
                    PHP
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'python']" fixed-width />
                        </Icon>
                    </template>
                    Python
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'sass']" fixed-width />
                        </Icon>
                    </template>
                    SASS
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['solid', 'database']" fixed-width />
                        </Icon>
                    </template>
                    SQL
                </Tag>
                <Tag>
                    <template #icon>
                        <Icon>
                            <FontAwesomeIcon :icon="['brands', 'vuejs']" fixed-width />
                        </Icon>
                    </template>
                    VueJS
                </Tag>
            </Tags>
        </article>

        <article class="">
            <h2>Education</h2>
            <Columns>
                <Column>
                    <Card emphasis>
                        <CardTitle>
                            <strong>
                                Bachelor of Science in Web and User Experience
                            </strong>
                        </CardTitle>
                        <CardSection>
                            April 2023 - <a href="http://weber.edu">Weber State University</a>
                        </CardSection>
                    </Card>
                </Column>
                <Column>
                    <Card>
                        <CardTitle>
                            <strong>
                                Certificate of Proficiency in Web and User Experience
                            </strong>
                        </CardTitle>
                        <CardSection>
                            April 2022 - <a href="http://weber.edu">Weber State University</a>
                        </CardSection>
                    </Card>
                </Column>
            </Columns>
        </article>

        <article>
            <h2>Work</h2>

            <ListGroup>
                <ListGroupItem>
                    <ListGroupItemSection>
                        <strong>
                            Technical Support Specialist
                        </strong>
                    </ListGroupItemSection>
                    <ListGroupItemSection>
                        2016–Now - <a href="http://weber.edu">Weber State University</a>
                    </ListGroupItemSection>
                    <ListGroupItemSection>
                        <p>
                            The brief version of the job description is to assist faculty, staff, and students with
                            their technical
                            support questions. They could come in through a phone call, an email, a chat, a ticket
                            that they created through the website, or pretty much any other way that we could take
                            action with. The help requests themselves were just as varied. Some of the most common calls
                            we get include helping people with account issues, Wi-Fi troubleshooting, and setting up
                            computers for the employees on campus.
                        </p>
                        <p>
                            In early 2020 I was promoted to a tech lead position, and while this didn't majorly impact
                            my day-to-day schedule it did add a few extra responsibilities—making sure that the rest of
                            the techs were able to do their job effectively and working on some of the harder tickets
                            that worked their way into the queue.
                        </p>
                        <p>
                            In August of 2022 the tech lead duties were shifted to a full-time position with some shiny
                            new responsibilities:
                        </p>
                        <ul>
                            <li>
                                Quality assurance
                            </li>
                            <li>
                                Helping keep our knowledgebase up-to-date and complete
                            </li>
                            <li>
                                "Problem recognition" or bringing up problems as they arise to my manager and
                                administrators
                                that they might not have noticed
                            </li>
                            <li>
                                Compiling ticket reports
                            </li>
                            <li>Filling in on the front-desk duties as needed</li>
                        </ul>
                        <hr />
                        <p>
                            My first priority is always helping the students that reach out to us—making sure they have
                            the
                            technology
                            and tools to be succesful with their education. When possible, I will try to help the
                            student
                            understand at
                            least at a high level what and why we are doing what we are through the course of
                            troubleshooting
                            and
                            solving the problem they are calling about.
                        </p>
                    </ListGroupItemSection>
                </ListGroupItem>
            </ListGroup>
        </article>
    </main>
</template>

<script setup>
useHead({
    title: 'About'
})
</script>