<script lang="ts">
	let { mobileMenuOpen, toggleMobMenu }: { mobileMenuOpen: boolean; toggleMobMenu: () => void } = $props();
	toggleMobMenu;
	const spanStyling = 'block h-[3px] w-full max-w-6 origin-[-1px] rounded-full bg-primary-800 transition-all duration-300';
</script>

<button
	aria-label="Toggle site navigation, mobile menu"
	aria-expanded={mobileMenuOpen}
	onclick={toggleMobMenu}
	class="focus-within:bg-primary-300 hover:bg-primary-300 z-20 box-content flex size-10 cursor-pointer
flex-col items-center justify-center
gap-1.5 rounded-md p-2 transition-colors duration-300 md:hidden"
>
	<span class="{mobileMenuOpen ? 'translate-x-[4px] rotate-45' : ''} {spanStyling}"></span>
	<span class="{mobileMenuOpen ? 'scale-0 opacity-0' : ''} {spanStyling}"></span>
	<span class="{mobileMenuOpen ? 'translate-x-[4px] -rotate-45' : ''} {spanStyling}"></span>
</button>
