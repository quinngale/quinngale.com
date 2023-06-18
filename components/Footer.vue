<template>
    <footer class="footer">
        <section class="container">
            <p>
                <NuxtLink href="mailto:quinn@quinngale.com" class="link">
                    <span class="link__icon">
                        <font-awesome-icon :icon="['solid', 'envelope']" />
                    </span>
                    <span>quinn@quinngale.com</span>
                </NuxtLink>
            </p>
            <p>
                <NuxtLink href="https://github.com/gabeauim/quinngale.com" class="link">
                    <span class="link__icon">
                        <font-awesome-icon :icon="['brands', 'github']" />
                    </span>
                    <span>GitHub</span>
                </NuxtLink>
            </p>

            <p>© 2023 Quinn Gale</p>
        </section>
    </footer>
</template>