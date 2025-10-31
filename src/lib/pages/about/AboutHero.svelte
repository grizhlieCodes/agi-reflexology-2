<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: '515gf7x6ew0x468',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Forest Portrait',
		slug: 'forest-portrait',
		folder: 'photographs',
		tags: ['home', 'about'],
		created: '2025-06-04 21:36:56.753Z',
		updated: '2025-06-05 09:04:47.620Z',
		image_name: 'Forest Portrait',
		alt_text:
			'A woman with shoulder-length brown hair stands in a forest, looking directly at the camera with a gentle expression. She is wearing a light gray knitted top with a decorative pattern around the neckline. Her arms are slightly bent, and she has a visible tattoo on her left arm. The background features tall trees with soft, blurred foliage, creating a serene and natural atmosphere.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-lg.jpeg',
				filesize: 2039535,
				format: 'jpeg',
				height: 2560,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-md.jpeg',
				filesize: 955347,
				format: 'jpeg',
				height: 1707,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-original.jpeg',
				filesize: 2883211,
				format: 'jpeg',
				height: 3088,
				name: 'original.jpeg',
				width: 2316
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-sm.jpeg',
				filesize: 373862,
				format: 'jpeg',
				height: 1024,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-thumbnail.webp',
				filesize: 5914,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-webp.webp',
				filesize: 363072,
				format: 'webp',
				height: 3088,
				name: 'webp.webp',
				width: 2316
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-xs.jpeg',
				filesize: 160676,
				format: 'jpeg',
				height: 640,
				name: 'xs.jpeg',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="about-hero"
	grid_span="fullSpan"
	gap={4}
	vertical_padding={14}
	class="bg-primary-50 min-h-screen items-center justify-center md:min-h-[50vh]"
	horizontal_padding={6}
>
	<Container class="md:flex-row">
		<div class="flex flex-col items-center gap-4 md:items-start">
			<div class="flex flex-col gap-3 text-center md:text-left">
				<Text id="about-hero_heading" type="h1" style="h4" class="max-w-4xl font-[450]"
					>Hi, I'm Agi</Text
				>
				<Text type="p" style="paraBase" class="max-w-2xl text-neutral-500 dark:text-neutral-400">
					Welcome. I’m a reflexologist and healing massage practitioner offering calm, intuitive
					care for people navigating stress, pain, or imbalance. My work is rooted in natural
					healing and guided by deep presence — supporting your body’s return to balance, one
					session at a time.
				</Text>
			</div>
			<div class="flex flex-col flex-wrap gap-3 lg:flex-row lg:flex-nowrap">
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
					ariaLabel="Learn how reflexology works"
					href="/reflexology"
					class="min-w-max"
				>
					Discover My Approach
				</Button>
			</div>
		</div>

		<div class="aspect-square w-full max-w-md md:aspect-[14/20]">
			<Image
				brightness={10}
				record={pb_img}
			></Image>
		</div>
	</Container>
</Section>
