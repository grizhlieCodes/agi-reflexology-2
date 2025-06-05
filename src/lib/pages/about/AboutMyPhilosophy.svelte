<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: 'sv17079op6yl516',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Forest Book Scene',
		slug: 'forest-book-scene',
		folder: 'midjourney',
		tags: ['about'],
		created: '2025-06-04 21:58:59.201Z',
		updated: '2025-06-05 09:04:48.794Z',
		image_name: 'Forest Book Scene',
		alt_text:
			'A serene forest landscape featuring tall trees and lush green ferns. In the foreground, an open book with its pages resembling the forest floor, blending seamlessly with the surrounding greenery. Soft, diffused light filters through the trees, creating a tranquil and magical atmosphere.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-lg.png',
				filesize: 3672286,
				format: 'png',
				height: 2688,
				name: 'lg.png',
				width: 1792
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-md.png',
				filesize: 1880799,
				format: 'png',
				height: 1920,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-original.png',
				filesize: 3672286,
				format: 'png',
				height: 2688,
				name: 'original.png',
				width: 1792
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-sm.png',
				filesize: 654501,
				format: 'png',
				height: 1152,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-thumbnail.webp',
				filesize: 10734,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-webp.webp',
				filesize: 1750466,
				format: 'webp',
				height: 2688,
				name: 'webp.webp',
				width: 1792
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-book-scene-xs.png',
				filesize: 251059,
				format: 'png',
				height: 720,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="about-my-philosophy"
	horizontal_padding={4}
	grid_span="fullSpan"
	background_color="primary-50"
	vertical_padding={9}
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center lg:gap-20"
		>
			<div class="flex w-full flex-col items-center">
				<div class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm">
					<Image
						record={pb_img}
					></Image>
				</div>
				<Text type="p" style="eyebrow" class="dark:text-primary-400 mt-2 text-neutral-400">
					The Physician Treats, But Nature Heals <br />~ Hippocrates ~
				</Text>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Philosophy</Text>
					<Text type="h2" style="h6" id="about-my-philosophy_heading"
						>Natural, Intuitive, Respectful of the Body</Text
					>
				</div>
				<div>
					<Text type="p" style="paraBase">
						My treatments are gentle, grounded, and deeply intuitive. I work slowly and attentively,
						creating space for your nervous system to settle and your body to feel safe again.
					</Text>
					<Text type="p" style="paraBase">
						Clients often say they feel deeply relaxed — but also lighter, clearer, more in tune
						with themselves. That’s because the body, when supported, knows what to do. I just help
						it get there.
					</Text>
				</div>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
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
					>
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
	</Container>
</Section>
