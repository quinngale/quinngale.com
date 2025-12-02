<template>
    <nav id="site-nav" class="full-width" :class="{ 'nav--expanded': isNavExpanded }">
        <ul class="">
            <li>
                <Logo @click="isNavExpanded = false" />
            </li>
            <li>
                <NuxtLink href="/" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-house" fixed-width />
                    </Icon>

                    Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/portfolio" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-display-code" fixed-width />
                    </Icon>

                    Portfolio
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/blog" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-newspaper" fixed-width />
                    </Icon>

                    Blog
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/about" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon icon="fa-solid fa-user" fixed-width />
                    </Icon>

                    About
                </NuxtLink>
            </li>
        </ul>
        <button @click="isNavExpanded = !isNavExpanded" aria-label="Show or hide the navigation">
            <Icon>
                <FontAwesomeIcon icon="fa-solid fa-caret-down" :transform="isNavExpanded ? 'rotate-180' : 'rotate-0'" />
            </Icon>
            <span>
                Menu
            </span>
        </button>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isNavExpanded = ref(false);
</script>