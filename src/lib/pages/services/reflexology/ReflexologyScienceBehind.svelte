<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: '50942eu8k7s5m32',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Serene Light Reflection',
		slug: 'serene-light-reflection',
		folder: 'midjourney',
		tags: ['reflexology'],
		created: '2025-06-04 21:59:33.459Z',
		updated: '2025-06-05 09:06:17.016Z',
		image_name: 'Serene Light Reflection',
		alt_text:
			'A young man with closed eyes is lying down on a soft surface, wearing a light-colored, loose-fitting shirt. A warm, colorful light is reflecting on his chest, creating a rainbow effect. His hands are gently clasped together, and the background is softly blurred, enhancing the tranquil atmosphere of the scene.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-lg.png',
				filesize: 1703614,
				format: 'png',
				height: 1920,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-md.png',
				filesize: 741318,
				format: 'png',
				height: 1280,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-original.png',
				filesize: 1984052,
				format: 'png',
				height: 2048,
				name: 'original.png',
				width: 2048
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-sm.png',
				filesize: 251858,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-thumbnail.webp',
				filesize: 4894,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-webp.webp',
				filesize: 401128,
				format: 'webp',
				height: 2048,
				name: 'webp.webp',
				width: 2048
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/serene-light-reflection-xs.png',
				filesize: 107011,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section section_id="science-behind-reflexology" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row md:gap-8
		lg:gap-12"
		>
			<div class="aspect-square w-full max-w-md -scale-x-100 md:min-w-sm lg:min-w-md">
				<Image record={pb_img}></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Science Behind the Calm</Text>
					<Text type="h2" style="h6" id="science-behind-reflexology_heading"
						>Why Reflexology Helps When Stress or Overwhelm Don’t Shift</Text
					>
				</div>
				<div>
					<Text type="p" style="paraBase">
						Many of the symptoms people bring to reflexology — tension, trouble sleeping, digestive
						issues, irregular cycles — are connected to the nervous system being out of balance.
						Reflexology helps activate the parasympathetic (rest-and-restore) state, which allows
						your body to slow down, rebalance, and reset itself.
					</Text>
					<Text type="p" style="paraBase">
						When your system feels safe, everything works a little better: from hormones and sleep
						to digestion and emotional regulation.
					</Text>
				</div>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button
						size={3}
						type="primary"
						href="/treatments"
						ariaLabel="View all of my services that could help you"
						class="w-full max-w-md sm:w-max"
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
			</div>
		</div>
	</Container>
</Section>
