<template>
    <main>
            <header class="header">
                <h1 class="header__title">Portfolio</h1>
            </header>

            <!-- <ContentList path="/project" v-slot="{ list }" find>
                <section v-if="list">
                        <h2>Projects</h2>
                        <ul>
                            <li v-for="stub in list" :key="stub._path">
                                <img :src="stub.image" alt="Placeholder image" />
                                <ContentRenderer :value="stub" excerpt :components="components" tag="article" />
                            </li>
                        </ul>
                </section>
            </ContentList> -->

            <article class="full-width grid">
                <h2>One-offs</h2>

                <p>
                    A collection of small projects and nearly-one-liners that I have created. None of these are very
                    technically challenging, but they solved a need I had at that moment in time. I'm making them public
                    here in hopes that maybe someone else will find them useful in the future.
                </p>

                <ListGroup class="full-width grid">
                    <ContentList path="/one-off" v-slot="{ list }">
                        <ListGroupItem v-for="(item, index) in list" :key="index">
                            <div class="columns" :class="{ 'columns--reverse': index % 2 }">
                                <div class="column">
                                    <ListGroupItemSection>
                                        <figure>
                                            <img :src="item.thumbnail" :alt="item.alt_text">
                                        </figure>
                                    </ListGroupItemSection>
                                </div>
                                <div class="column">
                                    <ListGroupItemSection>
                                        <h3>{{ item.title }}</h3>
                                        <p>{{ item.description }}</p>
                                        <br />
                                        <a :href="item._path" class="button">
                                            Read more
                                            <Icon>
                                                <FontAwesomeIcon :icon="['solid', 'chevron-right']" />
                                            </Icon>
                                        </a>
                                    </ListGroupItemSection>
                                </div>
                            </div>
                        </ListGroupItem>
                    </ContentList>
                </ListGroup>
            </article>
    </main>
</template>

<script setup>
const components = {
    h1: 'strong'
}
useHead({
    title: "Portfolio"
})
</script>

<style></style>