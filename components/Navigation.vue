<template>
    <nav id="site-nav" class="nav" :class="{ expanded: isNavExpanded }">
        <ul>
            <li class="nav-brand">
                <Logo />
            </li>
            <li class="nav-link">
                <NuxtLink>Home</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink>About</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink>Portfolio</NuxtLink>
            </li>
            <li class="nav-link">
                <NuxtLink>Contact</NuxtLink>
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