<template>
    <main class="main">
        <article class="container">
            <header class="header">
                <h1 class="header__title">About</h1>
            </header>

            <section>
                <h2>Skills</h2>

                <p>
                    The following are programming languages and systems I would consider myself as being knowledgable in:
                </p>

                <p>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['fab', 'html5']" fixed-width />
                        </span>
                        <span>HTML</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['brands', 'css3']" fixed-width />
                        </span>
                        <span>CSS</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['brands', 'js']" fixed-width />
                        </span>
                        <span>Javascript</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['brands', 'python']" fixed-width />
                        </span>
                        <span>Python</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['solid', 'database']" fixed-width />
                        </span>
                        <span>SQL</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['brands', 'linux']" fixed-width />
                        </span>
                        <span>Linux</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['brands', 'microsoft']" fixed-width />
                        </span>
                        <span>Microsoft Office</span>
                    </span>
                    <span class="tag">
                        <span class="tag__icon">
                            <font-awesome-icon :icon="['brands', 'vuejs']" fixed-width />
                        </span>
                        <span>VueJS</span>
                    </span>
                </p>

                <p>
                    
                </p>
            </section>

            <section>
                <h2>Degrees and certificates</h2>
                <ul class="list-group">
                    <li class="list-group__item">
                        <div class="list-group__section">
                            <strong>Bachelor of Science in Web and User Experience</strong>
                        </div>
                        <div class="list-group__section">
                            <em>April 2023</em>
                        </div>
                        <div class="list-group__section">
                            <BadgesWSU />
                        </div>
                    </li>
                    <li class="list-group__item">
                        <div class="list-group__section">
                            <strong>Certificate of Proficiency in Web and User Experience</strong>
                        </div>
                        <div class="list-group__section">
                            <em>April 2022</em>
                        </div>
                        <div class="list-group__section">
                            <BadgesWSU />
                        </div>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Work history</h2>

                <ul class="list-group">
                    <li class="list-group__item">
                        <div class="list-group__section">
                            <span class="icon">
                                <font-awesome-icon :icon="['solid', 'headset']" fixed-width />
                            </span>
                            <strong>Technical Support Specialist</strong>
                        </div>
                        <div class="list-group__section">
                            <em>2016–Now
                            </em>
                        </div>
                        <div class="list-group__section">
                            <BadgesWSU />
                        </div>
                        <div class="list-group__section">
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
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    </main>
</template>