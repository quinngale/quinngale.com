<template>
    <main class="grid">
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

        <h2>One-offs</h2>

        <p>
            A collection of small projects and nearly-one-liners that I have created. None of these are very
            technically challenging, but they solved a need I had at that moment in time. I'm making them public
            here in hopes that maybe someone else will find them useful in the future.
        </p>
        <article v-for="(item, index) in oneoffs" :key="index">
            <div class="columns" :class="{ 'columns--reverse': index % 2 }">
                <div class="column">
                    <figure>
                        <img :src="item.meta.thumbnail" :alt="item.alt_text">
                    </figure>
                </div>
                <div class="column">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    <br />
                    <NuxtLink :to="item.path" class="button">
                        Read more
                        <Icon>
                            <FontAwesomeIcon :icon="['solid', 'caret-right']" />
                        </Icon>
                    </NuxtLink>
                </div>
            </div>
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
const { data: oneoffs } = await useAsyncData(`portfolio`, () => {
    return queryCollection('oneoff').all()
})
</script>