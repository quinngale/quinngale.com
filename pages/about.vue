<template>
    <main>
        <article class="container">
            <header class="header">
                <h1 class="header__title">About</h1>
            </header>

            <section>
                <h2>Skills</h2>

                <p>
                    The following are programming languages and systems I would consider myself as being knowledgable in:
                </p>

                <Tags>
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
                                <FontAwesomeIcon :icon="['brands', 'css3']" fixed-width />
                            </Icon>
                        </template>
                        CSS
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
                                <FontAwesomeIcon :icon="['brands', 'python']" fixed-width />
                            </Icon>
                        </template>
                        Python
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
                            <FontAwesomeIcon :icon="['solid', 'cat']" fixed-width />
                        </template>
                        Cat herding
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
                                <FontAwesomeIcon :icon="['brands', 'microsoft']" fixed-width />
                            </Icon>
                        </template>
                        Microsoft Office
                    </Tag>
                    <Tag>
                        <template #icon>
                            <Icon>
                                <FontAwesomeIcon :icon="['brands', 'vuejs']" fixed-width />
                            </Icon>
                        </template>
                        VueJS
                    </Tag>
                    <Tag>
                        <template #icon>
                            <FontAwesomeIcon :icon="['brands', 'windows']" fixed-width />
                        </template>
                        Windows
                    </Tag>
                    <Tag>
                        <template #icon>
                            <FontAwesomeIcon :icon="['brands', 'apple']" fixed-width />
                        </template>
                        macOS
                    </Tag>
                    <Tag>
                        <template #icon>
                            <FontAwesomeIcon :icon="['brands', 'apple']" fixed-width />
                        </template>
                        iOS
                    </Tag>
                    <Tag>
                        <template #icon>
                            <FontAwesomeIcon :icon="['brands', 'git']" fixed-width />
                        </template>
                        Git
                    </Tag>
                    <Tag>
                        <template #icon>
                            <FontAwesomeIcon :icon="['brands', 'php']" fixed-width />
                        </template>
                        PHP
                    </Tag>
                    <Tag>
                        <template #icon>
                            <FontAwesomeIcon :icon="['brands', 'sass']" fixed-width />
                        </template>
                        SASS
                    </Tag>
                </Tags>

                <p>

                </p>
            </section>

            <section>
                <h2>Degrees and certificates</h2>
                <Columns>
                    <Column>
                        <Card>
                            <CardTitle>
                                <strong>
                                    <Icon>
                                        <FontAwesomeIcon :icon="['fas', 'graduation-cap']" />
                                    </Icon>
                                    Bachelor of Science in Web and User Experience
                                </strong>
                            </CardTitle>
                            <CardSection>
                                <em>April 2023</em>
                            </CardSection>
                            <CardSection>
                                <a href="http://weber.edu">Weber State University</a>
                            </CardSection>
                        </Card>
                    </Column>
                    <Column>
                        <Card>
                            <CardTitle>
                                <strong>

                                    <Icon>
                                        <FontAwesomeIcon :icon="['fas', 'file-certificate']" />
                                    </Icon>
                                    Certificate of Proficiency in Web and User Experience
                                </strong>
                            </CardTitle>
                            <CardSection>
                                <em>April 2022</em>
                            </CardSection>
                            <CardSection>
                                <a href="http://weber.edu">Weber State University</a>
                            </CardSection>
                        </Card>
                    </Column>
                </Columns>
            </section>

            <section>
                <h2>Work history</h2>

                <ListGroup>
                    <ListGroupItem>
                        <ListGroupSection>
                            <Icon>
                                <FontAwesomeIcon :icon="['solid', 'headset']" fixed-width />
                            </Icon>
                            <strong>Technical Support Specialist</strong>
                        </ListGroupSection>
                        <ListGroupSection>
                            <em>
                                2016–Now
                            </em>
                        </ListGroupSection>
                        <ListGroupSection>
                            <a href="http://weber.edu">Weber State University</a>
                        </ListGroupSection>
                        <ListGroupSection>
                            <p>
                                The brief version of the job description is to assist faculty, staff, and students with
                                their technical
                                support questions. They could come in through a phone call, an email, a chat, a ticket
                                that they created through the website, or pretty much any other way that we could take
                                action with. The help requests themselves were just as varied. Some of the most common calls
                                we get include helping people with account access, Wi-Fi troubleshooting, and setting up
                                computers for new employees. Often, we were in employee's offices helping them resolve the
                                issue they called us about.
                            </p>
                            <p>
                                In early 2020 I was promoted to a tech lead position, and while this didn't majorly impact
                                what my day-to-day schedule looked like it did add a few extra responsibilities, namely
                                making sure that the rest of the techs were able to do their job effectively and acting as a
                                communicator between them and my manager when problems arose.
                            </p>
                            <p>
                                Moving on to the tail end of 2022, I applied for and got a new-to-the-department full time
                                position within the same team that is an extension on the tech lead position I held before.
                                My job descrition shifted a little bit from being a strictly front-line support position to
                                also including some level 2 support, resolving harder tickets, and quality assurance.
                            </p>
                        </ListGroupSection>
                    </ListGroupItem>
                </ListGroup>
            </section>
        </article>
    </main>
</template>