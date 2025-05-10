<script lang="ts">
	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';
	import PriceCardInfo from './PriceCardInfo.svelte';
	import PriceCardHeader from './PriceCardHeader.svelte';
	import PriceCardBody from './PriceCardBody.svelte';
	import PriceCardFooter from './PriceCardFooter.svelte';

	type LocalProps = PriceCardTypes.PriceCard & {
		divider?: boolean;
		class?: string;
	};

	let { cost, title, badges, divider = true, description, button, class: className }: LocalProps = $props();
	let infoUnlocked = $state(false);
</script>

<article
	class="relative flex w-full max-w-96 flex-col gap-4 rounded-xl border
border-neutral-200 bg-neutral-50 p-6 text-left transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-800/20"
>
	{#if infoUnlocked}
		<PriceCardInfo badges={badges.additional_info}></PriceCardInfo>
	{/if}
	<PriceCardHeader {title} {cost} badges={badges.location} bind:infoUnlocked></PriceCardHeader>
	<PriceCardBody {badges} {description} {divider}></PriceCardBody>
	<PriceCardFooter {button}></PriceCardFooter>
</article>
