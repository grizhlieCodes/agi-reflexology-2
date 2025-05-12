<script lang="ts">
	let { mobileMenuOpen, toggleMobMenu }: { mobileMenuOpen: boolean; toggleMobMenu: () => void } = $props();
	toggleMobMenu;
	const spanStyling = 'block h-[3px] w-full max-w-6 origin-[-1px] rounded-full bg-(--header-burger-span-bg) dark:bg-(--header-burger-span-bg_dark) transition-all duration-300';
</script>

<button
	aria-label="Toggle site navigation, mobile menu"
	aria-expanded={mobileMenuOpen}
	onclick={toggleMobMenu}
	class="z-20 box-content flex size-10 cursor-pointer flex-col items-center justify-center
gap-1.5 rounded-md bg-(--header-burger-bg) dark:bg-(--header-burger-bg_dark)
p-2 transition-colors duration-300 focus-within:bg-(--header-burger-bg_hover)
hover:bg-(--header-burger-bg_hover) dark:focus-within:bg-(--header-burger-bg_dark_hover) dark:hover:bg-(--header-burger-bg_dark_hover) md:hidden"
>
	<span class="{mobileMenuOpen ? 'translate-x-[4px] rotate-45' : ''} {spanStyling}"></span>
	<span class="{mobileMenuOpen ? 'scale-0 opacity-0' : ''} {spanStyling}"></span>
	<span class="{mobileMenuOpen ? 'translate-x-[4px] -rotate-45' : ''} {spanStyling}"></span>
</button>
