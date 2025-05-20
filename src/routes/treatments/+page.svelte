<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import PriceCard from '$lib/components/ui/price-card/PriceCard.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import { price_cards } from '$lib/data/price_cards'; // Original data.
	import Location from '$lib/pages/treatments/Location.svelte';
	import LocationType from '$lib/pages/treatments/LocationType.svelte';
	import { slide } from 'svelte/transition';
	let mounted = $state(false);

	let location_type = $state('on_location');
	let filtered_price_cards = $state([...price_cards]);

	$effect(() => {
		if (!mounted) {
			mounted = true;
			filterWithLocationType();
		}
	});

	let locationTypeMapping: any = {
		on_location: ['agi', 'chelsea', 'bayswater'],
		home_visit: ['home_visit']
	};

	let locations: any = {
		on_location: [
			{ name: 'agi', label: 'Burnham: Agi Studio' },
			{ name: 'bayswater', label: 'Reflexions: Bayswater' },
			{ name: 'chelsea', label: 'Reflexions: Chelsea' }
		],
		home_visit: [
			{ name: 'beaconsfield', label: 'Beaconsfield' },
			{ name: 'bisham', label: 'Bisham' },
			{ name: 'bourne_end', label: 'Bourne End' },
			{ name: 'cookham', label: 'Cookham' },
			{ name: 'farnham_common', label: 'Farnham Common' },
			{ name: 'forty_green', label: 'Forty Green' },
			{ name: 'hedgerley', label: 'Hedgerley' },
			{ name: 'maidenhead', label: 'Maidenhead' },
			{ name: 'marlow', label: 'Marlow' },
			{ name: 'penn', label: 'Penn' },
			{ name: 'stoke_poges', label: 'Stoke Poges' },
			{ name: 'taplow', label: 'Taplow' },
			{ name: 'woodburn_green', label: 'Woodburn Green' }
		]
	};
	let allowedLocations = $derived(locationTypeMapping[location_type]);

	interface location {
		name: string;
		label: string;
	}

	let location_filter_options = $derived(locations[location_type]);
	let selected_locations = $state<location[]>([]);

	const filterWithLocationType = () => {
		let res = [];

		res = price_cards.filter((card) => {
			return card.locations.some((card_location: string) =>
				allowedLocations.includes(card_location)
			);
		});
		filtered_price_cards = res;
		selected_locations = [];
	};

	const removeFilter = (index: any) => {
		selected_locations = selected_locations.filter((l, i) => i !== index);
		filterWithLocation();
	};

	const filterWithLocation = () => {
		let res = [];

		if (selected_locations.length === 0) {
			filterWithLocationType();
			return;
		}

		res = filtered_price_cards.filter((card) => {
			return card.locations.some((locName) => {
				return selected_locations.some((sel_loc) => {
					return sel_loc === locName;
				});
			});
		});

		filtered_price_cards = res;
	};

	let locationSelectionDisabled = $derived(location_type === 'home_visit');
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
			<!-- <div class="w-max grow-0">
				<LocationType onValueChange={filterWithLocationType} bind:location_type></LocationType>
			</div>
			<div class=" items-center gap-2">
				<Location
					{locationSelectionDisabled}
					onValueChange={filterWithLocation}
					{removeFilter}
					{location_filter_options}
					bind:selected_locations
				></Location>
			</div>
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
		<!-- <div
			class="flex flex-wrap justify-center gap-4 md:gap-8 xl:grid
		xl:grid-cols-3"
		>
			{#each filtered_price_cards as pc}
				<PriceCard {...pc} class=""></PriceCard>
			{/each}
		</div> -->
	</Container>
</Section>
