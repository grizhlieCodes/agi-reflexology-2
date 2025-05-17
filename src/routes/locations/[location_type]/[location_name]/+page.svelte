<script lang="ts">
	import LocationFaq from '$lib/pages/locations/location_name/LocationFaq.svelte';
	import LocationHero from '$lib/pages/locations/location_name/LocationHero.svelte';
	import LocationHowItWorks from '$lib/pages/locations/location_name/LocationHowItWorks.svelte';
	import LocationSection from '$lib/pages/locations/location_name/LocationSection.svelte';
	import PageCta from '$lib/pages/shared/PageCta.svelte';

	let { data }: { data: any } = $props();
	let { hero_section, how_it_works_section } = $derived(data.pageData.location_page);
</script>

<LocationHero {hero_section}></LocationHero>
<LocationHowItWorks {how_it_works_section}></LocationHowItWorks>
<LocationSection location={data.pageSection[0]} location_name={data.location} grid_span="centeredSpan3"></LocationSection>
<LocationFaq faqs={data.pageData.faqs}></LocationFaq>
<PageCta></PageCta>