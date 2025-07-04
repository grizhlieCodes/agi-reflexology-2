<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';

	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Logo from '../Logo.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import DesktopHeaderNav from './DesktopHeaderNav.svelte';
	import MobileHeaderNav from './MobileHeaderNav.svelte';
	import { dm } from '$lib/stores/darkmode.svelte';
	let { links, logo, cta } = $props();

	let mobileMenuOpen = $state(false);
	const toggleMobMenu = () => (mobileMenuOpen = !mobileMenuOpen);

	const darkToggle = () => dm.toggle();
</script>

<header
	class="main-header fixed top-0 left-0 z-30 flex w-full justify-center transition-all
md:mt-4 md:px-6 md:pt-5 lg:p-0"
>
	<div
		class="relative flex w-full max-w-[64rem] items-center justify-between border-b
	border-(--header-border) bg-(--header-bg) py-2 pr-1 pl-5 md:rounded-2xl md:border md:px-3 lg:p-1 dark:border-(--header-border_dark) dark:bg-(--header-bg_dark)"
	>
		<!--! Logo -->
		<Logo {...logo} textClass="lg:text-xl"></Logo>

		<!--! Mobile Navigation -->
		<MobileHeaderNav {mobileMenuOpen} {toggleMobMenu} {links} {cta}></MobileHeaderNav>
		<DesktopHeaderNav {links}></DesktopHeaderNav>

		<div class="md:hidden">
			<BurgerMenu {mobileMenuOpen} {toggleMobMenu}></BurgerMenu>
		</div>

		<!--! Call To Action Button -->
		<div class="hidden gap-1 md:flex">
			<Button
				type="outline"
				ariaLabel="Hehe"
				iconOnly
				size={3}
				onclick={darkToggle}
				class="min-h-10 min-w-10 rounded-xl"
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
			<div class="hidden lg:block">
				<Button
					size={4}
					type="primary"
					href={cta.href}
					ariaLabel="Explore all of the treatments I offer"
				>
					{cta.content}
				</Button>
			</div>
		</div>
	</div>
</header>

<span
	class="fixed top-0 left-0 z-29 hidden h-40 w-full bg-white/10 mask-[linear-gradient(black,black,transparent)] backdrop-blur-xl
md:block dark:bg-neutral-950/10"
></span>

<style>
	@reference "../../../../app.css";

	*:global(.main-header) {
		/* Core Header/Nav */
		--header-bg: var(--color-primary-100);
		--header-bg_dark: var(--color-primary-900);
		--header-border: var(--color-primary-300);
		--header-border_dark: var(--color-primary-700);

		/* Burger Menu */
		--header-burger-bg: var(--color-primary-200);
		--header-burger-bg_dark: var(--color-primary-800);
		--header-burger-bg_hover: var(--color-primary-300);
		--header-burger-bg_dark_hover: var(--color-primary-700);
		--header-burger-span-bg: var(--color-primary-700);
		--header-burger-span-bg_dark: var(--color-primary-300);

		/* Logo */
		--header-logo: var(--color-primary-600);
		--header-logo-dark: var(--color-primary-300);

		/* Links */
		--header-link-border: var(--color-primary-200);
		--header-link-border_dark: var(--color-primary-700);
		--header-link-bg_hover: var(--color-primary-200);
		--header-link-bg_dark_hover: var(--color-primary-700);
		--header-link-text: var(--color-primary-500);
		--header-link-text_dark: var(--color-primary-300);
		--header-link-text_hover: var(--color-primary-600);
		--header-link-text_dark_hover: var(--color-primary-100);
		--header-link-outline: var(--color-primary-500);
		--header-link-outline_dark: var(--color-primary-400);

		/* Sublinks */
		--header-mob-sublink-text: var(--color-primary-500);
		--header-mob-sublink-text_dark: var(--color-primary-400);
		--header-mob-sublink-text_hover: var(--color-primary-700);
		--header-mob-sublink-text_dark_hover: var(--color-primary-200);
		--header-mob-sublink-bg_hover: var(--color-primary-100);
		--header-mob-sublink-bg_dark_hover: var(--color-primary-900);
		--header-mob-sublink-outline_hover: var(--color-primary-400);
	}
</style>
