<script setup>
const slug = useRoute().params.slug
console.log(slug)
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog')
        .path(`/blog/${slug}`)
        .first()
})
</script>

<template>
    <ContentRenderer :value="post" :tag="'main'" class="grid" />
</template>