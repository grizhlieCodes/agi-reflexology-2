<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Testimonial from '$lib/components/ui/Testimonial.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="reflexology-adie-quote" background_color="primary-100"
grid_span="fullSpan" vertical_padding={8}>
	<Container class="text-left">
		<Text id="reflexology-adie-quote_heading" style="sr" type="h2"
			>This section contains a quote from Adie Pascual about her experience with Agi.</Text
		>
		<Testimonial
			authorName="Adie Pascual"
			authorTitle="Personality Profiler
        & Coach"
		>
			<span class="mb-2 md:mb-6 block">I have been going to Aga for reflexology for about 3 months now and I cannot recommend her enough.</span>
			<span class="block">
				I'm someone who's struggled with my feminine cycle and its irregularity and after just 3 sessions, I went from having it every 42+ days to 29
				days. I didn't expect it to be this quick! Other benefits, sleeping better, hunger levels much stabilised and anything that happens in between
				sessions, she somehow picks up when I see her!"
			</span>
		</Testimonial>
	</Container>
</Section>
