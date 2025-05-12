<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import Text from '$lib/components/ui/Text.svelte';

	let {
		item_list,
		Icon,
		list_class,
		list_item_class,
		list_item_text_class,
		list_item_svg_class
	}: {
		item_list: string[];
		Icon?: any;
		list_class?: string;
		list_item_class?: string;
		list_item_text_class?: string;
		list_item_svg_class?: string;
	} = $props();

	let LIST_BASE_STYLES = `w-full max-w-max list-disc space-y-1.5 pl-4 text-neutral-500 md:pl-0`;
	let LIST_ITEM_BASE_STYLES = `list-item items-center gap-2 text-left md:flex`;
	let LIST_ITEM_TEXT_BASE_STYLES = `text-neutral-500`;
	let LIST_ITEM_SVG_BASE_STYLES = `stroke-primary-300 hidden size-3.5 shrink-0 md:block lg:size-4.5`;

	let list_styles = $derived(cn(LIST_BASE_STYLES, list_class));
	let list_item_styles = $derived(cn(LIST_ITEM_BASE_STYLES, list_item_class));
	let list_item_text_styles = $derived(cn(LIST_ITEM_TEXT_BASE_STYLES, list_item_text_class));
	let list_item_svg_styles = $derived(cn(LIST_ITEM_SVG_BASE_STYLES, list_item_svg_class));
</script>

<ul class={list_styles}>
	{#each item_list as item}
		<li class={list_item_styles}>
			{#if Icon}
				<Icon class={list_item_svg_styles}></Icon>
			{/if}
			<Text type="span" style="para4" class={list_item_text_styles}>
				{item}
			</Text>
		</li>
	{/each}
</ul>
