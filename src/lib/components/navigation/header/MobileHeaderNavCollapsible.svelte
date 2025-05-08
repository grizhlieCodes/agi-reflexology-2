<script lang="ts">
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { Collapsible } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import Text from '$lib/components/ui/Text.svelte';
	let { link, toggleMobMenu }: { link: { href: string; content: string; links: any[] }; toggleMobMenu: () => void } = $props();
	let isOpen = $state(false);
</script>

<Collapsible.Root
	bind:open={isOpen}
	class="flex w-full flex-col items-start justify-start border-b-1 border-(--header-link-border)
		dark:border-(--header-link-border_dark)"
>
	<Collapsible.Trigger
		class="collapsible-mobile-nav focus-within
	flex 
	w-full
    items-start 
	justify-start 
	transition-all
	duration-300

	**:!text-(--header-link-text)
	focus-within:bg-(--header-link-bg_hover)
	focus-within:**:!text-(--header-link-text_hover)
	hover:bg-(--header-link-bg_hover)
	hover:**:!text-(--header-link-text_hover)
	data-[state=open]:**:!bg-(--header-link-bg_hover)
	data-[state=open]:**:!text-(--header-link-text_hover)
	dark:**:!text-(--header-link-text_dark) 
	
	dark:focus-within:bg-(--header-link-bg_dark_hover)
	dark:focus-within:**:!text-(--header-link-text_dark_hover)

	dark:hover:bg-(--header-link-bg_dark_hover)
	dark:hover:**:!text-(--header-link-text_dark_hover) 


	dark:data-[state=open]:**:!bg-(--header-link-bg_dark_hover)
	dark:data-[state=open]:**:!text-(--header-link-text_dark_hover)
	"
	>
		<div
			class="flex w-full
        cursor-pointer
        items-center justify-between px-6 py-8
        transition-all duration-300 **:!text-3xl
        **:!font-bold
        "
		>
			<Text type="span" style="navLink" class="">{link.content}</Text>
			<div class="transition-transform duration-300" class:rotate-180={isOpen}>
				<ChevronDown size="32" />
			</div>
		</div>
	</Collapsible.Trigger>
	<Collapsible.Content forceMount class="w-full">
		{#snippet child({ props, open })}
			{#if open}
				<div {...props} transition:slide>
					<ul class="flex h-max w-full flex-col pt-2 pb-8">
						{#if link.links && link.links.length > 0}
							{#each link.links as sublink, i}
								<a
								class:italic={i === 0}
								class:bold={i === 0}
									href={sublink.href}
								class="w-full px-6 py-3 *:!text-xl
								focus:outline-1 hover:underline
								text-(--header-mob-sublink-text)
								dark:text-(--header-mob-sublink-text_dark)	
								hover:text-(--header-mob-sublink-text_hover)
								dark:hover:text-(--header-mob-sublink-text_dark_hover)
								focus-within:text-(--header-mob-sublink-text_hover)
								dark:focus-within:text-(--header-mob-sublink-text_dark_hover)
								focus-within:bg-(--header-mob-sublink-bg_hover)
								dark:focus-within:bg-(--header-mob-sublink-bg_dark_hover)
								focus:outline-(--header-mob-sublink-outline_hover)
								"
								>
									<Text type="span" style="navLink">{sublink.content}</Text>
									<!-- {sublink.link_label} -->
								</a>
							{/each}
						{/if}
					</ul>
				</div>
			{/if}
		{/snippet}
	</Collapsible.Content>
</Collapsible.Root>
