<template>
    <div :class="emphasis ? 'card--emphasis' : 'card'">
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    emphasis: Boolean
})
</script>