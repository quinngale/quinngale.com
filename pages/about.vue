<template>
	<main class="grid">
		<header class="header">
			<h1>About me</h1>
		</header>

		<article>
			<h2>Who I am</h2>
			<p>
				My name is Quinn.
				Outside of work, I'm usually learning
				new things, experimenting, and <small>attempting
					to</small> push
				the envelope. Hobbies include 3D modeling in <a href="https://blender.org">Blender</a> (mostly
				hard-surface
				things, with a focus on science fiction settings),
				building and playing with web
				technologies, fidling with my desktop-computer-turned-into-a-linux-server, cooking, and playing
				<small>usually</small>
				single-player games. Learning and sharing with other people is my favorite part of any
				project.
			</p>
		</article>

		<article>
			<h2>Contact</h2>

			<Columns>
				<Column>
					<Card>
						<CardIcon>
							<Icon>
								<fontAwesomeIcon :icon="byPrefixAndName.fas['envelope']" />
							</Icon>
						</CardIcon>
						<CardSection>
							<strong>Email:</strong> <a href="mailto:q.gale@live.com">q.gale@live.com</a>
						</CardSection>
					</Card>
				</Column>
				<Column>
					<Card>
						<CardIcon>
							<Icon>
								<fontAwesomeIcon :icon="byPrefixAndName.fab['github']" />
							</Icon>
						</CardIcon>
						<CardSection>
							<strong>GitHub:</strong> <a href="https://github.com/quinngale">@quinngale</a>
						</CardSection>
					</Card>
				</Column>
				<Column>
					<Card>
						<CardIcon>
							<Icon>
								<fontAwesomeIcon :icon="byPrefixAndName.fab['linkedin']" />
							</Icon>
						</CardIcon>
						<CardSection>
							<strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/quinngale/">Quinn Gale</a>
						</CardSection>
					</Card>
				</Column>
			</Columns>
		</article>

		<article>
			<h2>Skills</h2>

			<p>
				Through my work and school experience I have learned a set of soft skills—mostly centered around
				technical communication and troubleshooting. When possible, I want the people I'm helping to leave
				with a better understanding of what went wrong with whatever it is that they are contacting me about
				and to hopefully leave the interaction with the ability to be a little more self-sufficient.
			</p>

			<p>
				With that in mind, here's the obligatory list of "hard" skills. Pick and choose from that list what you
				want.
			</p>

			<Tags>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['css3']" fixed-width />
						</Icon>
					</template>
					CSS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['git']" fixed-width />
						</Icon>
					</template>
					Git
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fas['cat']" fixed-width />
						</Icon>
					</template>
					Herding cats
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['html5']" fixed-width />
						</Icon>
					</template>
					HTML
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['apple']" fixed-width />
						</Icon>
					</template>
					iOS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['js']" fixed-width />
						</Icon>
					</template>
					Javascript
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['linux']" fixed-width />
						</Icon>
					</template>
					Linux
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['apple']" fixed-width />
						</Icon>
					</template>
					macOS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['microsoft']" fixed-width />
						</Icon>
					</template>
					Microsoft Office
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['microsoft']" fixed-width />
						</Icon>
					</template>
					Microsoft Windows
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['php']" fixed-width />
						</Icon>
					</template>
					PHP
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['python']" fixed-width />
						</Icon>
					</template>
					Python
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['sass']" fixed-width />
						</Icon>
					</template>
					SASS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fas['database']" fixed-width />
						</Icon>
					</template>
					SQL
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="byPrefixAndName.fab['vuejs']" fixed-width />
						</Icon>
					</template>
					VueJS
				</Tag>
			</Tags>
		</article>

		<article class="">
			<h2>Education</h2>
			<Columns>
				<Column>
					<Card emphasis>
						<CardTitle>
							<strong>
								Bachelor of Science in Web and User Experience
							</strong>
						</CardTitle>
						<CardSection>
							April 2023 - <a href="http://weber.edu">Weber State University</a>
						</CardSection>
					</Card>
				</Column>
				<Column>
					<Card>
						<CardTitle>
							<strong>
								Certificate of Proficiency in Web and User Experience
							</strong>
						</CardTitle>
						<CardSection>
							April 2022 - <a href="http://weber.edu">Weber State University</a>
						</CardSection>
					</Card>
				</Column>
			</Columns>
		</article>

		<article>
			<section>
				<h2>Work Experience</h2>
				<p>
					<strong>
						Technical Support Specialist
					</strong>
				</p>
				<p>
					2016–Now - <a href="http://weber.edu">Weber State University</a>
				</p>
				<div>
					<p>
						This is a fairly typical technical support position. We helped our students and employees with
						software issues via calls, chats, emails, tickets, and almost any other way they wanted to reach
						out to us with.
					</p>
					<p>
						I started out in 2016 in an hourly position before being promoted to an hourly tech lead in
						early 2020.
						And near the end of 2022 I was promoted to a full-time tech lead. This added a few
						responsibilities to
						my day-to-day duties:
					</p>
					<ul>
						<li>A new-to-the-department level 1.5 tech with some expanded system access to
							fix common problems</li>
						<li>Quality assurance to ensure our tickets are properly documented and that we are giving out
							the right
							information</li>
						<li>Highlighting trends and problems in our tickets to leadership</li>
					</ul>
				</div>
			</section>
		</article>
	</main>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-3587f0af61/icons';

useHead({
	title: 'About'
});
</script>