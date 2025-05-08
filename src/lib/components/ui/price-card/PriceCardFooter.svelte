<script>
	import Button from '$lib/components/ui-interactive/Button.svelte';

	let { button } = $props();
</script>

<footer class="mt-2 w-full">
	<Button
		type="outline"
		size={5}
		ariaLabel="Go to the fresha page with
        this treatment"
		href={button.href}
		class="w-full rounded-lg !bg-white hover:!bg-neutral-200
	dark:!border-neutral-800 dark:!bg-neutral-950 dark:hover:!bg-neutral-900"
	>
		{button.content}
	</Button>
</footer>
