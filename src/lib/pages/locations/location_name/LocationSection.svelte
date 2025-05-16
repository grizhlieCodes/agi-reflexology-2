<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	import type * as SectionTypes from '$lib/components/layout/section/sectionTypes';

	import { locations } from '$lib/data/locations';
	import type { LocationSection } from '$lib/schemas/locationsSchema';
	import { Bolt, Zap } from 'lucide-svelte';

	let {
		location,
		showQuicklinks = false,
		location_name,
		grid_span = 'centeredSpan4'
	}: { location: LocationSection; showQuicklinks?: boolean; grid_span?: SectionTypes.GridSpanType; location_name: string } = $props();

	let stickyClasses = $derived(location.locations.length > 1 ? 'lg:sticky lg:top-[10rem]' : '');

	let cLocation = $derived.by(() => {
		if (!location) return;
		if (location.locationNames.includes('burnham')) {
			return location;
		} else if (location_name === 'chelsea') {
			return location.location_specific_data.chelsea;
		} else if (location_name === 'bayswater') {
			return location.location_specific_data.bayswater;
		} else {
			return location;
		}
	});
</script>

<Section section_id={cLocation.id} {grid_span} class="2xl:px-4 ">
	<Container
		class="w-full max-w-none px-0
		lg:flex-row lg:items-start lg:justify-center"
	>
		<div class="flex h-max flex-col gap-2 md:text-left lg:max-w-lg {stickyClasses}">
			<Text type="h2" style="h6" id="{cLocation.id}_heading">
				{cLocation.title}
			</Text>
			<div class="flex w-full flex-wrap gap-2">
				{#if cLocation?.badges?.available_services}
					{#each cLocation.badges.available_services as { type, Icon, content }}
						<Badge {type}>
							<Icon></Icon>
							<span>{content}</span>
						</Badge>
					{/each}
				{/if}
				{#if cLocation?.badges?.available_days}
					{#each cLocation.badges.available_days as { type, Icon, content }}
						<Badge {type}>
							{#if Icon}
								<Icon></Icon>
							{/if}
							<span>{content}</span>
						</Badge>
					{/each}
				{/if}
			</div>
			<Text type="p" style="paraBase">
				{cLocation.description}
			</Text>
			<div class="mt-4 flex flex-col gap-3 md:flex-row">
				<Button
					size={3}
					type="primary"
					ariaLabel="View my treatments page
            to see which of my services could benefit you"
					href="/treatments"
				>
					Explore My Treatments
				</Button>
				{#if cLocation?.location_button}
					<Button
						size={3}
						type="plain"
						ariaLabel="View my treatments page
                     to see which of my services could benefit you"
						href={cLocation.location_button.href}
					>
						More Detail About This Location
					</Button>
				{/if}
			</div>

			<!-- {#if cLocation?.locations?.length >= 3}
				<div class="mt-6 flex w-full flex-col gap-2">
					<div class="flex items-center gap-1 text-neutral-500">
						<Zap></Zap>
						<Text type="h4" style="para6" class="font-inter">Location Quicklinks</Text>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each cLocation.locations as { location_card }}
							{@const { title, id } = location_card}
							<Button
								type="default_light"
								href="#location-card-{id}"
								size={3}
								ariaLabel="Quick link that scrolls to to
                            the {title} location card">{title}</Button
							>
						{/each}
					</div>
				</div>
			{/if} -->
			<!-- <div></div> -->
		</div>
		<div class="flex w-full grow flex-col gap-6 md:gap-10">
			{#each cLocation?.locations as { location_card, location_page }}
				{#if location_card.id.replaceAll('_', '-') === location_name}
					<!-- content here -->
					<div
						id="location-card-{location_card.id}"
						class="flex w-full flex-col overflow-hidden rounded-xl border
					 border-neutral-200 dark:border-neutral-800"
					>
						<div class=" flex flex-col gap-3 p-4">
							<div class="flex flex-wrap justify-between gap-2">
								<div class="flex grow-0 gap-2">
									{#each location_card.badges.location_badge as { type, Icon, content }}
										<Badge {type}>
											{#if Icon}
												<Icon></Icon>
											{/if}
											{content}
										</Badge>
									{/each}
								</div>
								<div class="flex grow-0 flex-wrap gap-2">
									{#each location_card.badges.day_badges as { type, Icon, content }}
										<Badge {type}>
											{#if Icon}
												<Icon></Icon>
											{/if}
											{content}
										</Badge>
									{/each}
								</div>
							</div>
							<div class="text-left">
								<Text type="h4" style="h8">{location_card.title}</Text>
								<Text type="p" style="paraBase">{location_card.description}</Text>
							</div>
							<Button
								type="outline"
								size={4}
								href={location_card.button_href}
								ariaLabel="Visit this
                        page to learn more about {location_card.title}"
								class="w-max"
							>
								More Detail About This Location
							</Button>
						</div>
						<div class="w-full border-t border-neutral-200 dark:border-neutral-800">
							<iframe
								title="Embedded google map with the details of
                            the {location_card.title} location "
								class="w-full
                            border border-neutral-900"
								src={location_card.mapIframeSource}
								width="600"
								height="450"
								style="border:0;"
								allowfullscreen
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</Container>
</Section>
