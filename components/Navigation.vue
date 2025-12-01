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
                        <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" fixed-width />
                    </Icon>

                    Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/portfolio" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="byPrefixAndName.fas['display-code']" fixed-width />
                    </Icon>

                    Portfolio
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/blog" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="byPrefixAndName.fas['newspaper']" fixed-width />
                    </Icon>

                    Blog
                </NuxtLink>
            </li>
            <li>
                <NuxtLink href="/about" @click="isNavExpanded = false" active-class="--active"
                    exact-active-class="--active-exact">
                    <Icon>
                        <FontAwesomeIcon :icon="byPrefixAndName.fas['user']" fixed-width />
                    </Icon>

                    About
                </NuxtLink>
            </li>
        </ul>
        <button @click="isNavExpanded = !isNavExpanded" aria-label="Show or hide the navigation">
            <Icon>
                <FontAwesomeIcon :icon="byPrefixAndName.fas['caret-down']"
                    :transform="isNavExpanded ? 'rotate-180' : 'rotate-0'" />
            </Icon>
            <span>
                Menu
            </span>
        </button>
    </nav>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-3587f0af61/icons';

import { ref } from 'vue';

const isNavExpanded = ref({});
</script>