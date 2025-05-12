<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';
	import InlineLink from '$lib/components/ui-interactive/InlineLink.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import { about_faqs } from '$lib/data/faqs/faqs';
</script>

<Section section_id="about-faq" horizontal_padding={4} grid_span="fullSpan"
class="bg-primary-50 dark:bg-primary-950">
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
					<Text type="h2" style="h6" id="about-faq_heading">Confused? Perhaps the below will help.</Text>
				</div>
				<Text type="p" style="paraBase">
					If there is a question you have that I have not covered, please contact me directly by using
					<InlineLink href="/contact" ariaLabel="Go to my contact page and fill out the form there to get in touch with me.">this form.</InlineLink>
				</Text>
				<div class="mt-4 w-full overflow-hidden rounded-xl md:mt-6">
					<Accordion items={about_faqs} styleType="level-2-primary" type="single"></Accordion>
				</div>
			</div>
		</div>
	</Container>
</Section>
