// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {
		transpile: ['@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/pro-regular-svg-icons'],
	},

	css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/fonts/Inter/inter.css', '~/assets/scss/main.scss'],

	modules: ['@nuxt/content'],

	app: {
		head: {
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.svg',
				},
			],
		},
	},
});
