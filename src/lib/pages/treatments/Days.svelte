<script lang="ts">
	import { t } from '$lib/stores/treatments.svelte';
	import { Select } from 'bits-ui';
	import { MapPin, ArrowUp, ArrowDown, Check, X, CalendarDays } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { returnLocationName } from '$lib/scripts/utils';
</script>

<Select.Root
	type="multiple"
	value={t.sel_locations}
	onValueChange={(e) => {
		console.log(e);
		t.updateSelectedDays(e);
		t.filterResults();
	}}
>
	<Select.Trigger
		class="bg-primary-50 dark:bg-primary-900 hover:bg-primary-100 dark:hover:bg-primary-800 
    text-neutral-500 dark:text-primary-300 hover:text-neutral-600 dark:hover:text-primary-200 
    outline-primary-200 dark:outline-primary-700 focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 
    group/hehe flex w-auto cursor-pointer justify-center rounded-lg px-3 py-1.5 
    outline transition-all duration-300"
		aria-label="Select the days you want the treatment on"
	>
		<div class="flex items-center gap-2">
			<CalendarDays></CalendarDays>
			<span class="font-ui font-medium">Days</span>
			{#if t.sel_days && t.sel_days.length > 0}
				<span class="block h-full w-[1px] bg-neutral-200 dark:bg-neutral-700"></span>
				<div class="flex w-max gap-1">
					{#if t.sel_days && t.sel_days.length > 0}
						<button
							onclick={() => {
								t.clearSelectedDays();
								t.filterResults();
							}}
							class="bg-primary-200 dark:bg-primary-700 hover:bg-primary-300 dark:hover:bg-primary-600 
                            text-primary-500 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-200 
                            group flex cursor-pointer items-center gap-0.5 rounded-sm 
                            px-1 py-0.5 text-base font-medium transition-colors duration-150"
						>
							{t.sel_days.length}
							<X class="size-5"></X>
						</button>
					{/if}
				</div>
			{/if}
		</div>
	</Select.Trigger>
	<Select.Portal>
		<Select.Content
			class="bg-primary-50 dark:bg-primary-900 border-primary-200 dark:border-primary-700 translate-y-5
		rounded-lg border shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
		>
			<Select.ScrollUpButton class="flex w-full items-center justify-center">
				<ArrowUp class="size-3" />
			</Select.ScrollUpButton>

			<Select.Viewport class="min-w-[14rem] p-1">
				{#each t.aval_days as day, i (i + day)}
					<Select.Item
						class="data-highlighted:bg-primary-200 dark:data-highlighted:bg-primary-700 font-ui flex h-10
					w-full cursor-pointer items-center rounded-md py-3 pr-1.5
					pl-5 text-base capitalize outline-hidden select-none dark:text-primary-200"
						value={day}
						label={returnLocationName(day)}
					>
						{#snippet children({ selected })}
							<span>
								{returnLocationName(day)}
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
