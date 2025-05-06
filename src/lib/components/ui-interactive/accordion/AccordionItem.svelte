<script lang="ts">
	import { Accordion, type WithoutChildrenOrChild, type AccordionItemProps as BitsAccordionItemProps } from 'bits-ui';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { slide } from 'svelte/transition';

	type Props = WithoutChildrenOrChild<BitsAccordionItemProps> & {
		title: string;
		content: string;
		type: 'base' | 'level-1-neutral' | 'level-2-neutral' | 'level-1-primary' | 'level-2-primary';
		// 'value' is part of BitsAccordionItemProps and is expected to be passed by the parent.
		// 'disabled' is also part of BitsAccordionItemProps.
	};

	// Destructure title and content, and spread the rest of Accordion.Item specific props (like value, disabled)
	let { title, content, type, ...itemProps }: Props = $props();
</script>

<Accordion.Item {...itemProps} class="group/item accordion-item border-b
border-(--accordion-item-border) bg-(--accordion-item-bg) px-6 {type}">
	<Accordion.Header class="w-full">
		<Accordion.Trigger
			class="group/trigger flex w-full flex-1 cursor-pointer items-center justify-between
		py-5 text-[15px] font-medium
		transition-all
    select-none
    [&[data-state=open]>span]:font-semibold
    [&[data-state=open]>span]:text-(--accordion-item-title_active)
    [&[data-state=open]>span>svg]:rotate-180
    text-(--accordion-item-title)
    hover:text-(--accordion-item-title_hover)
    "
		>
			<span
				class="font-body w-full text-left
			text-base leading-6 tracking-normal  group-hover/trigger:underline "
			>
				{title}
			</span>
			<span class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent">
				<ChevronDown class="size-[18px] transition-transform duration-200 
        " />
			</span>
		</Accordion.Trigger>
	</Accordion.Header>
	<Accordion.Content forceMount={true} class="overflow-hidden text-sm tracking-[-0.01em]">
		{#snippet child({ props, open })}
			{#if open}
				<div {...props} transition:slide={{ duration: 300 }}>
					<div class="text para4 pt-1 pb-[25px] text-(--accordion-item-content)">
						{content}
					</div>
				</div>
			{/if}
		{/snippet}
	</Accordion.Content>
</Accordion.Item>

<style>
	@reference "../../../../app.css";

	:global(.accordion-item.base) {
		--accordion-item-bg: transparent;
		--accordion-item-title: var(--color-neutral-500);
		--accordion-item-title_hover: var(--color-neutral-600);
		--accordion-item-title_active: var(--color-neutral-900);
		--accordion-item-border: var(--color-neutral-200);
		--accordion-item-content: var(--color-neutral-600);
	}
	:global(.accordion-item.level-1-neutral) {
		--accordion-item-bg: var(--color-neutral-50);
		--accordion-item-title: var(--color-neutral-500);
		--accordion-item-title_hover: var(--color-neutral-600);
		--accordion-item-title_active: var(--color-neutral-900);
		--accordion-item-border: var(--color-neutral-200);
		--accordion-item-content: var(--color-neutral-600);
	}
	:global(.accordion-item.level-2-neutral) {
		--accordion-item-bg: var(--color-neutral-100);
		--accordion-item-title: var(--color-neutral-600);
		--accordion-item-title_hover: var(--color-neutral-700);
		--accordion-item-title_active: var(--color-neutral-900);
		--accordion-item-border: var(--color-neutral-300);
		--accordion-item-content: var(--color-neutral-700);
	}
	:global(.accordion-item.level-1-primary) {
		--accordion-item-bg: var(--color-primary-50);
		--accordion-item-title: var(--color-primary-500);
		--accordion-item-title_hover: var(--color-primary-600);
		--accordion-item-title_active: var(--color-primary-700);
		--accordion-item-border: var(--color-primary-200);
		--accordion-item-content: var(--color-primary-600);
	}
	:global(.accordion-item.level-2-primary) {
		--accordion-item-bg: var(--color-primary-100);
		--accordion-item-title: var(--color-primary-600);
		--accordion-item-title_hover: var(--color-primary-700);
		--accordion-item-title_active: var(--color-primary-700);
		--accordion-item-border: var(--color-primary-300);
		--accordion-item-content: var(--color-primary-700);
	}
</style>
