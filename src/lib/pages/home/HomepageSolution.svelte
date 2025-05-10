<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const solutionCards = [
		{
			content: 'Relief That Stays With You',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/happy-man-icon.webp',
			imgAlt: 'A green, smiling 3D emoji of a person with short hair, against a transparent background.'
		},
		{
			content: "Sleep That Feels Like Actual Rest",
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/moon-icon.webp',
			imgAlt: 'A teal crescent moon accompanied by four sparkling stars on a white background, symbolising a good night\s sleep.'
		},
		{
			content: 'Feeling More in Tune With Your Body',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/leaf-health-pulse-icon.webp',
			imgAlt: 'A green leaf icon with a white heartbeat line running through the center, symbolizing a connection between nature and health.'
		}
	];
</script>

<Section section_id="homepage-solution" horizontal_padding={4}
grid_span="fullSpan" background_color="primary-50">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:gap-12 lg:gap-20 md:flex-row-reverse
		md:items-start lg:items-center"
		>
			<div class="aspect-[2/3] w-full min-w-xs max-w-xs md:min-w-sm
			md:max-w-sm relative">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/IMG_2109.webp"
					alt="A person with shoulder-length hair, wearing a patterned gray top, is seated in a forest. They have a tattoo of a fern and bird on their arm and are resting their chin on their hand. The background shows tall trees and a soft focus on the forest setting."
				></Image>
                <Text type="p" style="eyebrow" class="text-neutral-400
                dark:text-primary-400 mt-2 absolute bottom-0 translate-y-[112%]">
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
						Persistent Pain, Hormonal Imbalance, Daily Exhaustion. <i>Nothing Seems to Work.</i>
					</Text>
				</div>
				<Text type="p" style="paraBase">
					Many people come to me after months — sometimes years — of living with fatigue, tension, hormonal shifts, or stress that just won’t lift.
					They’ve stretched, tried supplements, seen specialists… but nothing seems to bring lasting relief. That’s often because the focus stays on
					the symptom — not the signal behind it.
					<br /><br />
					Your body isn’t broken — it’s communicating. And when it’s ignored, it doesn’t stop. It gets louder.
				</Text>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/treatments" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
		<div
			class="grid w-full grid-cols-1 justify-items-center gap-4
		sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-6"
		>
			{#each solutionCards as card}
				<BasicCard>
					<div class="aspect-square w-full max-w-[7rem]">
						<Image src={card.imgSrc} alt={card.imgAlt} decorate={false}></Image>
					</div>
					<Text type="h3" style="h8" class="tracking-[-1px]">
						{card.content}
					</Text>
				</BasicCard>
			{/each}
		</div>
	</Container>
</Section>
