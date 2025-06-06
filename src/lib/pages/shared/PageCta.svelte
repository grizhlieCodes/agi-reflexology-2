<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const records = {
		dark_botanical_scene: {
			id: '79ka19j83e044qe',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Dark Botanical Scene',
			slug: 'dark-botanical-scene',
			folder: 'midjourney',
			tags: ['shared'],
			created: '2025-06-04 21:59:34.719Z',
			updated: '2025-06-05 09:05:35.620Z',
			image_name: 'Dark Botanical Scene',
			alt_text:
				'A dark, moody composition featuring various types of foliage, including ferns and broad leaves, arranged around the edges of the image. The background is predominantly black, with a soft light illuminating the upper right corner, creating a subtle gradient effect. A smooth, dark fabric is draped in the foreground, partially obscured by a rock, adding texture to the scene.',
			variants: {
				lg: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-lg.png',
					filesize: 411192,
					format: 'png',
					height: 1076,
					name: 'lg.png',
					width: 1920
				},
				md: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-md.png',
					filesize: 180333,
					format: 'png',
					height: 717,
					name: 'md.png',
					width: 1280
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-original.png',
					filesize: 1244662,
					format: 'png',
					height: 1632,
					name: 'original.png',
					width: 2912
				},
				sm: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-sm.png',
					filesize: 63303,
					format: 'png',
					height: 430,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-thumbnail.webp',
					filesize: 1406,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-webp.webp',
					filesize: 270820,
					format: 'webp',
					height: 1632,
					name: 'webp.webp',
					width: 2912
				},
				xs: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/dark-botanical-scene-xs.png',
					filesize: 26268,
					format: 'png',
					height: 269,
					name: 'xs.png',
					width: 480
				}
			}
		},
		green_ferns_background: {
			id: '8j29i4x31il4ph4',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Green Ferns Background',
			slug: 'green-ferns-background',
			folder: 'midjourney',
			tags: ['shared'],
			created: '2025-06-04 21:59:19.798Z',
			updated: '2025-06-05 09:05:36.007Z',
			image_name: 'Green Ferns Background',
			alt_text:
				'A flat lay image featuring various green ferns arranged around the edges of a light, textured background. The ferns vary in size and shape, creating a natural frame effect. The background is predominantly white with subtle textures and hints of light, enhancing the fresh and organic feel of the composition.',
			variants: {
				lg: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-lg.png',
					filesize: 1079371,
					format: 'png',
					height: 1076,
					name: 'lg.png',
					width: 1920
				},
				md: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-md.png',
					filesize: 424869,
					format: 'png',
					height: 717,
					name: 'md.png',
					width: 1280
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-original.png',
					filesize: 3243167,
					format: 'png',
					height: 1632,
					name: 'original.png',
					width: 2912
				},
				sm: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-sm.png',
					filesize: 132077,
					format: 'png',
					height: 430,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-thumbnail.webp',
					filesize: 688,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-webp.webp',
					filesize: 441264,
					format: 'webp',
					height: 1632,
					name: 'webp.webp',
					width: 2912
				},
				xs: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-ferns-background-xs.png',
					filesize: 51762,
					format: 'png',
					height: 269,
					name: 'xs.png',
					width: 480
				}
			}
		}
	};
</script>

<Section
	section_id="page-cta"
	grid_span="fullSpan"
	class="w-full p-0"
	justify_content="center"
	horizontal_padding={4}
>
	<Container
		class="relative min-h-screen w-full max-w-[100rem] p-0 md:min-h-[52rem] md:p-10
	lg:min-h-[56rem] xl:min-h-[60rem]
	supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:grid-rows-1 supports-[display:grid]:*:col-start-1 supports-[display:grid]:*:row-start-1"
	>
		<div
			class="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-6 md:gap-6 md:px-10
		lg:gap-8 lg:px-12 2xl:px-0
		supports-[display:grid]:z-3"
		>
			<Text type="h1" style="h3" class="font-[450]">
				Ready To Feel <br /> Supported Again?
			</Text>
			<Text type="p" style="paraBase" class="max-w-2xl">
				Whether you’re navigating pain, stress, or just need space to breathe, your next session can
				meet you where you are.
			</Text>
			<div class="mt-2 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
				<Button
					size={4}
					type="primary"
					href="/treatments"
					ariaLabel="View all of my services that could help you"
					class="w-full max-w-md sm:w-max"
				>
					Explore My Treatments
				</Button>
				<Button
					size={4}
					type="plain"
					href="/services/reflexology"
					ariaLabel="Learn how reflexology works"
					class="w-full max-w-md sm:w-max"
				>
					How Reflexology Works
				</Button>
			</div>
		</div>
		<div
			class="absolute inset-0 h-full w-full
		supports-[display:grid]:z-2 supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:grid-rows-1 supports-[display:grid]:*:col-start-1 supports-[display:grid]:*:row-start-1"
		>
			<Image
				record={records.green_ferns_background}
				fallbackVariant="lg"
				decorate={true}
				containerClass="w-full h-full dark:opacity-0 transition-opacity duration-500"
			></Image>
			<Image
				record={records.dark_botanical_scene}
				fallbackVariant="lg"
				decorate={true}
				containerClass="w-full h-full opacity-0 dark:opacity-100 transition-opacity duration-500"
			></Image>
		</div>
	</Container>
</Section>
