<script lang="ts">
	import { page } from '$app/state';
	import type { NavLink } from '$lib/data/navigation/navigation';
	import DesktopHeaderNavLink from './DesktopHeaderNavLink.svelte';
	let {
		links
	}: {
		links: NavLink[];
	} = $props();
</script>

<nav class="hidden h-min md:block">
	<ul class="flex">
		{#each links as link, index}
			{@const linkEqualsCurrentPage = link.href === page.url.pathname}
			{@const isLastLink = index === links.length - 1}
			<DesktopHeaderNavLink {isLastLink} {link} {linkEqualsCurrentPage}></DesktopHeaderNavLink>
		{/each}
	</ul>
</nav>
