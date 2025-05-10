<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import PriceCard from '$lib/components/ui/price-card/PriceCard.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import { price_cards } from '$lib/data/price_cards';
	$inspect(price_cards);
</script>

<Section section_id="homepage-my-services" horizontal_padding={4} grid_span="fullSpan">
	<Container class="">
		<div class="flex w-full flex-col items-center gap-5">
			<div>
				<Text type="span" style="eyebrow">My Services</Text>
				<Text type="h2" style="h6" id="homepage-my-services_heading">What Kind of Support Do You Need?</Text>
			</div>
			<Text type="p" style="paraBase">Choose the kind of support your body’s asking for—each session is tailored to how you feel that day.</Text>
		</div>

		<div class="flex flex-wrap xl:flex-nowrap justify-center gap-4 md:gap-8">
			{#each price_cards as pc}
				<PriceCard {...pc} class=""></PriceCard>
			{/each}
		</div>
	</Container>
</Section>
