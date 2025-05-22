<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const problemCards = [
		{
			content: 'Persistent Pain That Keeps Returning',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/bottle-time-persistent-icon.webp',
			imgAlt: 'A green bottle with a clock face on the side, featuring a screw-on lid.'
		},
		{
			content: "Exhaustion That Sleep Doesn't Fix",
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/low-battery-icon.webp',
			imgAlt: 'A large, stylized green battery with a low power level.'
		},
		{
			content: 'An Unpredictable Menstrual Cycle',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/cycle-icon.webp',
			imgAlt: 'A 3D green circular arrow forming a loop, symbolizing a cycle.'
		},
		{
			content: 'Digestive Discomfort Without a Clear Cause',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/stomach-icon.webp',
			imgAlt: 'A stylized green stomach icon with a spiral design in the center.'
		},
		{
			content: 'Mood Swings or Irritability That Linger',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/mood-mask-icon.webp',
			imgAlt:
				'A green shield-shaped icon with a dual-faced design; the left side shows a sad expression, and the right side shows a happy expression, symbolizing duality or contrasting emotions.'
		},
		{
			content: 'A Body That Never Fully Relaxes',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/shoulder-pain-icon.webp',
			imgAlt: 'A green, stylized silhouette of a person with zigzag lines around the shoulders, suggesting pain or stress.'
		}
	];
</script>

<Section section_id="homepage-problem" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row-reverse
		md:items-start"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_httpss.mj.run00UXohO79Rk_Realistic_photo_of_a_woman__b77ff3f5-0c8c-4050-a58a-1d2c4a2c6d5d_2.webp"
					alt="A woman stands in a green leafy environment, her eyes closed in discomfort. She holds her hands to her temples, and there is a red glow around her neck, suggesting pain or tension."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Problem</Text>
					<Text type="h2" style="h6" id="homepage-problem_heading">
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

				<div class="mt-10 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/services/reflexology" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
		<div
			class="grid w-full grid-cols-1 justify-items-center gap-4
		sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:gap-6"
		>
			{#each problemCards as card}
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
