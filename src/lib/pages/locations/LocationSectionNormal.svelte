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
		grid_span = 'centeredSpan4'
	}: { location: LocationSection; showQuicklinks?: boolean; grid_span?: SectionTypes.GridSpanType } = $props();

	let stickyClasses = $derived(location.locations.length > 1 ? 'lg:sticky lg:top-[10rem]' : '');
</script>

<Section section_id={location.id} {grid_span} class="2xl:px-4 ">
	<Container
		class="w-full max-w-none px-0
		lg:flex-row lg:items-start lg:justify-center"
	>
		<div class="flex h-max flex-col gap-2 md:text-left lg:max-w-lg {stickyClasses}">
			<Text type="h2" style="h6" id="{location.id}_heading">
				{location.title}
			</Text>
			<div class="flex w-full flex-wrap gap-2">
				{#each location.badges.available_services as { type, Icon, content }}
					<Badge {type}>
						<Icon></Icon>
						<span>{content}</span>
					</Badge>
				{/each}
				{#each location.badges.available_days as { type, Icon, content }}
					<Badge {type}>
						{#if Icon}
							<Icon></Icon>
						{/if}
						<span>{content}</span>
					</Badge>
				{/each}
			</div>
			<Text type="p" style="paraBase">
				{location.description}
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
				{#if location?.location_button}
					<Button
						size={3}
						type="plain"
						ariaLabel="View my treatments page
                     to see which of my services could benefit you"
						href={location.location_button.href}
					>
						More Detail About This Location
					</Button>
				{/if}
			</div>

			{#if location?.locations?.length >= 3}
				<div class="mt-6 flex w-full flex-col gap-2">
					<div class="flex items-center gap-1 text-neutral-500">
						<Zap></Zap>
						<Text type="h4" style="para6" class="font-inter">Location Quicklinks</Text>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each location.locations as { location_card }}
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
			{/if}
			<div></div>
		</div>
		<div class="flex w-full grow flex-col gap-6 md:gap-10">
			{#each location?.locations as { location_card, location_page }}
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
			{/each}
		</div>
	</Container>
</Section>
