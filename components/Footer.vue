<script setup lang="ts">
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';

</script>

<template>
	<footer>
		<section class="grid">
			<p>
				<NuxtLink href="mailto:q.gale@live.com" class="link">
					<Icon>
						<FontAwesomeIcon :icon="faEnvelope" />
					</Icon>
					<span>q.gale@live.com</span>
				</NuxtLink>
			</p>
			<p>
				<NuxtLink href="https://github.com/quinngale/quinngale.com" class="link">
					<span class="link__icon">
						<Icon>
							<FontAwesomeIcon :icon="faGithub" />
						</Icon>
					</span>
					<span>GitHub - @quinngale</span>
				</NuxtLink>
			</p>
			<p>
				<NuxtLink href="https://www.linkedin.com/in/quinngale/" class="link">
					<span class="link__icon">
						<Icon>
							<FontAwesomeIcon :icon="faLinkedin" />
						</Icon>
					</span>
					<span>LinkedIn - quinngale</span>
				</NuxtLink>
			</p>

			<p>© 2025 Quinn Gale</p>
		</section>
	</footer>
</template>