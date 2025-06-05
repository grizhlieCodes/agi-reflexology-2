<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import type { LocationPageHeroSection } from '$lib/schemas/locationsSchema';
	let { hero_section }: { hero_section: LocationPageHeroSection } = $props();
</script>

<Section
	section_id={hero_section.id}
	grid_span="fullSpan"
	vertical_padding={16}
	class=" items-center justify-center"
	horizontal_padding={6}
>
	<Container>
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row
		md:gap-10 lg:gap-12 {hero_section?.image ? `md:text-left` : ``}"
		>
			<div class:items-center={!hero_section?.image} class="flex w-full grow flex-col gap-6">
				<Text type="h1" style="h4">{hero_section.title}</Text>
				<Text type="p" style="paraBase">{hero_section.description}</Text>
				<div class:justify-center={!hero_section?.image} class="flex max-w-md flex-wrap gap-2">
					{#each hero_section.badges.available_services as { type, Icon, content }}
						<Badge {type}>
							{#if Icon}
								<Icon></Icon>
							{/if}
							<span>{content}</span>
						</Badge>
					{/each}
					{#each hero_section.badges.location as { type, Icon, content }}
						<Badge {type}>
							{#if Icon}
								<Icon></Icon>
							{/if}
							<span>{content}</span>
						</Badge>
					{/each}

					{#each hero_section.badges.available_days as { type, Icon, content }}
						<Badge {type}>
							{#if Icon}
								<Icon></Icon>
							{/if}
							<span>{content}</span>
						</Badge>
					{/each}
				</div>
				<div class="mt-4 flex flex-wrap gap-2 md:mt-6">
					<Button
						type="primary"
						size={3}
						ariaLabel={hero_section.buttons.primary.aria_label}
						href={hero_section.buttons.primary.href}
					>
						{hero_section.buttons.primary.content}
					</Button>
					<Button
						type="plain"
						size={3}
						ariaLabel={hero_section.buttons.secondary.aria_label}
						href={hero_section.buttons.secondary.href}
					>
						{hero_section.buttons.secondary.content}
					</Button>
				</div>
			</div>
			{#if hero_section?.image}
				<div class="aspect-[3/4] w-full max-w-sm grow">
					<Image record={hero_section?.image}></Image>
				</div>
			{/if}
		</div>
	</Container>
</Section>
