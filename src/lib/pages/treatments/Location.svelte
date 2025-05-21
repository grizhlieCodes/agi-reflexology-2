<script lang="ts">
	import { t } from '$lib/stores/treatments.svelte';
	import { Select } from 'bits-ui';
	import { MapPin, ArrowUp, ArrowDown, Check, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { returnLocationName } from '$lib/scripts/utils';
</script>

<Select.Root
	type="multiple"
	value={t.sel_locations}
	onValueChange={(e) => {
		t.updateSelectedLocations(e);
		t.filterResults();
	}}
>
	<Select.Trigger
		class="bg-primary-50 outline-primary-200 group/hehe flex w-auto 
	cursor-pointer justify-center rounded-lg px-3 py-1.5 text-neutral-500 outline transition-all duration-300"
		aria-label="Select a location"
	>
		<div class="flex items-center gap-2">
			<MapPin></MapPin>
			<span class="font-ui font-medium">Location</span>
			{#if t.sel_locations && t.sel_locations.length > 0}
				<span class="block h-full w-[1px] bg-neutral-200"></span>
				<div class="flex w-max gap-1">
					{#each t.sel_locations as location, index}
						<button
							transition:slide={{ duration: 150, axis: 'x' }}
							onclick={() => {
								t.removeSelectedLocation(location);
								t.filterResults();
							}}
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
				{#each t.aval_locations as loc, i (i + loc)}
					<Select.Item
						class="data-highlighted:bg-primary-200 font-ui flex h-10
					w-full cursor-pointer items-center rounded-md py-3 pr-1.5
					pl-5 text-base capitalize outline-hidden select-none"
						value={loc}
						label={returnLocationName(loc)}
					>
						{#snippet children({ selected })}
							<span>
								{returnLocationName(loc)}
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
