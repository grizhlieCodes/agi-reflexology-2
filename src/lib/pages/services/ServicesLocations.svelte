<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section grid_span="centeredSpan1" section_id="services-locations">
	<Container>
		<div class="w-full text-left">
			<div class="w-full">
				<Text type="span" style="eyebrow">Where You Can See Me</Text>
				<Text type="h2" style="h7" id="services-locations_heading">Did You Know? I Offer Home Visits Around Burnham</Text>
			</div>
			<Text type="p" style="paraBase">
				Most of my treatments take place in a calm, private space at my home in Burnham. I also work from several London locations during the week and
				offer occasional home visits nearby Burnham.
			</Text>
		</div>

		<div class="border-primary-200 dark:border-primary-700 w-full overflow-hidden rounded-md border-2">
			<iframe
				class="aspect-square w-full"
				title="Agi studio & Home Visit Locations Map"
				src="https://www.google.com/maps/d/u/0/embed?mid=1UQRL-Ib8MeL75WVjxvyCbUsWcCA5Wwc&ehbc=2E312F&noprof=1"
			></iframe>
		</div>
		<div class="flex flex-col flex-wrap gap-3 lg:flex-row lg:flex-nowrap">
			<Button
				size={4}
				type="primary"
				ariaLabel="View my treatments page to see which of my services could benefit you"
				href="/treatments"
				class="min-w-max"
			>
				Explore My Treatments
			</Button>
			<Button size={4} type="plain" ariaLabel="View my treatments page to see which of my services could benefit you" href="/" class="min-w-max">
				View All Locations
			</Button>
		</div>
	</Container>
</Section>
