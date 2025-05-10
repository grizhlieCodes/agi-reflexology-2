<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	let {
		src,
		alt,
		figCaption,
		containerClass,
		imgClass,
		loading = 'lazy',
		brightness = 0,
		decorate = true
	}: {
		src: string;
		alt: string;
		figCaption?: string;
		containerClass?: string;
		imgClass?: string;
		loading?: 'lazy' | 'eager';
		brightness?: number;
		decorate?: boolean;
	} = $props();

	let isLoading: boolean = $state(true);

	let CONTAINER_BASE_STYLING = 'relative h-full w-full';
	let IMAGE_BASE_STYLING = 'h-full w-full object-cover';
	let DECORATION_STYLING = 'rounded-xl border-2 border-primary-200 dark:border-primary-700 overflow-hidden';

	const clampedBrightness = $derived(Math.max(0, Math.min(100, brightness)));
	const brightnessOpacity = $derived(clampedBrightness / 100);

	let containerStyles = $derived(cn(CONTAINER_BASE_STYLING, decorate ? DECORATION_STYLING : '', containerClass));
	let imageStyles = $derived(cn(IMAGE_BASE_STYLING, imgClass));
</script>

<figure class={containerStyles}>
	{#if isLoading}
		<div class="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-200">
			<!-- Optional: You could put a simple spinner or placeholder here -->
		</div>
	{/if}

	<div class="absolute inset-0 h-full w-full {isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300 ease-in-out'} flex flex-col">
		<img
			{src}
			{alt}
			class={imageStyles}
			{loading}
			onload={() => (isLoading = false)}
			onerror={() => {
				isLoading = false;
				console.error('Image failed to load:', src);
			}}
		/>

		{#if clampedBrightness > 0 && !isLoading}
			<div
				class="pointer-events-none absolute inset-0 bg-white
			transition-colors duration-300 dark:bg-black/40"
				style="opacity: {brightnessOpacity};"
			></div>
		{/if}
	</div>
	{#if figCaption && !isLoading}
		<figcaption class="mt-2 text-center text-sm text-gray-600">
			{figCaption}
		</figcaption>
	{/if}
</figure>
