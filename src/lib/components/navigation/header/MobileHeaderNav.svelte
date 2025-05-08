<script lang="ts">
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import type { NavLink } from '$lib/data/navigation/navigation';
	import Text from '$lib/components/ui/Text.svelte';
	import CollapsibleLink from './MobileHeaderNavCollapsible.svelte';

	let {
		mobileMenuOpen,
		links,
		toggleMobMenu
	}: {
		mobileMenuOpen: boolean;
		links: NavLink[];
		toggleMobMenu: () => void;
	} = $props();
</script>

{#if mobileMenuOpen}
	<nav
		transition:fly={{ y: -4, duration: 400 }}
		class=" absolute top-[4.5625rem] left-0
	z-30 flex h-[calc(100vh_-_4.5625rem)] w-full
	overflow-y-auto bg-(--header-bg) md:hidden dark:bg-(--header-bg_dark)"
	>
		<ul
			class="flex h-full w-full flex-col items-center justify-start
		pt-10"
		>
			{#each links as link, i}
				{@const activeLink = page.url.pathname === link.href}
				{#if link.links && link.links.length > 0}
					<CollapsibleLink {link} {toggleMobMenu} />
				{:else if !link?.links || link?.links?.length === 0}
					<a
						href={link.href}
						onclick={toggleMobMenu}
						data-active={activeLink}
						class="mobile-link
					border-(--header-link-border)
					text-(--header-link-text)
					focus-within:bg-(--header-link-bg_hover)
					focus-within:text-(--header-link-text_hover)
					hover:bg-(--header-link-bg_hover)
					hover:text-(--header-link-text_hover)
					dark:border-(--header-link-border_dark)
					dark:text-(--header-link-text_dark)

					dark:focus-within:bg-(--header-link-bg_dark_hover)
					dark:focus-within:text-(--header-link-text_dark_hover)
					dark:hover:bg-(--header-link-bg_dark_hover)
					dark:hover:text-(--header-link-text_dark_hover)
					"
					>
						<Text type="span" style="navLink">{link.content}</Text>
					</a>
				{/if}
			{/each}
		</ul>
	</nav>
{/if}

<style>
	@reference "../../../../app.css";

	*:global(.mobile-link) {
		@apply flex w-full cursor-pointer items-center justify-between border-b-1 px-6 py-8 text-9xl transition-all duration-300 **:!text-3xl **:!font-bold;
	}
</style>
