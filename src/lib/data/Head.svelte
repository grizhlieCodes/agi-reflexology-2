<script lang="ts">
	import { page } from '$app/state';

	let {
		title = 'Agi Reflexology - Experience Deep Relief & Reconnect With Your Body',
		description = 'I use my intuitive reflexology-massage techniques to guide your body toward a deep release and natural balance. In a healing and peaceful environment, I help you let go of tension patterns that prevent you from experiencing true bodily peace. Based in Burnham, UK.'
	} = $props();

	const fullLink = $derived(`https://www.agireflexology.com${page.url.pathname}`);

	const openGraph = $derived([
		{
			property: 'og:type',
			content: 'website'
		},
		{
			property: 'og:title',
			content: title
		},
		{
			property: 'og:image',
			content: 'https://seerstudio.b-cdn.net/image-tests/social-media-img.webp'
		},
		{
			property: 'og:image:width',
			content: '1200'
		},
		{
			property: 'og:image:height',
			content: '630'
		},
		{
			property: 'og:description',
			content: description
		},
		{
			property: 'og:url',
			content: fullLink
		},
		{
			property: 'og:site_name',
			content: title
		}
	]);
</script>

<svelte:head>
	<title>{title}</title>
	<!-- ROBOTS -->
	<meta name="googlebot" content="all" />
	<meta name="robots" content="all" />

	<!-- Icons -->
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png" />

	<!-- OTher -->
	<meta name="description" content={description} />
	<link rel="canonical" href={fullLink} />

	<!-- OPEN GRAPH -->
	{#each openGraph as { property, content }}
		<meta {property} {content} />
	{/each}
</svelte:head>
