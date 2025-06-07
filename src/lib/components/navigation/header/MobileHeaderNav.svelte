<script lang="ts">
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import type { HeaderCTA, NavLink } from '$lib/data/navigation/navigation';
	import Text from '$lib/components/ui/Text.svelte';
	import CollapsibleLink from './MobileHeaderNavCollapsible.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import { Moon, Sun } from 'lucide-svelte';
	import { dm } from '$lib/stores/darkmode.svelte';

	let {
		mobileMenuOpen,
		links,
		toggleMobMenu,
		cta
	}: {
		mobileMenuOpen: boolean;
		links: NavLink[];
		toggleMobMenu: () => void;
		cta: HeaderCTA;
	} = $props();

	const darkToggle = () => dm.toggle();
</script>

{#if mobileMenuOpen}
	<nav
		transition:fly={{ y: -4, duration: 400 }}
		class=" absolute top-[4.5625rem] left-0
	z-30 flex h-[calc(100vh_-_4.5625rem)] w-full flex-col
	overflow-y-scroll bg-(--header-bg) md:hidden dark:bg-(--header-bg_dark)"
	>
		<div
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
			<div
				class="border-primary-200 dark:border-primary-700 flex w-full items-center gap-2 border-t-1 p-4"
			>
				<Button
					type="outline"
					ariaLabel="Toggle dark mode"
					iconOnly
					size={3}
					onclick={darkToggle}
					class="h-full min-h-10 !w-16 min-w-10 rounded-xl"
				>
					<div class="relative aspect-square w-full">
						<div class="absolute top-1/2 left-1/2 hidden -translate-1/2 dark:block">
							<Sun class="!size-4.5"></Sun>
						</div>
						<div class="absolute top-1/2 left-1/2 block -translate-1/2 dark:hidden">
							<Moon class="!size-4.5"></Moon>
						</div>
					</div>
				</Button>

				<Button
					size={4}
					type="primary"
					href={cta.href}
					ariaLabel="Explore all of the treatments I offer"
					class="w-full"
				>
					{cta.content}
				</Button>
			</div>
		</div>
	</nav>
{/if}

<style>
	@reference "../../../../app.css";

	*:global(.mobile-link) {
		@apply flex w-full cursor-pointer items-center justify-between border-b-1 px-6 py-8 text-9xl transition-all duration-300 **:!text-3xl **:!font-bold;
	}
</style>
