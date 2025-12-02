<template>
    <main class="grid">
        <div class="full-width --inverted">
            <article class="content">
                <section id="section-1">
                    <img src="/profile.jpg" id="profile-image" />
                </section>
                <div id="text-content">
                    <section id="intro-text">
                        <h1>
                            Hello,
                            <br>
                            My name is Quinn
                        </h1>
                        <p>
                            I am a Web and User Experience student. I also have a strong background in technical support
                            and customer service.
                        </p>
                    </section>

                    <section id="buttons">
                        <NuxtLink to="/about" class="button" id="button-1">
                            About Me
                            <Icon>
                                <FontAwesomeIcon :icon="faCaretLargeRight" />
                            </Icon>
                        </NuxtLink>
                        <NuxtLink to="/portfolio" class="button" id="button-2">
                            My Work
                            <Icon>
                                <FontAwesomeIcon :icon="faCaretLargeRight" />
                            </Icon>
                        </NuxtLink>
                    </section>
                </div>
            </article>
        </div>


    </main>
</template>

<script setup lang="ts">
import { faCaretLargeRight } from '@fortawesome/pro-solid-svg-icons';

useHead(
    {
        title: null
    }
)
</script>

<style>
#profile-image {
    width: 40vh;
    max-width: 100%;
    border-radius: 100%;
    margin-inline: auto;
    display: block;
}

#buttons {
    display: grid;
    gap: 1rem;
}
</style>