<script lang="ts">
	import { RadioGroup } from 'bits-ui';
	import { MapPinHouse, Car } from 'lucide-svelte';
	import { t } from '$lib/stores/treatments.svelte';

	// let selectedValue = $state(location_type); // Default selected value

	const filterOptions = [
		{ id: 'on_location', label: 'On Location', class_side: 'left', Icon: MapPinHouse },
		{ id: 'home_visit', label: 'Home Visit', class_side: 'right', Icon: Car }
	];

	// let { location_type, onValueChange } = $props();
</script>

<div>
	<RadioGroup.Root
		value={t.sel_location_type}
		aria-label="Filter Options"
		class="bg-primary-50 dark:bg-primary-900 outline-primary-200 dark:outline-primary-700 focus-within:ring-2 focus-within:ring-primary-300 dark:focus-within:ring-primary-600 flex justify-center rounded-lg
	p-1 outline transition-all duration-300"
	>
		{#each filterOptions as option (option.id)}
			{@const selected_class = t.sel_location_type === option.id ? `selected` : ``}
			<div class="location-type-filter-item {option.class_side} {selected_class}">
				<RadioGroup.Item
					onclick={() => {
						t.updateSelectedLocationType(option.id);
						t.filterResults()
					}}
					value={option.id}
					id={`filter-${option.id}`}
				></RadioGroup.Item>
				<label for={`filter-${option.id}`} class="flex cursor-pointer items-center gap-1">
					<option.Icon class=""></option.Icon>
					<span class="">{option.label}</span>
				</label>
			</div>
		{/each}
	</RadioGroup.Root>
</div>

<style>
	@reference '../../../app.css';

	*:global(.location-type-filter-item) {
		@apply text-primary-400 dark:text-primary-400 flex w-max px-2 py-1 transition-colors duration-300 hover:bg-primary-100 dark:hover:bg-primary-800;
	}
	*:global(.location-type-filter-item.selected) {
		@apply bg-primary-200 dark:bg-primary-700 text-primary-600 dark:text-primary-100;
	}

	*:global(.left) {
		@apply rounded-l-md rounded-r-xs;
	}
	*:global(.right) {
		@apply rounded-l-xs rounded-r-md;
	}
</style>
