<script lang="ts">
	import Text from '$lib/components/ui/Text.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { Toggle } from 'bits-ui';
	import Info from 'lucide-svelte/icons/info';
	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';

	interface PriceCardHeader {
		title: string;
		cost: number;
		badges?: PriceCardTypes.BadgeItem[];
		infoUnlocked: boolean;
	}

	let { title, cost, badges, infoUnlocked = $bindable() }: PriceCardHeader = $props();
</script>

<header class="flex flex-col gap-1">
	<div class="flex justify-between">
		<Text
			type="p"
			style="para8"
			class="!font-ui !font-semibold
		text-neutral-800 dark:text-neutral-300 !leading-8.5"
		>
			£{cost}
		</Text>
		<div class="flex w-full justify-end gap-1 h-max">
			{#if badges}
				{#each badges as badge}
					<Badge type={badge.type}>
						<badge.Icon />
						<span>
							{badge.content}
						</span>
					</Badge>
				{/each}
			{/if}
			<Toggle.Root
				bind:pressed={infoUnlocked}
				class="bg-info-200
            text-info-700 hover:bg-info-300 data-[state=on]:bg-info-400 data-[state=on]:text-info-950 dark:bg-info-900
            dark:hover:bg-info-800 dark:data-[state=on]:bg-info-700 dark:text-info-400 dark:data-[state=on]:text-info-50
			dark:hover:text-info-300 grid aspect-square cursor-pointer
			place-items-center rounded-sm
			transition-all duration-300 size-8"
			>
				<Info class="!size-4" />
			</Toggle.Root>
		</div>
	</div>
	<Text
		type="p"
		style="para8"
		class="font-semibold
text-neutral-500 dark:text-neutral-400"
	>
		{title}
	</Text>
</header>
