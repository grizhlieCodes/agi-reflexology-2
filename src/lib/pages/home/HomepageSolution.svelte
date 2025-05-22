<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const solutionCards = [
		{
			content: 'Relief That Stays <br/> With You',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/happy-man-icon.webp',
			imgAlt: 'A green, smiling 3D emoji of a person with short hair, against a transparent background.'
		},
		{
			content: 'Sleep That Feels Like <br/> Actual Rest',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/moon-icon.webp',
			imgAlt: 'A teal crescent moon accompanied by four sparkling stars on a white background, symbolising a good night\s sleep.'
		},
		{
			content: 'Feeling More in Tune <br/> With Your Body',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/leaf-health-pulse-icon.webp',
			imgAlt: 'A green leaf icon with a white heartbeat line running through the center, symbolizing a connection between nature and health.'
		}
	];
</script>

<Section section_id="homepage-solution" horizontal_padding={4} grid_span="fullSpan" background_color="primary-50" vertical_padding={9}>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center lg:gap-20"
		>
			<div class="flex w-full flex-col items-center">
				<div
					class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm"
				>
					<Image
						src="https://seerstudio.b-cdn.net/image-tests/IMG_2109.webp"
						alt="A person with shoulder-length hair, wearing a patterned gray top, is seated in a forest. They have a tattoo of a fern and bird on their arm and are resting their chin on their hand. The background shows tall trees and a soft focus on the forest setting."
					></Image>
				</div>
				<Text
					type="p"
					style="eyebrow"
					class="dark:text-primary-400
		mt-2 text-neutral-400"
				>
					This isn’t about chasing symptoms. It’s about helping your body recover its rhythm.
				</Text>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Solution</Text>
					<Text type="h2" style="h6" id="homepage-solution_heading">
						When The Body Is Supported, <br /> It Can Finally Heal Naturally
					</Text>
				</div>
				<div>
					<Text type="p" style="paraBase">
						I work with people whose bodies are stuck in cycles of pain, fatigue, or imbalance — often after conventional approaches haven’t helped.
					</Text>
					<Text type="p" style="paraBase">
						Reflexology offers a different path. By applying gentle, targeted pressure to specific points on the feet, I support your body’s nervous
						system, circulation, and internal rhythms. The result is often deep release, better sleep, reduced pain, and a return to a more natural
						state of balance. Every session is focused, respectful, and guided by what your body actually needs.
					</Text>
				</div>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/services/reflexology" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
			<div class="flex flex-col items-center gap-2 md:gap-3">
				<Text type="h2" style="h6" id="homepage-solution_heading">What Clients Often Notice After Sessions</Text>
				<Text type="p" style="paraBase" class="max-w-3xl">
					As your body returns to balance, certain changes tend to show up — not just in symptoms, but in how you feel day to day. Here are some of
					the results clients often notice.louder.
				</Text>
			</div>
			<div
				class="grid w-full max-w-[64rem] grid-cols-1 justify-items-center
		gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-6"
			>
				{#each solutionCards as card}
					<BasicCard class="bg-primary-100 dark:bg-primary-900">
						<div class="aspect-square w-full max-w-[7rem]">
							<Image src={card.imgSrc} alt={card.imgAlt} decorate={false}></Image>
						</div>
						<Text type="h3" style="h8" class="tracking-[-1px]">
							{@html card.content}
						</Text>
					</BasicCard>
				{/each}
			</div>
		</div>
	</Container>
</Section>
