<script lang="ts">
	import { Select } from 'bits-ui';
	import { MapPin, ArrowUp, ArrowDown, Check, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let { location_filter_options, selected_locations = $bindable(), removeFilter, onValueChange, locationSelectionDisabled } = $props();

	// $inspect(selected_locations);
</script>

<Select.Root type="multiple" bind:value={selected_locations} {onValueChange} disabled={locationSelectionDisabled}>
	<Select.Trigger
		class="bg-primary-50 outline-primary-200 flex transition-all duration-300 
	justify-center rounded-lg px-3 py-1.5 text-neutral-500 outline {locationSelectionDisabled ?
	'opacity-50 cursor-not-allowed': 'cursor-pointer'} group/hehe w-auto"
		aria-label="Select a location"
	>
		<div class="flex items-center gap-2">
			<MapPin></MapPin>
			<span class="font-ui font-medium">Location</span>
			{#if selected_locations && selected_locations.length > 0}
				<span class="block h-full w-[1px] bg-neutral-200"></span>
				<div class="flex w-max gap-1">
					{#each selected_locations as location, index}
						<button
                            transition:slide={{duration: 150, axis:"x"}}
                            onclick={() => removeFilter(index)}
							class="bg-primary-200 text-primary-500 group flex
						cursor-pointer items-center gap-0.5 rounded-sm
						px-1 py-0.5 text-base font-medium"
						>
							{location.charAt(0).toUpperCase() + location.slice(1)}
							<X class="transform-all size-0 duration-150 group-hover:size-5"></X>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</Select.Trigger>
	<Select.Portal>
		<Select.Content
			class="bg-primary-50 border-primary-200 translate-y-5
		rounded-lg border shadow-2xl"
		>
			<Select.ScrollUpButton class="flex w-full items-center justify-center">
				<ArrowUp class="size-3" />
			</Select.ScrollUpButton>

			<Select.Viewport class="min-w-[14rem] p-1">
				{#each location_filter_options as loc, i (i + loc.name)}
					<Select.Item
						class="data-highlighted:bg-primary-200 font-ui flex h-10
					w-full cursor-pointer items-center rounded-md py-3 pr-1.5
					pl-5 text-base capitalize outline-hidden select-none"
						value={loc.name}
						label={loc.label}
					>
						{#snippet children({ selected })}
							<span>
								{loc.label}
							</span>
							{#if selected}
								<div class="ml-auto">
									<Check />
								</div>
							{/if}
						{/snippet}
					</Select.Item>
				{/each}
			</Select.Viewport>

			<Select.ScrollDownButton class="flex w-full items-center justify-center">
				<ArrowDown class="size-3" />
			</Select.ScrollDownButton>
		</Select.Content>
	</Select.Portal>
</Select.Root>
