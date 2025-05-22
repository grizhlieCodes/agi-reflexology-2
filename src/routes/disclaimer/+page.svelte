<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="disclaimer" vertical_padding={12} horizontal_padding={4} grid_span="fullSpan">
	<Container class="max-w-3xl items-start text-left gap-6">
		<Text type="h1" style="h3" id="disclaimer_heading">Disclaimer</Text>

		<Text type="h2" style="h5" class="mt-4">1. No Medical Advice</Text>
		<Text type="p" style="paraBase">
			The treatments offered on this site — including reflexology and massage — are not intended to diagnose, treat, cure, or prevent any medical condition. Information shared is for general wellness purposes only and should not be considered a replacement for professional medical advice, diagnosis, or treatment.
		</Text>

		<Text type="h2" style="h5" class="mt-4">2. Individual Results May Vary</Text>
		<Text type="p" style="paraBase">
			Everyone responds differently to treatments. While many clients experience relief or relaxation, results are not guaranteed and will vary depending on the individual.
		</Text>

		<Text type="h2" style="h5" class="mt-4">3. Personal Responsibility</Text>
		<Text type="p" style="paraBase">
			By booking a session, you acknowledge that you are responsible for your own health decisions. Please consult your GP or healthcare provider if you have concerns before starting any new treatment.
		</Text>

		<Text type="h2" style="h5" class="mt-4">4. Accuracy of Information</Text>
		<Text type="p" style="paraBase">
			Every effort is made to ensure the information on this site is accurate and up to date. However, no guarantees are made, and the business is not responsible for errors, omissions, or any outcomes resulting from the use of this information.
		</Text>

		<Text type="h2" style="h5" class="mt-4">5. External Links</Text>
		<Text type="p" style="paraBase">
			Occasionally, this website may include links to third-party resources. These are provided for convenience and informational purposes only. We are not responsible for the content or policies of these external sites.
		</Text>
	</Container>
</Section> 