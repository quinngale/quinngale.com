<template>
    <footer>
        <section class="container">
            <ul>
                <li>
                    <NuxtLink href="mailto:quinn@quinngale.com">
                        <span class="icon">
                            <font-awesome-icon :icon="['regular', 'at']" />
                        </span>
                        <span>quinn@quinngale.com</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink href="https://github.com/gabeauim/quinngale.com">
                        <span class="icon">
                            <font-awesome-icon :icon="['brands', 'github']" />
                        </span>
                        <span>GitHub</span>
                    </NuxtLink>
                </li>
            </ul>

            <br>

            <p>© 2023 Quinn Gale</p>
        </section>
    </footer>
</template>