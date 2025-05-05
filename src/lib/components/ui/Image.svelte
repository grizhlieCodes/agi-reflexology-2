<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	let { src, alt, figCaption, containerClass, imgClass, loading = 'lazy' }: { src: string; alt: string; figCaption?: string; aspectRatio?: string; containerClass?: string; imgClass?: string; loading: 'lazy' | 'eager' } = $props();
	let isLoading: boolean = $state(true);

	let CONTAINER_BASE_STYLING = 'relative h-full w-full';
	let IMAGE_BASE_STYLING = 'h-full w-full object-cover';
	let DECORATION_STYLING = 'rounded-xl border border-primary-200';

	let containerStyles = $derived(cn(CONTAINER_BASE_STYLING, DECORATION_STYLING, containerClass));
	let imageStyles = $derived(cn(IMAGE_BASE_STYLING, imgClass));
</script>

<div class={containerStyles}>
	{#if isLoading}
		<div class="h-full w-full bg-red-500"></div>
	{/if}
	<img {src} {alt} class={imageStyles} {loading} />
</div>


