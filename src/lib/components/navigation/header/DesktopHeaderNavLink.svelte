<script lang="ts">
	import { page } from '$app/state';
	import Text from '$lib/components/ui/Text.svelte';
	import type { NavLink } from '$lib/data/navigation/navigation';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	let { link, linkEqualsCurrentPage, isLastLink }: { link: NavLink; linkEqualsCurrentPage: boolean; isLastLink: boolean } = $props();
	// State Variables
	let linkHasSublinks = $derived(link.links && link.links.length > 0);
	let ariaHasPopup = $derived(linkHasSublinks ? true : false);
	let focusedInside = $state(false);
	let ariaExpanded = $state(false);

	// Handling State
	const handleFocus = () => {
		focusedInside = true;
		ariaExpanded = true;
	};

	const handleBlur = (e: any) => {
		// Delay the blur check to ensure that the next item (if any) receives focus first
		setTimeout(() => {
			if (!focusedInside) {
				ariaExpanded = false;
			}
			focusedInside = false; // Reset for the next cycle
		}, 0);
	};
</script>

<li
	class="tablet-desktop-link group relative list-none
{isLastLink ? 'lt:hidden' : ''}"
	onmouseover={() => (ariaExpanded = true)}
	onmouseleave={() => (ariaExpanded = false)}
	onfocus={() => (ariaExpanded = true)}
	onblur={handleBlur}
>
	<a
		href={link.href}
		data-sveltekit-preload-data
		class="
		m-0
		flex
		flex-row
		items-center
		gap-1
		rounded-lg

		px-3
		py-1

		text-(--header-link-text)
		transition-all

		duration-500
		group-focus-within:bg-(--header-link-bg_hover)

		group-focus-within:text-(--header-link-text_hover)

		group-focus-within:outline-1
		group-focus-within:outline-(--header-link-outline) group-hover:bg-(--header-link-bg_hover) hover:text-(--header-link-text_hover) dark:text-(--header-link-text_dark) dark:group-focus-within:bg-(--header-link-bg_dark_hover)
		dark:group-focus-within:text-(--header-link-text_dark_hover) dark:group-focus-within:outline-(--header-link-outline_dark) dark:group-hover:bg-(--header-link-bg_dark_hover) dark:hover:text-(--header-link-text_dark_hover)
	 
	
	
		{linkEqualsCurrentPage ? ' *:!font-[700]' : ''}
	"
		aria-haspopup={ariaHasPopup}
		aria-expanded={ariaExpanded}
		onfocus={handleFocus}
	>
		<Text type="span" style="para4" class="!text-inherit">{link.content}</Text>
		{#if linkHasSublinks}
			<div
				class="!stroke-(--header-link-text)
			transition-transform
			duration-500
			group-focus-within:rotate-180

			group-focus-within:!stroke-(--header-link-text_hover)
			group-hover:rotate-180 dark:!stroke-(--header-link-text_dark)
			 dark:group-focus-within:!stroke-(--header-link-text_dark_hover)"
			>
				<ChevronDown></ChevronDown>
			</div>
		{/if}
	</a>
	{#if linkHasSublinks}
		<div
			class="pointer-events-none invisible absolute top-full left-1/2 -translate-x-1/2
		pt-6 opacity-0 transition-all
         duration-500 group-focus-within:pointer-events-auto group-focus-within:visible
         group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100"
		>
			<ul
				class="min-w-20rem flex w-max flex-col rounded-lg border border-solid
         border-(--header-border) bg-(--header-bg) py-6 text-left dark:border-(--header-border_dark) dark:bg-(--header-bg_dark)"
			>
				{#if link?.links && link?.links.length > 0}
					{#each link?.links as sub_link, i}
						{@const sublinkActive = sub_link.href === page.url.pathname}
						<a
							data-sveltekit-preload-data
							href={sub_link.href}
							class=" {i === 0 ? 'italic underline' : ''}
							px-6
							py-1
							text-lg
							text-(--header-link-text)
							outline-0
							transition-all
							duration-500
							group-focus-within:text-(--header-link-text_hover)
							focus-within:bg-(--header-link-bg_hover)
							hover:bg-(--header-link-bg_hover)
							hover:text-(--header-link-text_hover) dark:text-(--header-link-text_dark)
						dark:group-focus-within:text-(--header-link-text_dark_hover) dark:focus-within:bg-(--header-link-bg_dark_hover) dark:hover:bg-(--header-link-bg_dark_hover) dark:hover:text-(--header-link-text_dark_hover)
						{sublinkActive ?  `**:!font-[700] bg-(--header-link-bg_hover) dark:bg-(--header-link-bg_dark_hover)` : ''}
						"
						>
							<Text type="span" style="para4">{sub_link.content}</Text>
						</a>
					{/each}
				{/if}
			</ul>
		</div>
	{/if}
</li>
