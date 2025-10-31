<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import InlineLink from '$lib/components/ui-interactive/InlineLink.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import * as faqs from '$lib/data/faqs/faqs';
	import PageCta from '$lib/pages/shared/PageCta.svelte';

	let faq_sections = [
		{
			id: 'common-questions',
			title: 'General Questions I Get Often',
			faqs: faqs.homepage_faqs
		},
		{
			id: 'working-with-me-questions',
			title: 'Working With Me',
			faqs: faqs.about_faqs
		},
		{
			id: 'booking-questions',
			title: 'Booking + Choosing Treatments',
			faqs: faqs.services_faqs
		},
		{
			id: 'reflexology-questions',
			title: 'Reflexology Questions',
			faqs: faqs.reflexology_faqs
		},
		// {
		// 	id: 'massage-questions',
		// 	title: 'Massage Queries',
		// 	faqs: faqs.massage_faqs
		// },
		{
			id: 'location-questions',
			title: 'Location Queries',
			faqs: faqs.locations_faqs
		}
	];
</script>

<Section
	section_id="faq-hero"
	grid_span="fullSpan"
	gap={4}
	vertical_padding={14}
	class="bg-primary-50 items-center justify-center py-36 lg:py-40 lg:pb-32"
	horizontal_padding={6}
>
	<Container class="">
		<div class="flex flex-col items-center gap-3 text-center">
			<div>
				<Text type="span" style="eyebrow">Find Out More</Text>
				<Text id="services-hero_heading" type="h1" style="h5" class="max-w-4xl font-[450]">
					Frequently Asked Questions
				</Text>
			</div>
			<Text type="p" style="paraBase" class="max-w-2xl text-neutral-500 dark:text-neutral-400">
				If you’re confused about something, chances are I have covered it in these FAQ questions
				that have been separated by categories.
			</Text>
		</div>
		<div class="flex flex-col flex-wrap gap-3 lg:flex-row lg:flex-nowrap">
			<Button
				size={3}
				type="primary"
				ariaLabel="View my treatments page to see which of my services could benefit you"
				href="/treatments"
				class="min-w-max"
			>
				Explore My Treatments
			</Button>
			<Button
				size={3}
				type="plain"
				ariaLabel="View the locations that I
			offer my services in"
				href="/reflexology"
				class="min-w-max"
			>
				How Reflexology Works
			</Button>
		</div>
	</Container>
</Section>

{#if faq_sections && faq_sections.length > 0}
	{#each faq_sections as { id, title, faqs }}
		<Section
			section_id={id}
			horizontal_padding={4}
			grid_span="centeredSpan1"
			class="justify-center"
			vertical_padding={8}
		>
			<Container class="justify-center gap-10 md:gap-16 lg:gap-20">
				<div
					class="flex w-full flex-col items-center gap-4 text-center
            md:items-start md:gap-5 md:text-left lg:col-start-1 lg:row-start-1"
				>
					<div>
						<Text type="h2" style="h6" id="{id}_heading">{title}</Text>
					</div>
					<div class="mt-4 w-full overflow-hidden rounded-xl md:mt-6">
						<Accordion items={faqs} styleType="level-1-primary" type="single"></Accordion>
					</div>
				</div>
			</Container>
		</Section>
	{/each}
{/if}

<PageCta></PageCta>