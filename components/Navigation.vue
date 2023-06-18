<template>
    <nav id="site-nav" class="nav" :class="{ 'nav__expanded': isNavExpanded }">
        <ul class="nav__list">
            <li class="nav__brand">
                <Logo @click="isNavExpanded = false" />
            </li>
            <li class="nav__item">
                <NuxtLink href="/" @click="isNavExpanded = false">Home</NuxtLink>
            </li>
            <li class="nav__item">
                <NuxtLink href="/about" @click="isNavExpanded = false">About</NuxtLink>
            </li>
            <li class="nav__item">
                <NuxtLink href="/portfolio" @click="isNavExpanded = false">Portfolio</NuxtLink>
            </li>
            <li class="nav__item">
                <NuxtLink href="/contact" @click="isNavExpanded = false">Contact</NuxtLink>
            </li>
        </ul>
        <button @click="isNavExpanded = !isNavExpanded">
            <font-awesome-icon :icon="['fa-regular', 'angle-down']" :rotation="180 * isNavExpanded" />
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