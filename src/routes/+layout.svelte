<script lang="ts">
	import { page } from '$app/state';
	import PageTransition from '$lib/components/layout/PageTransition.svelte';
	import Header from '$lib/components/navigation/header/Header.svelte';
	import { headerData, footerData } from '$lib/data/navigation/navigation';
	import '../app.css';
	import Footer from '$lib/components/navigation/footer/Footer.svelte';
	import Head from '$lib/data/Head.svelte';

	let pathname = $derived(page.url.pathname === '/' ? 'Home' : page.url.pathname);
	let { header_cta, header_logo, header_links } = $derived(headerData);
	let { children, data } = $props();
</script>

<Head></Head>

<svelte:head>
	<title>Agi Reflexology - {pathname}</title>
</svelte:head>

<Header cta={header_cta} logo={header_logo} links={header_links}></Header>

<div
	class="grid min-h-screen
grid-cols-1 grid-rows-[minmax(100px,max-content)_1fr_max-content]"
>
	<div class="row-start-1 h-full w-full">
		<PageTransition url={data.url}>
			{@render children()}
		</PageTransition>
	</div>
</div>
<Footer {...footerData}></Footer>
