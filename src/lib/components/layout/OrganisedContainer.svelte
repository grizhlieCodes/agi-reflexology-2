<!-- <script lang="ts">
	import { cn } from '$lib/scripts/utils';

	let { children, bottom, image, class: className }: { children?: any; bottom: any; image: any; class?: string } = $props();

	let CONTAINER_BASE_STYLING = `lg:gap-12 flex w-full max-w-[71.25rem] flex-col items-center justify-center
    gap-8 text-center md:gap-10`;
	let container_styles = $derived(cn(CONTAINER_BASE_STYLING, className));
</script>

<div class={container_styles}>
	{#if children}
		<div>
			{@render children?.()}
		</div>
        {#if image}
            <div>

            </div>
        {/if}
	{/if}
	{#if bottom}
		<div>
			{@render bottom?.()}
		</div>
	{/if}
</div> -->
