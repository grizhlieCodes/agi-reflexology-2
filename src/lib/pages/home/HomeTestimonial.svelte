<script lang="ts">
	import Container from "$lib/components/layout/Container.svelte";
	import Section from "$lib/components/layout/section/Section.svelte";
	import Testimonial from "$lib/components/ui/Testimonial.svelte";
	import Text from "$lib/components/ui/Text.svelte";


</script>

<Section section_id="homepage-adie-quote" background_color="primary-100"
grid_span="fullSpan" vertical_padding={8}>
    <Container class="text-left">
        <Text id="homepage-adie-quote_heading" style="sr" type="h2">
            This section contains a quote from Adie Pascual about her experience
            with Agi.
        </Text>
        <Testimonial authorName="Adie Pascual" authorTitle="Personality Profiler
        & Coach">
            "Agi is so dedicated to her craft, talented at reflexology and just really passionate about helping people heal that just being in her presence does exactly this. She's truly one of the best human beings I've ever met."
        </Testimonial>
    </Container>
</Section>


