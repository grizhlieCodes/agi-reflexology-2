<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="homepage-hero" grid_span="fullSpan" gap={4}
vertical_padding={14} class="bg-primary-50 min-h-screen items-center justify-center" horizontal_padding={6}>
	<Container>
		<div class="flex flex-col gap-3">
			<Text id="homepage-hero_heading" type="h1" style="h4" class="max-w-4xl font-[450]">
				Experience Deep Relief & <br class="hidden sm:block" /> Reconnect With Your Body
			</Text>
			<Text type="p" style="paraBase" class="max-w-2xl text-neutral-500 dark:text-neutral-400">
				I use my intuitive reflexology-massage techniques to guide your body toward a deep release and natural balance. In a healing and peaceful
				environment, I help you let go of tension patterns that prevent you from experiencing true bodily peace.
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
		<div class="aspect-[3/2] w-full sm:aspect-video lg:aspect-[645/299]">
			<Image
				brightness={15}
				src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_bright_and_white_advert_shot_of_a_blonde_woman_layin_cfe1a24a-46aa-4151-9bb7-5aca186c77f8.webp"
				alt="A woman reclines peacefully on a white chair amidst lush green ferns, bathed in soft, natural light streaming through a large window behind her."
				imgClass=""
			></Image>
		</div>
	</Container>
</Section>
