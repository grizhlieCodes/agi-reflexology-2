<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import type { TextTypes, TextStyles } from '$lib/schemas/components/textTypes';
	import { styles } from './styles/textStyles';

	let {
		children,
		type,
		style,
		class: className,
		id,
		...restProps
	}: { children: any; type: TextTypes; style: TextStyles; class?: string; id?: string } = $props();

	let styling = $derived(cn(styles[style], className));
</script>

<svelte:element this={type} {id} class={styling} {...restProps}>
	{@render children()}
</svelte:element>

<style>
	@reference "../../../app.css";

	:global(.text.h1) {
		@apply font-heading text-5xl font-normal tracking-tighter md:text-7xl lg:text-9xl;
	}

	:global(.text.h2) {
		@apply font-heading text-5xl font-normal tracking-tighter md:text-6xl lg:text-8xl;
	}

	:global(.text.h3) {
		@apply font-heading text-4xl font-normal tracking-tighter md:text-5xl lg:text-7xl;
	}

	:global(.text.h4) {
		@apply font-heading text-4xl font-normal tracking-tighter md:text-5xl lg:text-6xl;
	}

	:global(.text.h5) {
		@apply font-heading text-3xl font-normal tracking-tighter md:text-4xl lg:text-5xl;
	}

	:global(.text.h6) {
		@apply font-heading text-3xl font-normal tracking-tighter md:text-4xl lg:text-4xl;
	}

	:global(.text.h7) {
		@apply font-heading text-2xl font-normal tracking-tighter md:text-3xl lg:text-3xl;
	}

	:global(.text.h8) {
		@apply font-heading text-xl font-normal tracking-tighter md:text-2xl lg:text-2xl;
	}

	:global(.text.h9) {
		@apply font-heading text-lg font-normal tracking-tighter md:text-xl lg:text-xl;
	}

	:global(.text.h10) {
		@apply font-heading text-base font-normal tracking-tighter md:text-lg lg:text-lg;
	}

	:global(.text.h11) {
		@apply font-heading text-sm font-normal tracking-tighter md:text-base lg:text-lg;
	}

	:global(.text.h12) {
		@apply font-heading text-sm font-normal tracking-tighter md:text-base lg:text-base;
	}

	:global(.text.para1) {
		@apply font-body text-xs leading-4 font-normal tracking-normal;
	}

	:global(.text.para2) {
		@apply font-body text-xs leading-5 font-normal tracking-normal md:text-sm md:leading-5;
	}

	:global(.text.para3) {
		@apply font-body text-sm leading-5 font-normal tracking-normal;
	}

	:global(.text.para4) {
		@apply font-body text-sm leading-6 font-normal tracking-normal md:text-base md:leading-6;
	}

	:global(.text.para5) {
		@apply font-body text-base leading-6 font-normal tracking-normal;
	}

	:global(.text.paraBase) {
		@apply font-body text-base leading-7 font-normal tracking-normal md:text-lg md:leading-7;
	}

	:global(.text.para6) {
		@apply font-body text-lg leading-7 font-normal tracking-normal md:text-xl md:leading-7;
	}

	:global(.text.para7) {
		@apply font-body text-xl leading-8 font-normal tracking-normal md:text-2xl md:leading-8;
	}

	:global(.text.para8) {
		@apply font-body text-2xl leading-8 font-normal tracking-normal md:text-3xl md:leading-9 lg:text-3xl lg:leading-10;
	}

	:global(.text.para9) {
		@apply font-body text-3xl leading-9 font-normal tracking-normal md:text-4xl md:leading-9 lg:text-4xl lg:leading-9;
	}

	:global(.text.para10) {
		@apply font-body text-4xl leading-10 font-normal tracking-normal md:text-5xl md:leading-10;
	}

	:global(.text.eyebrow) {
		@apply font-mono text-xs leading-3 font-normal tracking-tight md:text-sm md:leading-4;
	}
</style>
