<template>
    <main class="grid">
        <section class="full-width">
            <div class="columns">
                <div class="column" id="profile-image-container">
                    <img src="/profile.jpg" id="profile-image" />
                </div>
                <div class="column" id="header-text">
                    <div>
                        <h1>
                            Hello
                            <br>
                            My name is Quinn.
                        </h1>
                        <p>
                            I am a Web and User Experience major in the Salt Lake City, Utah area. I also have a
                            strong background in technical support and customer service.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="full-width">
            <h2>Recent Project</h2>

            <ContentDoc path="/one-off/time" v-slot="{ doc }" :excerpt="true">
                <div class="super-right">
                    <h3>{{ doc.title }}</h3>
                    <div class="columns columns--reverse">
                        <div class="column">
                            <figure>
                                <img :src="doc.thumbnail" :alt="doc.alt_text">
                            </figure>
                        </div>
                        <div class="column">
                            <p>{{ doc.description }}</p>
                            <p><a :href="doc._path">Read More</a></p>
                        </div>
                    </div>
                </div>
            </ContentDoc>

        </section>

        <section>
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
                    <ListGroupItemSection>
                        <Icon>
                            <FontAwesomeIcon :icon="['solid', 'headset']" fixed-width />
                        </Icon>
                        <strong>Technical Support Specialist</strong>
                    </ListGroupItemSection>
                    <ListGroupItemSection>
                        <em>
                            2016–Now
                        </em>
                    </ListGroupItemSection>
                    <ListGroupItemSection>
                        <a href="http://weber.edu">Weber State University</a>
                    </ListGroupItemSection>
                    <ListGroupItemSection>
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
                    </ListGroupItemSection>
                </ListGroupItem>
            </ListGroup>
        </section>
    </main>
</template>

<style lang="scss" scoped>
#profile-image {
    display: block;
    border-radius: 50%;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

#header-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
</style>