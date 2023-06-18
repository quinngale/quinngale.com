<template>
    <main class="main">
        <article class="container">
            <header class="header">
                <h1 class="header__title">Portfolio</h1>
            </header>


            <section>
                <p>
                    The portfolio is a collection of projects that I have worked on. Most of these are personal projects
                    that contribute something of dubious usefulness to my life.
                </p>
            </section>

            <section>
                <h2>Projects</h2>
                <ul>
                    <ContentQuery path="/project" v-slot="{ data }" find>
                        <li v-for="stub in data" :key="stub._path">
                            <img :src="stub.image" alt="Placeholder image" />
                            <ContentRenderer :value="stub" excerpt :components="components" tag="article" />
                        </li>
                    </ContentQuery>
                </ul>
            </section>

            <section>
                <h2>One-offs</h2>

                <p>A collection of small projects and nearly-one-liners that I have created. None of these are technically
                    challenging, but they solved a need I had at that moment in time. I'm making them public here in hopes
                    that
                    maybe someone else will find them useful in the future.</p>
            </section>
        </article>
    </main>
</template>

<script setup>
const components = {
    h1: 'strong'
}
</script>

<style scoped>
ul {
    list-style: none;
}

li {
    display: flex;
    flex-flow: column;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--shadow);
}

li>img:first-child {
    z-index: -1;
    width: 100%;
    height: auto;
    margin-bottom: 0;
    aspect-ratio: 2/1;
    object-fit: cover;
}

li>article {
    margin: 0;
    padding: 1rem;
    background-color: var(--background);
    color: var(--text);
    z-index: 1;
    width: 100%;
}

li p {
    margin: 0 !important;
}
</style>