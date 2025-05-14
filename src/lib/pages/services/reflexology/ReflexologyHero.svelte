<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section
	section_id="reflexology-hero"
	grid_span="fullSpan"
	vertical_padding={10}
	class=" items-center justify-center"
	horizontal_padding={6}
	background_color="primary-50"
>
	<Container>
		<div class="flex flex-col items-center gap-3">
			<div>
				<Text type="span" style="eyebrow">What Is Reflexology?</Text>
				<Text id="reflexology-hero_heading" type="h1" style="h4" class="max-w-4xl font-[450]">
					A Gentle Therapy That Works <br class="hidden md:block" /> Through the Feet, Face, and Hands
				</Text>
			</div>
		</div>

		<div class="aspect-[3/2] w-full sm:aspect-video lg:aspect-[645/299]">
			<Image
				brightness={15}
				src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_serene_still-life_arrangement_on_a_soft_white_linen__1cbdbfa1-deb0-4a51-937c-eccb47fb642d.webp"
				alt="A serene spa setting with rolled white towels, small bottles containing green liquid, and vases with ferns on a table. Soft natural light filters through a window, highlighting the greenery."
			></Image>
		</div>
		<div>
			<Text type="p" style="paraBase" class="max-w-3xl text-neutral-500 dark:text-neutral-400">
				Whether you're dealing with stress, fatigue, hormonal shifts, or just a sense of being off — my treatments help your body let go, reset, and
				begin to restore balance. I offer reflexology and healing massage that gently support your body’s natural rhythms, so you can feel clearer,
				softer, and more in tune with yourself.
			</Text>
		</div>
		<div class="flex flex-col gap-3 md:flex-row">
			<Button
				size={3}
				type="primary"
				ariaLabel="View my treatments page
            to see which of my services could benefit you"
				href="/treatments"
			>
				Explore My Treatments
			</Button>
			<Button
				size={3}
				type="plain"
				ariaLabel="View my treatments page
            to see which of my services could benefit you"
				href="/"
			>
				Discover My Approach
			</Button>
		</div>
	</Container>
</Section>
