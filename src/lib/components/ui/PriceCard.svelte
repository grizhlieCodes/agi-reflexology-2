<script lang="ts">
	import type { ComponentProps, Component } from 'svelte';
	import type { BadgeTypes } from '$lib/schemas/components/badgeTypes'; // Assuming BadgeTypes is exported
	import BadgeComp from '$lib/components/ui/Badge.svelte';
	import Text from './Text.svelte';
	import { Toggle } from 'bits-ui';
	import Info from 'lucide-svelte/icons/info';
	import { fly } from 'svelte/transition';
	import Button from '../ui-interactive/Button.svelte';

	// --- Type Definitions for PriceCard Props ---

	interface BadgeDataItem {
		type: BadgeTypes;
		content: string;
		Icon?: Component; // Standardized to Icon, optional for some
	}

	interface RequiredIconBadgeDataItem extends BadgeDataItem {
		Icon: Component; // Icon is required here
	}

	interface VisibleBadgesType {
		timeBadge: RequiredIconBadgeDataItem;
		otherBadges: BadgeDataItem[];
	}

	interface ButtonType {
		href: string;
		content: string;
	}

	interface PriceCardProps {
		cost: number;
		title: string;
		duration?: number; // Assuming duration might be optional as it's not used in template
		locationBadge: RequiredIconBadgeDataItem;
		visibleBadges: VisibleBadgesType;
		additionalInfoBadges: BadgeDataItem[];
		divider?: boolean;
		description: string;
		button: ButtonType;
	}

	// --- Component Logic ---

	let {
		cost,
		title,
		// duration, // Not used in template, can be kept if needed for other logic
		locationBadge,
		visibleBadges,
		additionalInfoBadges,
		divider = true,
		description,
		button
	}: PriceCardProps = $props();

	let infoUnlocked = $state(false);
</script>

<article
	class="relative flex w-full max-w-96 flex-col
gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
>
	<!-- Additional Info -->
	{#if infoUnlocked}
		<div
			transition:fly={{ y: 5, duration: 150 }}
			class="absolute top-0 left-0 flex w-full -translate-y-[112%]
		flex-row flex-wrap gap-1 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
		>
			{#each additionalInfoBadges as extraBadge}
				<BadgeComp type={extraBadge.type}>
					{#if extraBadge.Icon}
						<extraBadge.Icon />
					{/if}
					<span>
						{extraBadge.content}
					</span>
				</BadgeComp>
			{/each}
		</div>
	{/if}

	<!-- Header -->
	<header class="flex flex-col gap-1">
		<div class="flex justify-between">
			<Text type="p" style="para8" class="!font-ui !font-semibold text-neutral-800">
				£{cost}
			</Text>
			<div class="flex w-full justify-end gap-1">
				<BadgeComp type={locationBadge.type}>
					<locationBadge.Icon />
					<span>
						{locationBadge.content}
					</span>
				</BadgeComp>
				<Toggle.Root
					bind:pressed={infoUnlocked}
					class="bg-info-200
                text-info-700 hover:bg-info-300 data-[state=on]:bg-info-400 data-[state=on]:text-info-950 grid
                aspect-square cursor-pointer place-items-center rounded-sm
                transition-all duration-300"
				>
					<Info class="!size-4" />
				</Toggle.Root>
			</div>
		</div>
		<Text
			type="p"
			style="para8"
			class="font-semibold
    text-neutral-500"
		>
			{title}
		</Text>
	</header>

	<div class="flex flex-row flex-wrap justify-between gap-1">
		<BadgeComp type={visibleBadges.timeBadge.type}>
			<visibleBadges.timeBadge.Icon />
			<span>
				{visibleBadges.timeBadge.content}
			</span>
		</BadgeComp>
		<div class="flex gap-1">
			{#each visibleBadges.otherBadges as otherBadge}
				<BadgeComp type={otherBadge.type}>
					{#if otherBadge.Icon}
						<otherBadge.Icon />
					{/if}
					<span>
						{otherBadge.content}
					</span>
				</BadgeComp>
			{/each}
		</div>
	</div>

	{#if divider}
		<span class="block h-[1px] w-full bg-neutral-300"></span>
	{/if}

	<Text type="p" style="para5" class="w-full text-neutral-500">
		{description}
	</Text>
	<!-- Footer -> Button -->
	<footer class="mt-2 w-full">
		<Button
			type="outline"
			size={5}
			ariaLabel="Go to the fresha page with
        this treatment"
			href={button.href}
			class="w-full rounded-lg !bg-white hover:!bg-neutral-200"
		>
			{button.content}
		</Button>
	</footer>
</article>
