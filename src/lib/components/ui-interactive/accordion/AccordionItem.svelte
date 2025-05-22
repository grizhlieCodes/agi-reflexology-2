<script lang="ts">
	import {
		Accordion,
		type WithoutChildrenOrChild,
		type AccordionItemProps as BitsAccordionItemProps
	} from 'bits-ui';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { slide } from 'svelte/transition';

	type Props = WithoutChildrenOrChild<BitsAccordionItemProps> & {
		title: string;
		content: string;
		type: 'default' | 'level-1-neutral' | 'level-2-neutral' | 'level-1-primary' | 'level-2-primary';
		// 'value' is part of BitsAccordionItemProps and is expected to be passed by the parent.
		// 'disabled' is also part of BitsAccordionItemProps.
	};

	// Destructure title and content, and spread the rest of Accordion.Item specific props (like value, disabled)
	let { title, content, type, ...itemProps }: Props = $props();
</script>

<Accordion.Item
	{...itemProps}
	class="group/item accordion-item
	bg-(--accordion-item-bg) dark:bg-(--accordion-item-bg_dark) {type} 
	{type === 'default'
		? ``
		: `border-b border-(--accordion-item-border) dark:border-(--accordion-item-border_dark)`}
	
"
>
	<Accordion.Header
		class="-300 w-full px-6 transition-colors hover:bg-(--accordion-item-bg_hover) dark:hover:bg-(--accordion-item-bg_dark_hover)"
	>
		<Accordion.Trigger
			class="group/trigger flex w-full flex-1 cursor-pointer items-center justify-between
		py-5 text-[15px] font-medium text-(--accordion-item-title)
		transition-all select-none
		hover:text-(--accordion-item-title_hover)
		dark:text-(--accordion-item-title_dark)
		dark:hover:text-(--accordion-item-title_dark_hover)
		[&[data-state=open]>span]:font-semibold
		[&[data-state=open]>span]:text-(--accordion-item-title_active)
		[&[data-state=open]>span]:dark:text-(--accordion-item-title_dark_active)
		[&[data-state=open]>span>svg]:rotate-180
			"
		>
			<span
				class="font-body w-full text-left text-base leading-6 tracking-normal group-hover/trigger:underline"
			>
				{title}
			</span>
			<span
				class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent"
			>
				<ChevronDown
					class="size-[18px] transition-transform duration-200 
        "
				/>
			</span>
		</Accordion.Trigger>
		{#if type === 'default'}
			<span
				class="block h-[1px] bg-(--accordion-item-border) dark:bg-(--accordion-item-border_dark)"
			></span>
		{/if}
	</Accordion.Header>
	<Accordion.Content
		forceMount={true}
		class="overflow-hidden px-6
	text-left  text-sm tracking-[-0.01em]"
	>
		{#snippet child({ props, open })}
			{#if open}
				<div {...props} transition:slide={{ duration: 300 }}>
					<div
						class="
						text para4 accordion-html [&_a]:text-primary-500 dark:[&_a]:text-primary-100 [&_a]:hover:text-primary-900
						dark:[&_a]:hover:text-primary-300 pt-1 pb-[25px] text-(--accordion-item-content)
						**:has-[li]:list-outside
					**:has-[li]:!list-disc **:has-[li]:pl-7 **:has-[+li]:pb-1
					dark:text-(--accordion-item-content_dark)
						[&_a]:font-semibold
					[&_a]:underline [&_a]:underline-offset-4
					[&_a]:transition-colors
						[&_a]:duration-300
						"
					>
						{@html content}
					</div>
				</div>
			{/if}
		{/snippet}
	</Accordion.Content>
</Accordion.Item>

<style>
	@reference "../../../../app.css";

	:global(.accordion-item.default) {
		--accordion-item-bg: transparent;
		--accordion-item-bg_dark: transparent;
		--accordion-item-bg_hover: var(--color-neutral-100);
		--accordion-item-bg_dark_hover: var(--color-neutral-900);
		--accordion-item-title: var(--color-neutral-500);
		--accordion-item-title_dark: var(--color-neutral-400);
		--accordion-item-title_hover: var(--color-neutral-600);
		--accordion-item-title_dark_hover: var(--color-neutral-300);
		--accordion-item-title_active: var(--color-neutral-900);
		--accordion-item-title_dark_active: var(--color-neutral-200);
		--accordion-item-border: var(--color-neutral-200);
		--accordion-item-border_dark: var(--color-neutral-700);
		--accordion-item-content: var(--color-neutral-600);
		--accordion-item-content_dark: var(--color-neutral-400);
	}
	:global(.accordion-item.level-1-neutral) {
		--accordion-item-bg: var(--color-neutral-50);
		--accordion-item-bg_dark: var(--color-neutral-950);
		--accordion-item-bg_hover: var(--color-neutral-100);
		--accordion-item-bg_dark_hover: var(--color-neutral-900);
		--accordion-item-title: var(--color-neutral-500);
		--accordion-item-title_dark: var(--color-neutral-300);
		--accordion-item-title_hover: var(--color-neutral-600);
		--accordion-item-title_dark_hover: var(--color-neutral-200);
		--accordion-item-title_active: var(--color-neutral-900);
		--accordion-item-title_dark_active: var(--color-neutral-50);
		--accordion-item-border: var(--color-neutral-200);
		--accordion-item-border_dark: var(--color-neutral-700);
		--accordion-item-content: var(--color-neutral-600);
		--accordion-item-content_dark: var(--color-neutral-300);
	}
	:global(.accordion-item.level-2-neutral) {
		--accordion-item-bg: var(--color-neutral-100);
		--accordion-item-bg_dark: var(--color-neutral-900);
		--accordion-item-bg_hover: var(--color-neutral-200);
		--accordion-item-bg_dark_hover: var(--color-neutral-800);
		--accordion-item-title: var(--color-neutral-600);
		--accordion-item-title_dark: var(--color-neutral-300);
		--accordion-item-title_hover: var(--color-neutral-700);
		--accordion-item-title_dark_hover: var(--color-neutral-200);
		--accordion-item-title_active: var(--color-neutral-900);
		--accordion-item-title_dark_active: var(--color-neutral-50);
		--accordion-item-border: var(--color-neutral-300);
		--accordion-item-border_dark: var(--color-neutral-600);
		--accordion-item-content: var(--color-neutral-700);
		--accordion-item-content_dark: var(--color-neutral-200);
	}
	:global(.accordion-item.level-1-primary) {
		--accordion-item-bg: var(--color-primary-50);
		--accordion-item-bg_dark: var(--color-primary-950);
		--accordion-item-bg_hover: var(--color-primary-100);
		--accordion-item-bg_dark_hover: var(--color-primary-900);
		--accordion-item-title: var(--color-primary-500);
		--accordion-item-title_dark: var(--color-primary-300);
		--accordion-item-title_hover: var(--color-primary-600);
		--accordion-item-title_dark_hover: var(--color-primary-200);
		--accordion-item-title_active: var(--color-primary-700);
		--accordion-item-title_dark_active: var(--color-primary-50);
		--accordion-item-border: var(--color-primary-200);
		--accordion-item-border_dark: var(--color-primary-700);
		--accordion-item-content: var(--color-primary-600);
		--accordion-item-content_dark: var(--color-primary-200);
	}
	:global(.accordion-item.level-2-primary) {
		--accordion-item-bg: var(--color-primary-100);
		--accordion-item-bg_dark: var(--color-primary-900);
		--accordion-item-bg_hover: var(--color-primary-200);
		--accordion-item-bg_dark_hover: var(--color-primary-800);
		--accordion-item-title: var(--color-primary-600);
		--accordion-item-title_dark: var(--color-primary-300);
		--accordion-item-title_hover: var(--color-primary-700);
		--accordion-item-title_dark_hover: var(--color-primary-50);
		--accordion-item-title_active: var(--color-primary-700);
		--accordion-item-title_dark_active: var(--color-primary-50);
		--accordion-item-border: var(--color-primary-300);
		--accordion-item-border_dark: var(--color-primary-600);
		--accordion-item-content: var(--color-primary-700);
		--accordion-item-content_dark: var(--color-primary-200);
	}
</style>
