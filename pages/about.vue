<template>
	<main class="grid">
		<header class="header">
			<h1>About me</h1>
		</header>

		<article>
			<h2>Who I am</h2>
			<p>
				My name is Quinn. When I'm not working, I'm usually trying to learn new things and push my skills and
				abilities to new places.
			</p>
			<p>
				I do a lot of hard-surface modeling—inanimate objects and environments—in Blender. My current love is
				near-future science fiction. If that doesn't sound familiar, this is similar to the set design of
				The Expanse TV show. Over the past couple of years, I have been <small>(in fits and starts)</small>
				developing a long-term exploration vessel with roots in real science that I plan to build fully in
				Blender.
			</p>
			<img src="https://assets.quinngale.com/about/sci-fi-corridor.jpg"
				alt="A 3D render of a hallway on a space station with a person working on a console">
			<br>
			<p>
				I also have an older desktop computer running Ubuntu Server that I use as a network file share,
				some very light home automation, and an experiment & development platform. For exmaple, the computer
				compiles this website and then automatically pushes to the VPS hosting it when there are updates.
			</p>
		</article>

		<article>
			<h2>Skills</h2>

			<p>
				Through my work experience, I have developed a set of soft skills mostly centered around troubleshooting
				deeply technical issues and communicating solutions and ideas with others in a way that they are able to
				understand.
			</p>

			<p>
				With that in mind, here's the obligatory list of "hard" skills. Pick and choose from that list what you
				want.
			</p>

			<Tags>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faCss3Alt" />
						</Icon>
					</template>
					CSS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faFigma" />
						</Icon>
					</template>
					Figma
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faGit" />
						</Icon>
					</template>
					Git
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faCat" />
						</Icon>
					</template>
					Herding cats
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faHtml5" />
						</Icon>
					</template>
					HTML
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faApple" />
						</Icon>
					</template>
					iOS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faJs" />
						</Icon>
					</template>
					Javascript
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faLinux" />
						</Icon>
					</template>
					Linux
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faApple" />
						</Icon>
					</template>
					macOS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faMicrosoft" />
						</Icon>
					</template>
					Microsoft Office
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faMicrosoft" />
						</Icon>
					</template>
					Microsoft Windows
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faPhp" />
						</Icon>
					</template>
					PHP
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faPython" />
						</Icon>
					</template>
					Python
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faSass" />
						</Icon>
					</template>
					SASS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faDatabase" />
						</Icon>
					</template>
					SQL
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faListCheck" />
						</Icon>
					</template>
					Troubleshooting
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faVuejs" />
						</Icon>
					</template>
					VueJS
				</Tag>
				<Tag>
					<template #icon>
						<Icon>
							<FontAwesomeIcon :icon="faWordpressSimple" />
						</Icon>
					</template>
					Wordpress
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

		<article>
			<h2>Contact</h2>

			<Columns>
				<Column>
					<Card href="mailto:q.gale@live.com">
						<CardIcon>
							<Icon>
								<fontAwesomeIcon :icon="faEnvelope" />
							</Icon>
						</CardIcon>
						<CardSection>
							<strong>q.gale@live.com</strong>
						</CardSection>
					</Card>
				</Column>
				<Column>
					<Card href="https://github.com/quinngale">
						<CardIcon>
							<Icon>
								<fontAwesomeIcon :icon="faGithub" />
							</Icon>
						</CardIcon>
						<CardSection>
							github.com/<strong>quinngale</strong>
						</CardSection>
					</Card>
				</Column>
				<Column>
					<Card href="https://www.linkedin.com/in/quinngale/">
						<CardIcon>
							<Icon>
								<fontAwesomeIcon :icon="faLinkedin" />
							</Icon>
						</CardIcon>
						<CardSection>
							linkedin.com/in/<strong>quinngale</strong>
						</CardSection>
					</Card>
				</Column>
			</Columns>
		</article>
	</main>
</template>

<script setup>
import { faApple, faCss3Alt, faFigma, faGit, faGithub, faHtml5, faJs, faLinkedin, faLinux, faMicrosoft, faPhp, faPython, faSass, faVuejs, faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faCat, faDatabase, faEnvelope, faListCheck } from '@fortawesome/pro-solid-svg-icons';

useHead({
	title: 'About'
});
</script>