<script lang="ts">
	import Text from '$lib/components/ui/Text.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import { Toggle } from 'bits-ui';
	import Info from 'lucide-svelte/icons/info';
	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';

	interface PriceCardHeader {
		title: string;
		cost?: number;
		badges?: PriceCardTypes.Badge[];
		infoUnlocked: boolean;
		type: 'reflexions_price_card' | 'agi_price_card';
	}

	let { type, title, cost, badges, infoUnlocked = $bindable() }: PriceCardHeader = $props();
</script>

{#if type === 'agi_price_card'}
	<header class="flex flex-col gap-1">
		<div class="flex justify-between">
			{#if cost}
				<Text
					type="p"
					style="para8"
					class="!font-ui !leading-9
		!font-semibold text-neutral-800 dark:text-neutral-300"
				>
					£{cost}
				</Text>
			{/if}
			{#if badges}
				<div class="flex h-max w-full justify-end gap-1">
					{#each badges as badge}
						<Badge type={badge.type}>
							<badge.Icon />
							<span>
								{badge.content}
							</span>
						</Badge>
					{/each}
					<Toggle.Root
						bind:pressed={infoUnlocked}
						class="bg-info-200
				text-info-700 hover:bg-info-300 data-[state=on]:bg-info-400 data-[state=on]:text-info-950 dark:bg-info-900
				dark:hover:bg-info-800 dark:data-[state=on]:bg-info-700 dark:text-info-400 dark:data-[state=on]:text-info-50
				dark:hover:text-info-300 grid aspect-square size-8
				cursor-pointer place-items-center
				rounded-sm transition-all duration-300"
					>
						<Info class="!size-4" />
					</Toggle.Root>
				</div>
			{/if}
		</div>
		<Text
			type="p"
			style="para7"
			class="font-semibold
text-neutral-500 dark:text-neutral-400"
		>
			{title}
		</Text>
	</header>
{:else}
	<header class="flex flex-col gap-1">
		<div class="flex justify-between">
			{#if badges}
				<div class="flex gap-1">
					{#each badges as badge}
						<Badge type={badge.type}>
							<badge.Icon />
							<span>
								{badge.content}
							</span>
						</Badge>
					{/each}
				</div>
				<div class="flex h-max w-full justify-end gap-1">
					<Toggle.Root
						bind:pressed={infoUnlocked}
						class="bg-info-200
				text-info-700 hover:bg-info-300 data-[state=on]:bg-info-400 data-[state=on]:text-info-950 dark:bg-info-900
				dark:hover:bg-info-800 dark:data-[state=on]:bg-info-700 dark:text-info-400 dark:data-[state=on]:text-info-50
				dark:hover:text-info-300 grid aspect-square size-8
				cursor-pointer place-items-center
				rounded-sm transition-all duration-300"
					>
						<Info class="!size-4" />
					</Toggle.Root>
				</div>
			{/if}
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
{/if}
