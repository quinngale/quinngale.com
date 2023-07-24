<template>
    <main class="main">
        <article class="container">
            <header class="header">
                <h1 class="header__title">About</h1>
            </header>

            <section>
                <h2>Degrees and certificates</h2>
            </section>

            <section>
                <h2>Work history</h2>
                <ul class="timeline">
                    <li class="timeline__item">
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-briefcase']" />
                        </div>
                        <div class="content">
                            <p>New job - July 2016</p>
                            <p>Technical Support Specialist</p>
                            <div>
                                <BadgesWSU />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-graduation-cap']" />
                        </div>
                        <div class="content">
                            <p>Start college - August 2016</p>
                            <p><strong>Major: </strong>Computer Science</p>
                            <div>
                                <BadgesWSU />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-briefcase']" />
                        </div>
                        <div class="content">
                            <p>Position change - March 2019</p>
                            <p>Technical Support Specialist - Tech Lead</p>
                            <div>
                                <BadgesWSU />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-graduation-cap']" />
                        </div>
                        <div class="content">
                            <p>Degree change - January 2020</p>
                            <p><strong>Major: </strong>Web and User Experience</p>
                            <p><strong>Minor: </strong>Computer Science</p>
                            <div>
                                <BadgesWSU />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-briefcase']" />
                        </div>
                        <div class="content">
                            <p>Position change - August 2022</p>
                            <p>Technical Support Specialist - Move to full time position</p>
                            <div>
                                <BadgesWSU />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <font-awesome-icon :icon="['fa-solid', 'fa-graduation-cap']" />
                        </div>
                        <div class="content">
                            <p>Graduation - April 2023</p>
                            <p>Bachelors of Science in Web and User Experience</p>
                            <div>
                                <BadgesWSU />
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    </main>
</template>