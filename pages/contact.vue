<template>
    <main>
        <article class="container">
            <header class="header">
                <h1 class="header__title">Contact</h1>
            </header>

            <section>
                <div class="columns">
                    <div class="column">
                        <Card>
                            <CardIcon>
                                <Icon>
                                    <fontAwesomeIcon :icon="['fas', 'envelope']" />
                                </Icon>
                            </CardIcon>
                            <CardSection>
                                <strong>Email:</strong> <a href="mailto:quinn@quinngale.com">quinn@quinngale.com</a>
                            </CardSection>
                        </Card>
                    </div>
                    <div class="column">
                        <Card>
                            <CardIcon>
                                <Icon>
                                    <fontAwesomeIcon :icon="['fab', 'github']" />
                                </Icon>
                            </CardIcon>
                            <CardSection>
                                <strong>GitHub:</strong> <a href="https://github.com/quinngale">@quinngale</a>
                            </CardSection>
                        </Card>
                    </div>
                </div>
            </section>
        </article>
    </main>
</template>