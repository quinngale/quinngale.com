<template>
    <main class="grid">
        <article class="full-width --inverted">
            <div class="columns">
                <div class="column" id="profile-image-container">
                    <img src="/profile.jpg" id="profile-image" />
                </div>
                <div class="column" id="header-text">
                    <div>
                        <h1>
                            Hello,
                            <br>
                            My name is Quinn
                        </h1>
                        <p>
                            I am a Web and User Experience student. I also have a strong background in technical support
                            and customer service.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid">
                <p>
                    <a href="/about" class="button">
                        About Me
                        <Icon>
                            <FontAwesomeIcon :icon="['solid', 'chevron-right']" />
                        </Icon>
                    </a>
                </p>
                <br />
                <p>
                    <a href="/portfolio" class="button">
                        My Work
                        <Icon>
                            <FontAwesomeIcon :icon="['solid', 'chevron-right']" />
                        </Icon>
                    </a>
                </p>
            </div>
        </article>


    </main>
</template>

<style lang="scss" scoped>
#profile-image {
    display: block;
    border-radius: 50%;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

#header-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
</style>

<script setup>
useHead({
    title: null
})
</script>