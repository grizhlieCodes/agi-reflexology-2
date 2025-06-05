<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: 'n4955i6giwn7o3r',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Spa Essentials Arrangement',
		slug: 'spa-essentials-arrangement',
		folder: 'midjourney',
		tags: ['massage'],
		created: '2025-06-04 21:59:41.237Z',
		updated: '2025-06-05 09:07:17.493Z',
		image_name: 'Spa Essentials Arrangement',
		alt_text:
			'A serene spa setting featuring three neatly rolled white towels stacked on a light surface. Beside the towels, there is a small glass bottle filled with golden oil, topped with a wooden cork. Surrounding the towels are smooth, rounded stones of varying sizes and colors, and a bundle of dried lavender flowers. In the background, lush green ferns provide a natural, calming ambiance, with soft sunlight casting gentle shadows.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-lg.png',
				filesize: 1564591,
				format: 'png',
				height: 1920,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-md.png',
				filesize: 749644,
				format: 'png',
				height: 1280,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-original.png',
				filesize: 1775242,
				format: 'png',
				height: 2048,
				name: 'original.png',
				width: 2048
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-sm.png',
				filesize: 291523,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-thumbnail.webp',
				filesize: 6852,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-webp.webp',
				filesize: 366206,
				format: 'webp',
				height: 2048,
				name: 'webp.webp',
				width: 2048
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-essentials-arrangement-xs.png',
				filesize: 124099,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="massage-hero"
	grid_span="fullSpan"
	vertical_padding={12}
	class=" items-center justify-center"
	horizontal_padding={6}
	background_color="primary-50"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row-reverse
		md:items-center md:gap-10 lg:gap-12"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:min-w-md">
				<Image
					record={pb_img}
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Massage Practice</Text>
					<Text type="h2" style="h5" id="massage-hero_heading">
						Intuitive Massage to Help You Feel More at Ease in Your Body
					</Text>
				</div>
				<Text type="p" style="paraBase">
					I offer massage sessions designed to gently release tension, soften tight muscles, and
					bring your whole body into a state of calm. Whether you’re carrying physical aches or
					emotional fatigue, my approach is slow, grounding, and responsive — tailored to how you
					feel that day.
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
						href="/treatments"
						ariaLabel="Learn how reflexology works"
						class="w-full max-w-md sm:w-max"
					>
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
	</Container>
</Section>
