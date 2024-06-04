<template>
    <footer>
        <section class="grid">
            <p>
                <NuxtLink href="mailto:q.gale@live.com" class="link">
                    <span class="link__icon">
                        <FontAwesomeIcon :icon="['solid', 'envelope']" />
                    </span>
                    <span>q.gale@live.com</span>
                </NuxtLink>
            </p>
            <p>
                <NuxtLink href="https://github.com/quinngale/quinngale.com" class="link">
                    <span class="link__icon">
                        <FontAwesomeIcon :icon="['brands', 'github']" />
                    </span>
                    <span>GitHub</span>
                </NuxtLink>
            </p>

            <p>© 2024 Quinn Gale</p>
        </section>
    </footer>
</template>