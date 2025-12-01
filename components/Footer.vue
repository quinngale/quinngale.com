<template>
	<footer>
		<section class="grid">
			<p>
				<NuxtLink href="mailto:q.gale@live.com" class="link">
					<Icon>
						<FontAwesomeIcon :icon="byPrefixAndName.fas['envelope']" />
					</Icon>
					<span>q.gale@live.com</span>
				</NuxtLink>
			</p>
			<p>
				<NuxtLink href="https://github.com/quinngale/quinngale.com" class="link">
					<span class="link__icon">
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['github']" />
						</Icon>
					</span>
					<span>GitHub - @quinngale</span>
				</NuxtLink>
			</p>
			<p>
				<NuxtLink href="https://www.linkedin.com/in/quinngale/" class="link">
					<span class="link__icon">
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['linkedin']" />
						</Icon>
					</span>
					<span>LinkedIn - quinngale</span>
				</NuxtLink>
			</p>

			<p>© 2025 Quinn Gale</p>
		</section>
	</footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-3587f0af61/icons';
</script>