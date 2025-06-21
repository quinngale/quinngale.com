<template>
    <nav id="site-nav" class="grid" :class="{ 'nav--expanded': isNavExpanded }">
        <ul class="">
            <li>
                <Logo @click="isNavExpanded = false" />
            </li>
            <li>
                <NuxtLink href="/" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'house']" fixed-width />
                    </Icon>

                    Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/portfolio" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'display-code']" fixed-width />
                    </Icon>

                    Portfolio
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/blog" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'newspaper']" fixed-width />
                    </Icon>

                    Blog
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/about" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="['solid', 'user']" fixed-width />
                    </Icon>

                    About
                </NuxtLink>
            </li>
        </ul>
        <button @click="isNavExpanded = !isNavExpanded" aria-label="Show or hide the navigation">
            <FontAwesomeIcon :icon="['solid', 'caret-down']" :transform="isNavExpanded ? 'rotate-180' : 'rotate-0'" />
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