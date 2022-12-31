<template>
    <nav id="site-nav" class="nav" :class="{ collapsed: isNavCollapsed }">
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
        <button @click="isNavCollapsed = !isNavCollapsed">
            <font-awesome-icon icon='fa-regular fa-bars' />
            <span>Menu</span>
        </button>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isNavCollapsed: false
        }
    }
}
</script>