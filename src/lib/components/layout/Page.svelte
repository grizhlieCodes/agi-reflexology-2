<script lang="ts">
	import { page } from '$app/state';

	let {
		children,
		mainAriaLabel,
		position = 'relative'
	}: {
		children: any;
		mainAriaLabel?: string;
		position?: 'relative' | 'absolute' | 'fixed';
	} = $props();
</script>

<main aria-label={mainAriaLabel} id="{page.route.id === '/' && page.route.id ? 'home' : page.route}-main" class=" h-full w-full" style:position>
	{@render children()}
</main>
