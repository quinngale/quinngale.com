<template>
    <nav id="site-nav" class="grid" :class="{ 'nav--expanded': isNavExpanded }">
        <div class="super" id="nav-wrapper">
            <ul class="">
                <li>
                    <Logo @click="isNavExpanded = false" />
                </li>
                <li>
                    <NuxtLink href="/" @click="isNavExpanded = false" active-class="--active"
                        exact-active-class="--active-exact">Home</NuxtLink>
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
                <li>
                    <NuxtLink href="/contact" @click="isNavExpanded = false" active-class="--active"
                        exact-active-class="--active-exact">Contact</NuxtLink>
                </li>
            </ul>
            <button @click="isNavExpanded = !isNavExpanded">
                <FontAwesomeIcon :icon="['fa-regular', 'angle-down']"
                    :transform="isNavExpanded ? 'rotate-180' : 'rotate-0'" />
                Menu
            </button>
        </div>
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