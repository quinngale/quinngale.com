<template>
    <main>
        <article class="grid">
            <header class="header">
                <h1 class="header__title">Contact</h1>
            </header>

            <section>
                <div class="columns">
                    <div class="column">
                        <Card>
                            <CardIconOverlay>
                                <Icon>
                                    <fontAwesomeIcon :icon="['fas', 'envelope']" />
                                </Icon>
                            </CardIconOverlay>
                            <CardSection>
                                <strong>Email:</strong> <a href="mailto:quinn@quinngale.com">quinn@quinngale.com</a>
                            </CardSection>
                        </Card>
                    </div>
                    <div class="column">
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
                    </div>
                </div>
            </section>
        </article>
    </main>
</template>