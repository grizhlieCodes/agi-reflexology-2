<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	let { children, class: className }: { children?: any; class?: string } = $props();

	let BASE_STYLING = `lg:gap-12 flex w-full max-w-[71.25rem] flex-col items-center justify-center
    gap-8 text-center md:gap-10`;
	let styles = $derived(cn(BASE_STYLING, className));
</script>

<div class={styles}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
