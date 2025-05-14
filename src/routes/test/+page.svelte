<script>
	import Text from '$lib/components/ui/Text.svelte';
	import Section from './Section.svelte';
</script>

<div class="grid min-h-screen w-full place-items-center bg-blue-950">
	<Section type="2col-1_2split">
		<div>I am children, HUSSAIN!</div>

		{#snippet left()}
			<Text type="h1" style="h4">HELLO</Text>
		{/snippet}

		{#snippet right()}
			<div>I am right!!</div>
		{/snippet}
	</Section>
</div>
