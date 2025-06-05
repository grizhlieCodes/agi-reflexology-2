<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: '3z84n551x003paj',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Spa Essentials Setup',
		slug: 'spa-essentials-setup',
		folder: 'midjourney',
		tags: ['reflexology'],
		created: '2025-06-04 21:59:16.356Z',
		updated: '2025-06-05 09:06:16.070Z',
		image_name: 'Spa Essentials Setup',
		alt_text:
			'A serene spa setup featuring neatly stacked white towels and two green towels on a light-colored table. In the foreground, there are three glass bottles filled with oils, varying in shades of green, and a white vase containing vibrant green ferns. The background shows soft, natural light filtering through sheer curtains, with greenery visible outside the window, creating a calming atmosphere.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-lg.png',
				filesize: 1054713,
				format: 'png',
				height: 960,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-md.png',
				filesize: 475940,
				format: 'png',
				height: 640,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-original.png',
				filesize: 2612186,
				format: 'png',
				height: 1536,
				name: 'original.png',
				width: 3072
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-sm.png',
				filesize: 179389,
				format: 'png',
				height: 384,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-thumbnail.webp',
				filesize: 9540,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-webp.webp',
				filesize: 726642,
				format: 'webp',
				height: 1536,
				name: 'webp.webp',
				width: 3072
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-setup-xs.png',
				filesize: 77554,
				format: 'png',
				height: 240,
				name: 'xs.png',
				width: 480
			}
		}
	};
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
				record={pb_img}
			></Image>
		</div>
		<div>
			<Text type="p" style="paraBase" class="max-w-3xl text-neutral-500 dark:text-neutral-400">
				Whether you're dealing with stress, fatigue, hormonal shifts, or just a sense of being off —
				my treatments help your body let go, reset, and begin to restore balance. I offer
				reflexology and healing massage that gently support your body’s natural rhythms, so you can
				feel clearer, softer, and more in tune with yourself.
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
				ariaLabel="Go to the locations page to all of the locations I provide my services in"
				href="/locations"
			>
				View My Locations
			</Button>
		</div>
	</Container>
</Section>
