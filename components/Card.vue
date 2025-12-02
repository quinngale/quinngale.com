<template>
    <NuxtLink v-if="href" :to="href" class="card">
        <slot></slot>
    </NuxtLink>
    <div v-else class="card">
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    href: String
})
</script>