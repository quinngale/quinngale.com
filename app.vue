<template>
    <NuxtLayout>
    </NuxtLayout>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Quinn Gale` : 'Quinn Gale';
    }
})
</script>