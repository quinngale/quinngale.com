import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		blog: defineCollection({
			type: 'page',
			source: 'blog/*.md',
		}),
		oneoff: defineCollection({
			type: 'page',
			source: 'one-off/*.md',
		}),
		project: defineCollection({
			type: 'page',
			source: 'project/*.md',
		}),
	},
});
