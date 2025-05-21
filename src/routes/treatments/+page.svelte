<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import PriceCard from '$lib/components/ui/price-card/PriceCard.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import Location from '$lib/pages/treatments/Location.svelte';
	import LocationType from '$lib/pages/treatments/LocationType.svelte';
	import { slide } from 'svelte/transition';

	import { t } from '$lib/stores/treatments.svelte';

	// $inspect(t.sel_locations)
</script>

<Section
	section_id="homepage-my-services"
	horizontal_padding={4}
	vertical_padding={12}
	grid_span="fullSpan"
>
	<Container class="">
		<!-- !Header -->
		<div class="flex w-full flex-col items-center gap-5">
			<div>
				<Text type="span" style="eyebrow">My Services</Text>
				<Text type="h2" style="h4" id="homepage-my-services_heading">My Treatments</Text>
			</div>
			<div>
				<Text type="p" style="paraBase">Please view the treatments I offer.</Text>
				<Text type="p" style="paraBase"
					>Every link will take you to a corresponding Fresha link for the service.</Text
				>
			</div>
		</div>

		<!-- ! Navigation -->
		<div class="flex flex-col items-center gap-3">
			<div class="w-max grow-0">
				<LocationType></LocationType>
			</div>

			<div class=" items-center gap-2">
				<Location></Location>
			</div>
			<!--
			{#if locationSelectionDisabled}
				<div transition:slide={{ duration: 400, axis: 'y' }} class="max-w-4xl">
					<Text type="p" style="paraBase">
						I am able to provide my reflexology services in the following areas (close proximity to
						Burnham):
					</Text>
					<Text type="span" style="paraBase" class="font-medium">
						{#each ['Beaconsfield', 'Bisham', 'Bourne End', 'Cookham', 'Farnham Common', 'Forty Green', 'Hedgerley', 'Maidenhead', 'Marlow', 'Penn', 'Stoke Poges', 'Taplow', 'Woodburn Green'] as loc}
							{@const href = `/locations/home-visit/${loc.toLowerCase().replaceAll(' ', '_')}`}
							<a {href} class="hover:underline">
								{loc},&nbsp;
							</a>
						{/each}
					</Text>
				</div>
			{/if}
		</div> -->

			<!-- ! Price Cards -->
			<div class="flex flex-wrap justify-center gap-4 md:gap-8 xl:grid xl:grid-cols-3">
				{#each t.aval_price_cards as pc}
					<PriceCard {...pc} class=""></PriceCard>
				{/each}
			</div>
		</div>
	</Container>
</Section>
