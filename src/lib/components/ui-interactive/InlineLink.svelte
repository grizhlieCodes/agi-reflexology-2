<script lang="ts">
	import { cn } from '$lib/scripts/utils';

	let { children, href, ariaLabel, class: className }: { children: any; href: string; ariaLabel?: string; class?: string } = $props();

	let BASE_STYLES = `text-primary-500 hover:text-primary-700 outline-primary-400
                    font-semibold outline-0 outline-offset-2
                    transition-all duration-300 focus-within:outline-1 hover:underline dark:text-primary-300 dark:hover:text-primary-200 dark:focus-within:text-primary-200 dark:focus-within:outline-primary-500 rounded-md`;

	let styles = $derived(cn(BASE_STYLES, className));
</script>

<a {href} aria-label={ariaLabel} class={styles}>{@render children?.()}</a>
