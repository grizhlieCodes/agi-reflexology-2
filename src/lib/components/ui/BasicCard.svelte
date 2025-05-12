<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	type Props = {
		children: any;
		class?: string;
	};

	let { children, class: className }: Props = $props();

	let CARD_BASE_STYLING = `bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-700 flex flex-col
                items-center gap-3 border w-full py-4 px-8 rounded-xl max-w-xs sm:max-w-none`;

	let styles = $derived(cn(CARD_BASE_STYLING, className));
</script>

<div class={styles}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
