<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: '8mu30ax610rg7z9',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Feet with Color Overlay',
		slug: 'feet-with-color-overlay',
		folder: 'midjourney',
		tags: ['reflexology'],
		created: '2025-06-04 21:59:23.459Z',
		updated: '2025-06-05 09:06:16.565Z',
		image_name: 'Feet with Color Overlay',
		alt_text:
			'A close-up view of a pair of feet resting on a soft, white blanket. The feet are positioned with the toes pointing outward and the legs crossed at the ankles. The skin tone is light, and there is a colorful overlay on the feet, featuring wavy lines in shades of green, orange, and purple, suggesting a design or pattern. The background is a textured, fluffy blanket, enhancing the cozy atmosphere.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-lg.png',
				filesize: 2301180,
				format: 'png',
				height: 1920,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-md.png',
				filesize: 1048391,
				format: 'png',
				height: 1280,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-original.png',
				filesize: 2654264,
				format: 'png',
				height: 2048,
				name: 'original.png',
				width: 2048
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-sm.png',
				filesize: 359890,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-thumbnail.webp',
				filesize: 4796,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-webp.webp',
				filesize: 661564,
				format: 'webp',
				height: 2048,
				name: 'webp.webp',
				width: 2048
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/feet-with-color-overlay-xs.png',
				filesize: 133718,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section section_id="reflexology-how_it_works-summary" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row md:items-start md:gap-8
		lg:gap-12"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs">
				<Image record={pb_img}></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">How It Works</Text>
					<Text type="h2" style="h6" id="reflexology-how_it_works-summary_heading"
						>Tiny Pressure Points That Communicate With Your Whole Body</Text
					>
				</div>
				<div>
					<Text type="p" style="paraBase">
						Your feet, face, and hands contain dense networks of nerves — and in reflexology, we
						believe they mirror your whole body. Gentle pressure on specific zones can influence
						connected organs, glands, and systems. It’s like touching a switch that sends a signal
						inward.
					</Text>
					<Text type="p" style="paraBase">
						This helps your body respond in ways it already knows how: by softening tension,
						improving circulation, and calming the nervous system so healing can begin.
					</Text>
				</div>
			</div>
		</div>
	</Container>
</Section>
