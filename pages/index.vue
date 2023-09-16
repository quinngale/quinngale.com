<template>
    <main>
        <article class="container">
            <section>
                <div class="columns">
                    <div class="column">
                        <img src="/profile.jpg" id="profile-image" />
                    </div>
                    <div class="column--span-2 column--medium--span-1" id="header-text">
                        <h1>
                            Hello
                            <br>
                            My name is Quinn.
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <h2>Who I am</h2>
                <p>
                    
                </p>
            </section>
            <section>
                <h2>Projects</h2>
            </section>
            <section>
                <h2>How to contact me</h2>
            </section>
        </article>
    </main>
</template>

<style lang="scss" scoped>
#profile-image {
    border-radius: 50%;
}

#header-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
</style>