// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/css/main.css'],

	build: {
		transpile: ['@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/pro-regular-svg-icons'],
	},
});
