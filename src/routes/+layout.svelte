<script lang="ts">
	import { page } from '$app/state';
	import PageTransition from '$lib/components/layout/PageTransition.svelte';
	import Header from '$lib/components/navigation/header/Header.svelte';
	import { headerData, footerData } from '$lib/data/navigation/navigation';
	import '../app.css';
	import Footer from '$lib/components/navigation/footer/Footer.svelte';
	import Head from '$lib/data/Head.svelte';
	import ReportButton from '$lib/components/ui-interactive/ReportButton.svelte';
	import { pathToTitle } from '$lib/scripts/utils';
	import { dm } from '$lib/stores/darkmode.svelte';

	let pathname = $derived(pathToTitle(page.url.pathname));
	let mounted = $state(false);
	let { header_cta, header_logo, header_links } = $derived(headerData);
	let { children, data } = $props();

	$effect(() => {
		if (!mounted) {
			mounted = true;
			dm.updatedBasedOnLocalStorage();
			dm.setDmInLocalStorage();
			dm.setDarkClass();
		}
	});

	$effect(() => {
		if (dm.dm) dm.setDarkClass();
	});
</script>

<Head></Head>

<svelte:head>
	<title>Agi Reflexology - {pathname}</title>
</svelte:head>

<Header cta={header_cta} logo={header_logo} links={header_links}></Header>

<div
	class="flex flex-col min-h-screen
supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:grid-rows-[minmax(100px,max-content)_1fr_max-content]"
>
	<div class="flex-1 h-full w-full supports-[display:grid]:row-start-1">
		<PageTransition url={data.url}>
			{@render children()}
		</PageTransition>
	</div>
</div>

<!-- <ReportButton></ReportButton> -->
<Footer {...footerData}></Footer>
