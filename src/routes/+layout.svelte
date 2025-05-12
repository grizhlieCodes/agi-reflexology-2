<script lang="ts">
	import PageTransition from '$lib/components/layout/PageTransition.svelte';
	import Header from '$lib/components/navigation/header/Header.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import { headerData, footerData } from '$lib/data/navigation/navigation';
	import '../app.css';
	import Footer from '$lib/components/navigation/footer/Footer.svelte';

	let { children, data } = $props();

	let { header_cta, header_logo, header_links } = $derived(headerData);
	// let { footer_links, footer_business_name, footer_logo } = $derived(footerData);
</script>

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
