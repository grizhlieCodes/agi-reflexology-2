<script lang="ts">
	import { Accordion, type WithoutChildrenOrChild, type AccordionRootProps as BitsAccordionRootProps, type BitsDivAttributes } from 'bits-ui';
	import AccordionItem from './AccordionItem.svelte';

	// Define the shape of each item object expected in the 'items' array prop
	export type AccordionListItem = {
		value: string; // Unique value for the item, used by bits-ui
		title: string;
		content: string;
		type?: 'default' | 'level-1-neutral' | 'level-2-neutral' | 'level-1-primary' | 'level-2-primary';
		disabled?: boolean;
	};

	// This type defines what $props() will return.
	// It includes Accordion.RootProps (via WithoutChildrenOrChild) and our custom 'items' and 'class' props.
	// `value` and `ref` are part of Accordion.RootProps and will be made bindable on this component.
	type Props = WithoutChildrenOrChild<BitsAccordionRootProps> & {
		items: AccordionListItem[];
		class?: BitsDivAttributes['class'];
		styleType: 'default' | 'level-1-neutral' | 'level-2-neutral' | 'level-1-primary' | 'level-2-primary';
	};

	let {
		items,
		styleType,
		// Make `value` a bindable prop for this Accordion component.
		// Its type (string | string[] | undefined) is inferred from Accordion.RootProps['value'].
		value = $bindable<string | string[] | undefined>(),
		ref = $bindable<HTMLDivElement | null>(null), // Makes `ref` a bindable prop.
		class: passedClass,
		...otherRootProps // These are the remaining props for Accordion.Root (e.g., type, orientation)
	}: Props = $props();
</script>

<Accordion.Root bind:value bind:ref {...otherRootProps as any} class="w-full {passedClass ?? ''}">
	{#each items as item (item.title)}
		<AccordionItem value={item.value} title={item.title} content={item.content} disabled={item.disabled} type={styleType} />
	{/each}
</Accordion.Root>
