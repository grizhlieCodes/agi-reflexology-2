<script lang="ts">
	import { RadioGroup } from 'bits-ui';
	import { MapPinHouse, Car } from 'lucide-svelte';

	// let selectedValue = $state(location_type); // Default selected value

	const filterOptions = [
		{ id: 'on_location', label: 'On Location', class_side: 'left', Icon: MapPinHouse },
		{ id: 'home_visit', label: 'Home Visit', class_side: 'right', Icon: Car }
	];

	let { location_type = $bindable(), onValueChange } = $props();
</script>

<div>
	<RadioGroup.Root
		{onValueChange}
		bind:value={location_type}
		aria-label="Filter Options"
		class="bg-primary-50 outline-primary-200 flex justify-center rounded-lg
	p-1 outline"
	>
		{#each filterOptions as option (option.id)}
			{@const selected_class = location_type === option.id ? `selected` : ``}
			<div class="location-type-filter-item {option.class_side} {selected_class}">
				<RadioGroup.Item value={option.id} id={`filter-${option.id}`}></RadioGroup.Item>
				<label
					for={`filter-${option.id}`}
					class="flex cursor-pointer
				items-center gap-1"
				>
					<option.Icon class=""></option.Icon>
					<span class="">{option.label}</span>
				</label>
			</div>
		{/each}
	</RadioGroup.Root>

	<!-- <p>Current selection: {location_type}</p> -->
</div>

<style>
	@reference '../../../app.css';

	*:global(.location-type-filter-item) {
		@apply text-primary-400 flex w-max px-2 py-1 transition-colors duration-300;
	}
	*:global(.location-type-filter-item.selected) {
		@apply bg-primary-200 text-primary-600;
	}

	*:global(.left) {
		@apply rounded-l-md rounded-r-xs;
	}
	*:global(.right) {
		@apply rounded-l-xs rounded-r-md;
	}
</style>
