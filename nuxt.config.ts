// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,

	// build: {
	// 	transpile: ['@fortawesome/vue-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/pro-regular-svg-icons'],
	// },

	content: {
		build: {
			markdown: {
				highlight: {
					theme: {
						default: 'github-dark',
					},
				},
			},
		},
	},

	css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/scss/main.scss'],
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

	compatibilityDate: '2025-12-01',
});
