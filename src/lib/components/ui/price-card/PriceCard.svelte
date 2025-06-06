<script lang="ts">
	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';
	import PriceCardInfo from './PriceCardInfo.svelte';
	import PriceCardHeader from './PriceCardHeader.svelte';
	import PriceCardBody from './PriceCardBody.svelte';
	import PriceCardFooter from './PriceCardFooter.svelte';
	import * as badge from '$lib/scripts/badges';

	type LocalProps = PriceCardTypes.PriceCard & {
		divider?: boolean;
		class?: string;
		cost?: number;
		duration: number;
		type: 'reflexions_price_card' | 'agi_price_card';
		location_type: 'on_location' | 'home_visit';
	};

	let {
		cost,
		title,
		badges,
		divider = true,
		description,
		button,
		class: className,
		body_part,
		locations,
		days,
		duration,
		type,
		location_type
	}: LocalProps = $props();
	let infoUnlocked = $state(false);

	// $inspect({
	// 	cost,
	// 	title,
	// 	body_part,
	// 	locations,
	// 	days
	// });

	let additional_info_badges = $derived([
		...badge.getLocationBadges(locations),
		...badge.getDayBadges(days)
	]);

	let locationBadgesForCard = $derived.by(() => {
		// console.log(location_type)
		if (location_type.name === 'on_location') {
			return badge.getLocationBadges(locations, 'default');
		} else if (location_type.name === 'home_visit') {
			return badge.getLocationBadges(['home_visit'], 'default');
		}
	});

	// $inspect(locationBadgesForCard);

	// $inspect(infoUnlocked && additional_info_badges && additional_info_badges.length > 0);

	let time_badges = $derived(badge.getTimeBadge(duration));
	let body_part_badges = $derived(badge.getBodyPartAreaBadges(body_part));
</script>

{#if type === 'agi_price_card'}
	<article
		class="relative flex w-full max-w-92 flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-left transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-800/20"
	>
		{#if infoUnlocked && additional_info_badges && additional_info_badges.length > 0}
			<PriceCardInfo badges={additional_info_badges}></PriceCardInfo>
		{/if}

		{#if title || cost || locationBadgesForCard}
			<PriceCardHeader {type} {title} {cost} badges={locationBadgesForCard} bind:infoUnlocked
			></PriceCardHeader>
		{/if}

		{#if time_badges || body_part_badges || description || divider}
			<PriceCardBody {type} {time_badges} {body_part_badges} {description} {divider}
			></PriceCardBody>
		{/if}

		{#if button}
			<PriceCardFooter {button}></PriceCardFooter>
		{/if}
	</article>
{:else}
	<article
		class="relative flex w-full max-w-92 flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-left transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-800/20"
	>
		{#if infoUnlocked && additional_info_badges && additional_info_badges.length > 0}
			<PriceCardInfo badges={additional_info_badges}></PriceCardInfo>
		{/if}

		{#if title || locationBadgesForCard}
			<PriceCardHeader {type} {title} badges={locationBadgesForCard} bind:infoUnlocked
			></PriceCardHeader>
		{/if}

		{#if time_badges || body_part_badges || description || divider}
			<PriceCardBody {type} {time_badges} {body_part_badges} {description} {divider}
			></PriceCardBody>
		{/if}

		{#if button}
			<PriceCardFooter {button}></PriceCardFooter>
		{/if}
	</article>
{/if}
