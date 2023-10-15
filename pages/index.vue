<template>
    <main>
        <article class="container">
            <section>
                <div class="columns">
                    <div class="column">
                        <img src="/profile.jpg" id="profile-image" />
                    </div>
                    <div class="column--span-2 column--medium--span-1" id="header-text">
                        <div>
                            <h1>
                                Hello
                                <br>
                                My name is Quinn.
                            </h1>
                            <p>
                                I am a Web and User Experience major in the Salt Lake City, Utah area. I also have a
                                strong background in desktop technical support and customer service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Recent Projects</h2>
            </section>

            <section>
                <h2>Skills</h2>

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
            </section>

            <section>
                <h2>Education</h2>
                <Columns>
                    <Column>
                        <Card emphasis>
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
                <h2>Work</h2>

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

<style lang="scss" scoped>
#profile-image {
    border-radius: 50%;
}

#header-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
</style>