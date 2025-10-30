<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	const hero_image = {
		id: 'w29mcm48q3gee6e',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Serene Nature Retreat',
		slug: 'serene-nature-retreat',
		folder: 'midjourney',
		tags: [],
		created: '2025-06-04 21:59:26.466Z',
		updated: '2025-06-04 21:59:26.466Z',
		image_name: 'Serene Nature Retreat',
		alt_text:
			'A serene scene depicting a woman with long, wavy blonde hair, peacefully reclining in a white chair surrounded by lush green ferns. Soft, diffused light streams in from a window, illuminating the tranquil atmosphere. The woman is dressed in a flowing white gown, her eyes closed as she enjoys a moment of relaxation amidst the vibrant greenery.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-lg.png',
				filesize: 862483,
				format: 'png',
				height: 1076,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-md.png',
				filesize: 388231,
				format: 'png',
				height: 717,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-original.png',
				filesize: 2115371,
				format: 'png',
				height: 1632,
				name: 'original.png',
				width: 2912
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-sm.png',
				filesize: 151075,
				format: 'png',
				height: 430,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-thumbnail.webp',
				filesize: 4600,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-webp.webp',
				filesize: 388828,
				format: 'webp',
				height: 1632,
				name: 'webp.webp',
				width: 2912
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-nature-retreat-xs.png',
				filesize: 65610,
				format: 'png',
				height: 269,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="homepage-hero"
	grid_span="fullSpan"
	gap={4}
	vertical_padding={10}
	class="min-h-screen items-center justify-center"
	horizontal_padding={6}
	background_color="primary-50"
>
	<Container>
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-3">
				<Text type="span" style="eyebrow">Reflexology Treatments</Text>
				<Text id="homepage-hero_heading" type="h1" style="h4" class="max-w-4xl font-[450]">
					Experience Deep Relief & <br class="hidden sm:block" /> Reconnect With Your Body
				</Text>
			</div>
			<Text type="p" style="paraBase" class="max-w-2xl text-neutral-500 dark:text-neutral-400">
				I use my intuitive reflexology techniques to guide your body toward a deep release
				and natural balance. In a healing and peaceful environment, I help you let go of tension
				patterns that prevent you from experiencing true bodily peace.
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
				ariaLabel="Learn about my reflexology service and how it can help you"
				href="/services/reflexology"
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
				record={hero_image}
				fallbackVariant="lg"
			></Image>
		</div>
	</Container>
</Section>
