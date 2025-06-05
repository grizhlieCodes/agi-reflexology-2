<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import InlineLink from '$lib/components/ui-interactive/InlineLink.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import { locationSections } from '$lib/data/locations';
	import LocationSection from '$lib/pages/locations/LocationSectionNormal.svelte';
	import { locations_faqs } from '$lib/data/faqs/faqs';
	import PageCta from '$lib/pages/shared/PageCta.svelte';
	import FaqImage from '$lib/pages/shared/FaqImage.svelte';

	const pb_img = {
		id: 'cgqs46id29vmx6p',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Scenic Village Map',
		slug: 'scenic-village-map',
		folder: 'midjourney',
		tags: ['locations'],
		created: '2025-06-04 21:59:30.212Z',
		updated: '2025-06-05 09:07:39.655Z',
		image_name: 'Scenic Village Map',
		alt_text:
			'A beautifully illustrated map depicting a serene landscape with rolling hills, two small houses, and a winding path. The path is marked with dotted lines, leading through the countryside. There are several location markers along the route, and lush green trees are scattered throughout the scene, creating a peaceful and inviting atmosphere.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-lg.png',
				filesize: 2142327,
				format: 'png',
				height: 1920,
				name: 'lg.png',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-md.png',
				filesize: 987656,
				format: 'png',
				height: 1280,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-original.png',
				filesize: 2512406,
				format: 'png',
				height: 2048,
				name: 'original.png',
				width: 2048
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-sm.png',
				filesize: 378337,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-thumbnail.webp',
				filesize: 5316,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-webp.webp',
				filesize: 439580,
				format: 'webp',
				height: 2048,
				name: 'webp.webp',
				width: 2048
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/scenic-village-map-xs.png',
				filesize: 154159,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="testimonials-hero"
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
				<Image record={pb_img}></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Locations</Text>
					<Text type="h2" style="h5" id="testimonials-hero_heading">Where We Can Work Together</Text
					>
				</div>
				<Text type="p" style="paraBase">
					I offer sessions from my calming home space in Burnham, selected studio days in London,
					and occasional home visits nearby Burnham.
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
						href="/reflexology"
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

{#if locationSections}
	<!-- content here -->
	{#each locationSections as location}
		<LocationSection {location}></LocationSection>
	{/each}
{/if}

<Section section_id="homepage-faq" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 lg:flex-row-reverse
		lg:items-start lg:gap-10"
		>
			<div class="aspect-[2/3] w-full max-w-xs">
				<FaqImage></FaqImage>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">FAQ</Text>
					<Text type="h2" style="h6" id="homepage-faq_heading"
						>Confused? Perhaps the below will help.</Text
					>
				</div>
				<Text type="p" style="paraBase">
					If there is a question you have that I have not covered, please contact me directly by
					using
					<InlineLink
						href="/contact"
						ariaLabel="Go to my contact page and fill out the form there to get in touch with me."
						>this form.</InlineLink
					>
				</Text>
				<div class="mt-4 w-full overflow-hidden rounded-xl md:mt-6">
					<Accordion items={locations_faqs} styleType="level-1-primary" type="single"></Accordion>
				</div>
			</div>
		</div>
	</Container>
</Section>

<PageCta></PageCta>
