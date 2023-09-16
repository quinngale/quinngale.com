<template>
    <span :class="emphasis ? 'tag--emphasis' : 'tag'">
        <slot name="icon"></slot>

        <slot></slot>
    </span>
</template>

<script setup>
defineProps({
    emphasis: Boolean
})
</script>