<script setup>
const slug = useRoute().params.slug
console.log(slug)
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('oneoff')
        .path(`/one-off/${slug}`)
        .first()
})
</script>

<template>
    <main class="grid">
        <ContentRenderer :value="post" />
    </main>
</template>