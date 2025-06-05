<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import Leaf from 'lucide-svelte/icons/leaf';

	const APPROACH_LIST = [
		'Nervous tension or ongoing stress',
		'Hormonal changes or irregular cycles',
		'Trouble sleeping or staying asleep',
		'Digestive discomfort or bloating',
		'General fatigue or feeling out of sync'
	];

	const pb_img = {
		id: '2z40boq908pxv81',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Serene Meditation Scene',
		slug: 'serene-meditation-scene',
		folder: 'midjourney',
		tags: ['reflexology'],
		created: '2025-06-04 21:59:46.089Z',
		updated: '2025-06-05 09:06:17.365Z',
		image_name: 'Serene Meditation Scene',
		alt_text:
			'An overhead view of a young woman lying peacefully on a white bed. She has long brown hair and is wearing a light beige shirt and light pants. Soft, colorful light trails in green, yellow, and purple swirl around her body, creating a calming atmosphere. The background is minimalistic with a light-colored floor, enhancing the serene and tranquil setting.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-lg.png',
				filesize: 476898,
				format: 'png',
				height: 1024,
				name: 'lg.png',
				width: 1024
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-md.png',
				filesize: 476898,
				format: 'png',
				height: 1024,
				name: 'md.png',
				width: 1024
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-original.png',
				filesize: 476898,
				format: 'png',
				height: 1024,
				name: 'original.png',
				width: 1024
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-sm.png',
				filesize: 285100,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-thumbnail.webp',
				filesize: 3606,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-webp.webp',
				filesize: 52142,
				format: 'webp',
				height: 1024,
				name: 'webp.webp',
				width: 1024
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-meditation-scene-xs.png',
				filesize: 122125,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="reflexology-common-reasons-for-trying"
	horizontal_padding={4}
	grid_span="fullSpan"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					record={pb_img}
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">Common Reasons People Try Reflexology</Text>
					<Text
						type="h2"
						style="h6"
						id="reflexology-common-reasons-for-trying_heading"
						class="max-w-xl"
					>
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
