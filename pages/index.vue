<template>
    <main>
        <img src="/profile.jpg" id="profile-image" />
        <h1>
            Hello,
            <br>
            My name is Quinn Gale
        </h1>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-columns: 1;
    place-content: center;
    place-items: center;
    padding: 8rem 0;
}

#profile-image {
    border-radius: 100%;
    width: 60vw;
    max-width: 320px;
    animation: image-in 1.2s ease 1000ms backwards;
}

h1 {
    animation: text-in 1.2s ease 500ms backwards;
}

@keyframes text-in {
    from {
        opacity: 0;
        transform: translateY(10vh);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes image-in {
    from {
        opacity: 0;
        transform: translateY(-10vh);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

<script>
export default {
    data() {
        return {
            ready: false
        }
    },

    methods: {
        setReady() {
            console.log('image loaded');
            this.ready = true;
        }
    }
}
</script>