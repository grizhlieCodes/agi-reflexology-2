<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: 'on348o5b4ohly0t',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Smiling Woman Portrait',
		slug: 'smiling-woman-portrait',
		folder: 'photographs',
		tags: ['about'],
		created: '2025-06-04 21:36:53.781Z',
		updated: '2025-06-05 09:04:48.007Z',
		image_name: 'Smiling Woman Portrait',
		alt_text:
			'A close-up portrait of a woman with long, wavy hair wearing a dark turtleneck sweater. She is smiling softly at the camera, with a neutral background that includes kitchen items like glassware and a wooden pepper mill. The lighting is warm and natural, highlighting her facial features.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-lg.jpeg',
				filesize: 1576140,
				format: 'jpeg',
				height: 2556,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-md.jpeg',
				filesize: 777962,
				format: 'jpeg',
				height: 1704,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-original.jpeg',
				filesize: 2670844,
				format: 'jpeg',
				height: 3088,
				name: 'original.jpeg',
				width: 2320
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-sm.jpeg',
				filesize: 305305,
				format: 'jpeg',
				height: 1022,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-thumbnail.webp',
				filesize: 4614,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-webp.webp',
				filesize: 286230,
				format: 'webp',
				height: 3088,
				name: 'webp.webp',
				width: 2320
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-woman-portrait-xs.jpeg',
				filesize: 127652,
				format: 'jpeg',
				height: 639,
				name: 'xs.jpeg',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="about-the-path"
	horizontal_padding={4}
	grid_span="fullSpan"
	vertical_padding={9}
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col-reverse items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center"
		>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Path</Text>
					<Text type="h2" style="h6" id="about-the-path_heading"
						>How I Found My Way Into Healing Work</Text
					>
				</div>
				<div>
					<Text type="p" style="paraBase">
						I’ve always been someone who reads, experiments, learns with my hands. When I found
						reflexology, I didn’t stop at one course. I kept going — reading books, taking
						trainings, and most recently, traveling to India to study healing massage techniques in
						person.
					</Text>
					<Text type="p" style="paraBase">
						I don’t see myself as someone who ‘fixes’ people. I don’t believe the body is broken.
						What I do is help the body return to its own natural rhythm — by gently unblocking the
						areas where stress, trauma, or imbalance have built up over time.
					</Text>
				</div>
			</div>
			<div class="flex w-full flex-col items-center">
				<div class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm">
					<Image
						record={pb_img}
					></Image>
				</div>
			</div>
		</div>
	</Container>
</Section>
