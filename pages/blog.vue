<template>
    <main class="grid">
        <header class="header">
            <h1 class="header__title">Blog</h1>
        </header>
        <p>
            Project updates, <small>(informal and unscientific)</small> experiment results, and documentation of
            processes.
        </p>

        <ContentList path="/blog" v-slot="{ list }">
            <article v-for="(item, index) in list" :key="index">
                <div class="columns">
                    <div class="column">
                        <figure>
                            <img :src="item.thumbnail" :alt="item.alt_text">
                        </figure>
                    </div>
                    <div class="column">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                        <p>
                            <a :href="item._path" class="button">
                                Read more
                                <Icon>
                                    <FontAwesomeIcon :icon="['solid', 'chevron-right']" />
                                </Icon>
                            </a>
                        </p>
                    </div>
                </div>
            </article>
        </ContentList>
    </main>
</template>

<script setup>
useHead({
    title: "Blog"
})
</script>