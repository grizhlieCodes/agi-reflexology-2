<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="reflexology-helpful-clarification" horizontal_padding={4} vertical_padding={8} grid_span="centeredSpan2">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full max-w-3xl flex-col items-center gap-4
		md:flex-row-reverse md:items-start"
		>
			<div
				class="flex flex-col items-center gap-4 text-center
            md:gap-5"
			>
				<div>
					<Text type="span" style="eyebrow">A Helpful Clarification: What Reflexology is not</Text>
					<Text type="h2" style="h6" id="reflexology-helpful-clarification_heading">It’s Not a Foot Massage. It’s Not a Diagnosis.</Text>
				</div>
				<Text type="p" style="paraBase">
					Reflexology isn’t about rubbing muscles — and it’s not a medical treatment. It doesn’t diagnose illnesses or replace other care. Instead,
					it’s a gentle and respectful way to work with your body’s systems using pressure points mapped through years of study and tradition.
				</Text>
				<Text type="p" style="paraBase">It’s non-invasive, non-judgmental, and focused on helping you reconnect with your body’s own wisdom.</Text>
			</div>
		</div>
	</Container>
</Section>
