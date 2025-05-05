<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import type { TextTypes, TextStyles } from '$lib/schemas/components/textTypes';
	import { styles } from './styles/textStyles';

	let { children, type, style, class: className, id, ...restProps }: { children: any; type: TextTypes; style: TextStyles; class?: string; id?: string } = $props();

	let styling = $derived(cn(styles[style], className));
</script>

<svelte:element this={type} {id} class={styling} {...restProps}>
	{@render children()}
</svelte:element>
