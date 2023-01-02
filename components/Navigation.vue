<template>
    <nav id="site-nav" class="nav" :class="{ expanded: isNavExpanded }">
        <ul>
            <li class="nav-brand">
                <Logo @click="isNavExpanded = false" />
            </li>
            <li class="nav-link">
                <NuxtLink href="/" @click="isNavExpanded = false">Home</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink href="/about" @click="isNavExpanded = false">About</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink href="/portfolio" @click="isNavExpanded = false">Portfolio</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink href="/contact" @click="isNavExpanded = false">Contact</NuxtLink>
            </li>
        </ul>
        <button @click="isNavExpanded = !isNavExpanded">
            <font-awesome-icon :icon="['fa-regular', 'angle-up']" v-if="isNavExpanded" />
            <font-awesome-icon :icon="['fa-regular', 'angle-down']" v-else />
            Menu
        </button>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isNavExpanded: false
        }
    }
}
</script> 