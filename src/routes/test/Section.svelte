<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	type Props = {
		children?: any;
		type: '2col-2_1split' | '2col-1_2split';
		right?: any;
		left?: any;
		grid_class?: string;
		left_class?: string;
		right_class?: string;
		children_class?: string;
	};
	let { children, type, right, left, grid_class, left_class, right_class, children_class }: Props = $props();

	let defaultStyles: any = {
		'2col-2_1split': {
			grid: `grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-8 lg:gap-10`,
			left: `md:col-start-1 md:row-start-1`,
			right: `md:col-start-2 md:row-start-1`,
			allChildren: `md:col-start-1 md:row-start-2 md:col-span-2`
		},
		'2col-1_2split': {
			grid: `grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8 lg:gap-10`,
			left: `md:col-start-1 md:row-start-1`,
			right: `md:col-start-2 md:row-start-1`,
			allChildren: `md:col-start-1 md:row-start-2 md:col-span-2`
		}
	};

	let gridStyles = $derived(cn(defaultStyles[type].grid, grid_class));
	let childrenStyles = $derived(cn(defaultStyles[type].allChildren, children_class));
	let leftStyles = $derived(cn(defaultStyles[type].left, left_class));
	let rightStyles = $derived(cn(defaultStyles[type].right, right_class));
</script>

<div class="grid min-h-80 w-full max-w-4xl border-4 border-white {gridStyles}">
	{#if children}
		<div class="{childrenStyles} bg-red-200">
			{@render children?.()}
		</div>
	{/if}
	{#if right}
		<div class="{rightStyles} bg-yellow-200">
			{@render right?.()}
		</div>
	{/if}
	{#if left}
		<div class="{leftStyles} bg-green-200">
			{@render left?.()}
		</div>
	{/if}
</div>
