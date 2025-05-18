<script lang="ts">
	import Badge from '$lib/components/ui/Badge.svelte';
	import { fly } from 'svelte/transition';
	let { badges } = $props();
</script>

<div
	transition:fly={{ y: 5, duration: 150 }}
	class="absolute top-0 left-0 flex w-full -translate-y-[112%]
flex-row flex-wrap gap-1 rounded-xl border border-neutral-200 bg-neutral-50 p-4
transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-950"
>
	{#each badges as badge}
		<Badge type={badge.type}>
			{#if badge.Icon}
				<badge.Icon />
			{/if}
			<span>
				{badge.content}
			</span>
		</Badge>
	{/each}
</div>
