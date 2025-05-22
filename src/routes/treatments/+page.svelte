<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import PriceCard from '$lib/components/ui/price-card/PriceCard.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import Location from '$lib/pages/treatments/Location.svelte';
	import LocationType from '$lib/pages/treatments/LocationType.svelte';
	import TreatmentType from '$lib/pages/treatments/TreatmentType.svelte';
	import BodyPart from '$lib/pages/treatments/BodyPart.svelte';
	import Duration from '$lib/pages/treatments/Duration.svelte';

	import { flip } from 'svelte/animate';

	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
			};
		}
	});

	import { slide } from 'svelte/transition';

	import { t } from '$lib/stores/treatments.svelte';
	import Days from '$lib/pages/treatments/Days.svelte';

	$inspect(t.aval_days);
</script>

<Section
	section_id="homepage-my-services"
	horizontal_padding={4}
	vertical_padding={12}
	grid_span="fullSpan"
>
	<Container class="">
		<!-- !Header -->
		<div class="flex w-full flex-col items-center gap-5">
			<div>
				<Text type="span" style="eyebrow">My Services</Text>
				<Text type="h2" style="h4" id="homepage-my-services_heading">My Treatments</Text>
			</div>
			<div>
				<Text type="p" style="paraBase">Please view the treatments I offer.</Text>
				<Text type="p" style="paraBase"
					>Every link will take you to a corresponding Fresha link for the service.</Text
				>
			</div>
		</div>

		<!-- ! Navigation -->
		<div class="flex flex-col items-center gap-3">
			<div class="flex flex-col items-center gap-3">
				<LocationType></LocationType>

				<div class="flex items-center gap-3">
					<Location></Location>
					<TreatmentType />
					<BodyPart />
					<Duration />
					<Days></Days>
				</div>
			</div>
			<!--
			{#if locationSelectionDisabled}
				<div transition:slide={{ duration: 400, axis: 'y' }} class="max-w-4xl">
					<Text type="p" style="paraBase">
						I am able to provide my reflexology services in the following areas (close proximity to
						Burnham):
					</Text>
					<Text type="span" style="paraBase" class="font-medium">
						{#each ['Beaconsfield', 'Bisham', 'Bourne End', 'Cookham', 'Farnham Common', 'Forty Green', 'Hedgerley', 'Maidenhead', 'Marlow', 'Penn', 'Stoke Poges', 'Taplow', 'Woodburn Green'] as loc}
							{@const href = `/locations/home-visit/${loc.toLowerCase().replaceAll(' ', '_')}`}
							<a {href} class="hover:underline">
								{loc},&nbsp;
							</a>
						{/each}
					</Text>
				</div>
			{/if}
		</div> -->

			<!-- ! Price Cards -->
			<div class="flex flex-wrap justify-center gap-4 md:gap-8 xl:grid xl:grid-cols-3">
				{#each t.aval_price_cards as pc (pc.id)}
					<div
						in:receive={{ key: pc.id }}
						out:send={{ key: pc.id }}
						animate:flip={{ duration: 200 }}
					>
						<PriceCard {...pc} class=""></PriceCard>
					</div>
				{/each}
			</div>
		</div>
	</Container>
</Section>
