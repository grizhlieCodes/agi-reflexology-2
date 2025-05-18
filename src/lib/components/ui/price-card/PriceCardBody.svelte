<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';
	import Text from '$lib/components/ui/Text.svelte';

	interface PriceCardBody {
		time_badges?: PriceCardTypes.Badge[];
		body_part_badges?: PriceCardTypes.Badge[];
		divider?: boolean;
		description?: string;
		type: 'reflexions_price_card' | 'agi_price_card';
	}

	let { type, time_badges, body_part_badges, divider, description }: PriceCardBody = $props();
</script>

{#if type === 'agi_price_card'}
	<div class="flex flex-row flex-wrap justify-between gap-1">
		{#if time_badges && time_badges.length > 0}
			{#each time_badges as badge}
				<!-- content here -->
				<Badge type={badge.type}>
					<badge.Icon />
					<span>
						{badge.content}
					</span>
				</Badge>
			{/each}
		{/if}
		{#if body_part_badges && body_part_badges.length > 0}
			<div class="flex gap-1">
				{#each body_part_badges as infoBadge}
					<Badge type={infoBadge.type}>
						{#if infoBadge.Icon}
							<infoBadge.Icon />
						{/if}
						<span>
							{infoBadge.content}
						</span>
					</Badge>
				{/each}
			</div>
		{/if}
	</div>

	{#if divider}
		<span class="block h-[1px] w-full bg-neutral-300 dark:bg-neutral-700"></span>
	{/if}

	{#if description && description.length > 0}
		<Text type="p" style="para5" class="w-full text-neutral-500 dark:text-neutral-400">
			{description}
		</Text>
	{/if}
{:else}
	<div class="flex flex-row flex-wrap justify-between gap-1">

		{#if body_part_badges && body_part_badges.length > 0}
			<div class="flex gap-1">
				{#each body_part_badges as infoBadge}
					<Badge type={infoBadge.type}>
						{#if infoBadge.Icon}
							<infoBadge.Icon />
						{/if}
						<span>
							{infoBadge.content}
						</span>
					</Badge>
				{/each}
			</div>
		{/if}
	</div>

	{#if divider}
		<span class="block h-[1px] w-full bg-neutral-300 dark:bg-neutral-700"></span>
	{/if}

	{#if description && description.length > 0}
		<Text type="p" style="para5" class="w-full text-neutral-500 dark:text-neutral-400">
			{description}
		</Text>
	{/if}
{/if}
