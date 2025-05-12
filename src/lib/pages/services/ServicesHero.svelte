<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section
	section_id="services-hero"
	grid_span="fullSpan"
	gap={4}
	vertical_padding={14}
	class="bg-primary-50 items-center justify-center py-36 lg:py-40 lg:pb-32"
	horizontal_padding={6}
>
	<Container class="">
		<div class="flex flex-col items-center gap-3 text-center">
			<div>
				<Text type="span" style="eyebrow">My Services</Text>
				<Text id="services-hero_heading" type="h1" style="h5" class="max-w-4xl font-[450]">I Offer Reflexology Treatments & Massages</Text>
			</div>
			<Text type="p" style="paraBase" class="max-w-2xl text-neutral-500 dark:text-neutral-400">
				My core services are composed of Reflexology Treatments and Massages. Reflexology predominantly helps your body heal itself. Massages direct
				specific areas that need help on the surface.
			</Text>
		</div>
		<div class="flex flex-col flex-wrap gap-3 lg:flex-row lg:flex-nowrap">
			<Button
				size={3}
				type="primary"
				ariaLabel="View my treatments page to see which of my services could benefit you"
				href="/treatments"
				class="min-w-max"
			>
				Explore My Treatments
			</Button>
			<Button
				size={3}
				type="plain"
				ariaLabel="View the locations that I
			offer my services in"
				href="/locations"
				class="min-w-max"
			>
				View My Locations
			</Button>
		</div>
	</Container>
</Section>
