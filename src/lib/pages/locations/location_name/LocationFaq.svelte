<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';
	import InlineLink from '$lib/components/ui-interactive/InlineLink.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import FaqImage from '$lib/pages/shared/FaqImage.svelte';

	let { faqs } = $props();

	// let faqs = $derived([...location_faqs, location_specific_faq])
</script>

<Section section_id="about-faq" horizontal_padding={4} grid_span="fullSpan" class="bg-primary-50 dark:bg-primary-950">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-10
 supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:justify-items-center supports-[display:grid]:lg:grid-cols-[2fr_1fr]
 supports-[display:grid]:lg:justify-items-start"
		>
			<div class="aspect-[2/3] w-full max-w-xs order-1 lg:order-2 lg:flex-shrink-0 supports-[display:grid]:lg:col-start-2 supports-[display:grid]:lg:row-start-1">
				<FaqImage></FaqImage>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center order-2 lg:order-1 lg:flex-grow md:items-start
            md:gap-5 md:text-left supports-[display:grid]:lg:col-start-1 supports-[display:grid]:lg:row-start-1"
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
					<Accordion items={faqs} styleType="level-2-primary" type="single"></Accordion>
				</div>
			</div>
		</div>
	</Container>
</Section>
