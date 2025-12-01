<template>
    <main class="grid">
        <header class="header">
            <h1 class="header__title">Blog</h1>
        </header>

        <p>
            Project updates, <small>(informal and unscientific)</small> experiment results, and documentation of
            processes.
        </p>

        <article v-for="page in pages" :key="page.id">
            <div class="columns">
                <div class="column">
                    <figure>
                        <img :src="page.meta.thumbnail" :alt="page.meta.alt_text">
                    </figure>
                </div>
                <div class="column">
                    <h3>{{ page.title }}</h3>
                    <p>{{ page.description }}</p>
                    <p>
                        <NuxtLink :to="page.path" class="button">
                            Read more
                            <Icon>
                                <FontAwesomeIcon :icon="byPrefixAndName.fas['caret-large-right']" />
                            </Icon>
                        </NuxtLink>
                    </p>
                </div>
            </div>
        </article>


    </main>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-3587f0af61/icons';

useHead({
    title: "Blog"
})
const { data: pages } = await useAsyncData(`blog`, () => {
    return queryCollection('blog').all()
})
</script>