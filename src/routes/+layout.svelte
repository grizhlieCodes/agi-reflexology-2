<script lang="ts">
	import PageTransition from '$lib/components/layout/PageTransition.svelte';
	import Header from '$lib/components/navigation/header/Header.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import { navData } from '$lib/data/navigation/navigation';
	import { Moon, Sun } from 'lucide-svelte';
	import '../app.css';

	let { children, data } = $props();

	let { header_cta, logo, header_links } = $derived(navData);

	const darkToggle = () => {
		const htmlElement = document.documentElement;
		htmlElement.classList.toggle('dark');
	};
</script>

<Button type="outline" ariaLabel="Hehe" iconOnly size={3} func={darkToggle}
class="fixed bottom-0 lg:top-0 lg:bottom-[unset] right-0 -translate-x-2
-translate-y-2 lg:translate-y-2 z-500">
	<div class="grid place-items-center *:col-start-1 *:row-start-1">
		<div class="hidden dark:block">
			<Moon class="!size-4.5"></Moon>
		</div>
		<div class="block dark:hidden">
			<Sun class="!size-4.5"></Sun>
		</div>
	</div>
</Button>

<div
	class="grid min-h-screen
grid-cols-1 grid-rows-[minmax(100px,max-content)_1fr_max-content]"
>
	<Header cta={header_cta} {logo} links={header_links}></Header>

	<div class="row-start-1 h-full w-full">
		<PageTransition url={data.url}>
			{@render children()}
		</PageTransition>
	</div>

	<!-- <Footer blok={data.navData}></Footer> -->
</div>
