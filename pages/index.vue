<template>
    <main class="grid">
        <div class="full-width">
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
                        <a href="/about" class="button" id="button-1">
                            <span>
                                About Me
                            </span>
                            <Icon>
                                <FontAwesomeIcon :icon="['solid', 'caret-right']" />
                            </Icon>
                        </a>
                        <a href="/portfolio" class="button" id="button-2">
                            <span>
                                My Work
                            </span>
                            <Icon>
                                <FontAwesomeIcon :icon="['solid', 'caret-right']" />
                            </Icon>
                        </a>
                    </section>
                </div>
            </article>
        </div>


    </main>
</template>

<script setup lang="ts">
definePageMeta(
    {
        layout: 'home'
    }
);

useHead(
    {
        title: null
    }
)
</script>
