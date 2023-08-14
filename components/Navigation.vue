<template>
    <nav id="site-nav" :class="{ 'nav--expanded': isNavExpanded }">
        <ul>
            <li>
                <Logo @click="isNavExpanded = false" />
            </li>
            <li>
                <NuxtLink href="/" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink href="/about" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">About</NuxtLink>
            </li>
            <li>
                <NuxtLink href="/portfolio" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">Portfolio
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/blog" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">Blog</NuxtLink>
            </li>
        </ul>
        <button @click="isNavExpanded = !isNavExpanded">
            <FontAwesomeIcon :icon="['fa-regular', 'angle-down']" :rotation="180 * isNavExpanded" />
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