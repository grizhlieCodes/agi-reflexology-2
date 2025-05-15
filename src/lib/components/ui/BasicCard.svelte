<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	type Props = {
		element: 'div' | 'li' | string;
		children: any;
		class?: string;
		type?: 'primary' | 'neutral';
		includeMaxWidthStyling?: boolean;
	};

	let { children, class: className, type = 'primary', element = 'div', includeMaxWidthStyling = true }: Props = $props();

	let COLOR_STYLES = {
		primary: `bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-700`,
		neutral: `bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-700`
	};

	let CARD_BASE_STYLING = ` flex flex-col items-center gap-3 border w-full py-4 px-8 rounded-xl`;
	let MAX_W_STYLING = ` max-w-xs sm:max-w-none`;

	let styles = $derived(cn(CARD_BASE_STYLING, COLOR_STYLES[type], includeMaxWidthStyling ? MAX_W_STYLING : '', className));
</script>

<svelte:element this={element} class={styles}>
	{#if children}
		{@render children?.()}
	{/if}
</svelte:element>
