<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import Text from '../ui/Text.svelte';
	import LogoSvg from './LogoSvg.svelte';
	let {
		logo_type,
		content,
		linkClass,
		textClass
	}: { logo_type: 'icon_text' | 'icon_only' | 'text_only'; content: string; linkClass: string; textClass: string } = $props();

	const LINK_BASE_STYLES = 'group flex items-center gap-2';
	const TEXT_BASE_STYLES = 'text-(--header-logo) dark:text-(--header-logo-dark) font-semibold group-hover:underline';

	let linkStyles = $derived(cn(LINK_BASE_STYLES, linkClass));
	let textStyles = $derived(cn(TEXT_BASE_STYLES, textClass));
</script>

{#if logo_type === 'icon_text'}
	<a href="/" class={linkStyles}>
		<LogoSvg size="size-10 lg:block" fill="fill-(--header-logo) dark:fill-(--header-logo-dark)"></LogoSvg>
		<Text type="span" style="h9" class={textStyles}>
			{content}
		</Text>
	</a>
{:else if logo_type === 'icon_only'}
	<a href="/">
		<LogoSvg size="size-10"></LogoSvg>
	</a>
{:else if logo_type === 'text_only'}
	<a href="/">
		<Text type="span" style="para3">
			{content}
		</Text>
	</a>
{/if}
