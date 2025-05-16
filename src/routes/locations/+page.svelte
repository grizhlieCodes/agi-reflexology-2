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
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_An_artistic_softly_illustrated_top-down_map_scene_show_0a3c7fe6-2a99-4f32-ae05-38488fac1262.webp"
					alt="Illustrated map depicting a whimsical rural landscape with a winding path connecting three houses. The path is marked with dotted lines and location points. Lush green trees and hills surround the area, and leafy designs adorn the corners of the image."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Locations</Text>
					<Text type="h2" style="h5" id="testimonials-hero_heading">Where We Can Work Together</Text>
				</div>
				<Text type="p" style="paraBase">
					I offer sessions from my calming home space in Burnham, selected studio days in London, and occasional home visits nearby Burnham.
				</Text>

				<div class="mt-2 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/reflexology" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
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
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_question_mark_made_from_fern_plants_green_background_-_67dadcca-4b2e-4111-b90f-a21a808bd671.webp"
					alt="A lush, green question mark made of ferns and leaves, set against a background of dense, leafy foliage."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">FAQ</Text>
					<Text type="h2" style="h6" id="homepage-faq_heading">Confused? Perhaps the below will help.</Text>
				</div>
				<Text type="p" style="paraBase">
					If there is a question you have that I have not covered, please contact me directly by using
					<InlineLink href="/contact" ariaLabel="Go to my contact page and fill out the form there to get in touch with me.">this form.</InlineLink>
				</Text>
				<div class="mt-4 w-full overflow-hidden rounded-xl md:mt-6">
					<Accordion items={locations_faqs} styleType="level-1-primary" type="single"></Accordion>
				</div>
			</div>
		</div>
	</Container>
</Section>

<PageCta></PageCta>
