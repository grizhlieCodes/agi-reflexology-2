<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import Leaf from 'lucide-svelte/icons/leaf';

	const APPROACH_LIST = [
		'You’re feeling stuck in cycles of tension, fatigue, or overwhelm',
		'You’ve tried other things and still don’t feel quite right',
		'You’re seeking natural support for your hormones, digestion, or mood',
		'You just want space to breathe, reset, and come back to yourself'
	];

	const pb_img = {
		id: 'vnu3t2szdl0530y',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Forest Path Walker',
		slug: 'forest-path-walker',
		folder: 'midjourney',
		tags: ['reflexology'],
		created: '2025-06-04 21:59:09.302Z',
		updated: '2025-06-05 09:06:17.702Z',
		image_name: 'Forest Path Walker',
		alt_text:
			'A person walking barefoot along a narrow path in a serene forest. The scene is illuminated by soft, golden light filtering through the trees, creating a tranquil atmosphere. Lush green ferns and moss line the path, while tall trees stand on either side, enhancing the feeling of being immersed in nature.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-lg.png',
				filesize: 2625620,
				format: 'png',
				height: 1920,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-md.png',
				filesize: 1220494,
				format: 'png',
				height: 1280,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-original.png',
				filesize: 3015391,
				format: 'png',
				height: 2048,
				name: 'original.png',
				width: 2048
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-sm.png',
				filesize: 466730,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-thumbnail.webp',
				filesize: 10850,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-webp.webp',
				filesize: 987358,
				format: 'webp',
				height: 2048,
				name: 'webp.webp',
				width: 2048
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-path-walker-xs.png',
				filesize: 190996,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="reflexology-right-for-me"
	horizontal_padding={4}
	vertical_padding={8}
	grid_span="fullSpan"
	background_color="primary-50"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image record={pb_img}></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">Common Reasons People Try Reflexology</Text>
					<Text type="h2" style="h6" id="reflexology-right-for-me_heading" class="max-w-xl">
						Support for Stress, Hormones, Digestion, and More
					</Text>
				</div>
				<Text type="p" style="paraBase">
					People often try reflexology after dealing with tension, irregular cycles, sleep issues,
					or unexplained aches. Even if the symptoms are hard to describe, reflexology works by
					calming the nervous system — which can improve how your whole body functions and feels.
				</Text>
				<!-- Turn this into a list comp -->
				<DecoratedList item_list={APPROACH_LIST} Icon={Leaf}></DecoratedList>
			</div>
		</div>
	</Container>
</Section>
