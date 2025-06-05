<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';
	import InlineLink from '$lib/components/ui-interactive/InlineLink.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import { services_faqs } from '$lib/data/faqs/faqs';
	import FaqImage from '../shared/FaqImage.svelte';
</script>

<Section section_id="services-faq" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class=" grid w-full grid-cols-1 justify-items-center gap-4 lg:grid-cols-[2fr_1fr]
 lg:justify-items-start lg:gap-10"
		>
			<div class="aspect-[2/3] w-full max-w-xs lg:col-start-2 lg:row-start-1">
				<FaqImage></FaqImage>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left lg:col-start-1 lg:row-start-1"
			>
				<div>
					<Text type="span" style="eyebrow">FAQ</Text>
					<Text type="h2" style="h6" id="services-faq_heading"
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
					<Accordion items={services_faqs} styleType="level-1-primary" type="single"></Accordion>
				</div>
			</div>
		</div>
	</Container>
</Section>
