<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section
	section_id="about-hero"
	grid_span="fullSpan"
	gap={4}
	vertical_padding={14}
	class="bg-primary-50 min-h-screen md:min-h-[50vh] items-center justify-center"
	horizontal_padding={6}
>
	<Container class="md:flex-row">
		<div class="flex flex-col items-center gap-4 md:items-start">
			<div class="flex flex-col gap-3 text-center md:text-left">
				<Text id="about-hero_heading" type="h1" style="h4" class="max-w-4xl font-[450]">Hi, I'm Agi</Text>
				<Text type="p" style="paraBase" class="max-w-2xl text-neutral-500 dark:text-neutral-400">
					Welcome. I’m a reflexologist and healing massage practitioner offering calm, intuitive care for people navigating stress, pain, or
					imbalance. My work is rooted in natural healing and guided by deep presence — supporting your body’s return to balance, one session at a
					time.
				</Text>
			</div>
			<div class="flex flex-col flex-wrap gap-3">
				<Button
					size={3}
					type="primary"
					ariaLabel="View my treatments page to see which of my services could benefit you"
					href="/treatments"
					class="min-w-max"
				>
					Explore My Treatments
				</Button>
				<Button
					size={3}
					type="plain"
					ariaLabel="View my treatments page to see which of my services could benefit you"
					href="/"
					class="min-w-max"
				>
					Discover My Approach
				</Button>
			</div>
		</div>

		<div class="aspect-square w-full max-w-md md:aspect-[14/20]">
			<Image
				brightness={10}
				src="https://seerstudio.b-cdn.net/image-tests/IMG_2149.webp"
				alt="A woman with light brown hair, wearing a gray patterned shirt, leans slightly forward. She stands in a forest with tall trees in the background. Her arms have visible tattoos and the setting appears calm and natural."
				imgClass=""
			></Image>
		</div>
	</Container>
</Section>
