<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Testimonial from '$lib/components/ui/Testimonial.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="massage-eliana-testimonial" background_color="primary-100" grid_span="fullSpan" vertical_padding={8}>
	<Container class="text-left">
		<Text id="massage-eliana-testimonial_heading" style="sr" type="h2"
			>This section contains a quote from Adie Pascual about her experience with Agi.</Text
		>
		<Testimonial authorName="Eliana Cals-Summers">
			"...From the very 1st treatment I felt a difference. My back and neck stopped hurting and I became more relaxed."
		</Testimonial>
	</Container>
</Section>
