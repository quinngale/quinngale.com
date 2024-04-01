<template>
    <main>
        <article class="grid">
            <header class="header">
                <h1 class="header__title">Blog</h1>
            </header>

            <section>
                <p>
                    Project updates, <small>(informal and unscientific)</small> experiment results, and documentation of
                    processes.
                </p>
            </section>

            <section>
                <ListGroup>
                    <ContentList path="/blog" v-slot="{ list }">
                        <ListGroupItem v-for="(item, index) in list" :key="index">
                            <ListGroupItemSection>
                                <h3>{{ item.title }}</h3>
                            </ListGroupItemSection>
                            <div class="columns">
                                <div class="column">
                                    <figure>
                                        <img :src="item.thumbnail" :alt="item.alt_text">
                                    </figure>
                                </div>
                                <div class="column">
                                    <p>{{ item.description }}</p>
                                    <p>
                                        <a :href="item._path">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </ListGroupItem>
                    </ContentList>
                </ListGroup>
            </section>
        </article>
    </main>
</template>