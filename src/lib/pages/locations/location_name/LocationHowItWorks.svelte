<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	let { how_it_works_section } = $props();
</script>

<Section section_id={how_it_works_section.id} grid_span="centeredSpan3">
	<Container>
		<div class="flex flex-col items-center text-center">
			<Text type="span" style="eyebrow">{how_it_works_section.eyebrow}</Text>
			<Text type="h2" style="h6" class="max-w-lg">{how_it_works_section.title}</Text>
		</div>
		<div class="flex flex-col gap-4 md:gap-6 lg:gap-8">
			{#each how_it_works_section.steps as { eyebrow, title, description, image }}
				<div
				class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] 
				min-h-[26rem] gap-4 md:gap-8 lg:grid-cols-[1.2fr_1fr]"
				>
					<div class="w-full grow aspect-square md:aspect-auto">
                        <Image record={image} brightness={15}
                        imgClass="object-[0%_20%]"></Image>
                    </div>
					<div
						class="flex flex-col gap-2 justify-center h-full md:text-left "
					>
						<div class="">
							<Text style="eyebrow" type="span">{eyebrow}</Text>
							<Text type="h3" style="h6">{title}</Text>
						</div>
                        <Text type="p" style="para4"
                        class="[&_a]:text-primary-500 [&_a]:font-semibold
                        [&_a]:underline [&_a]:hover:text-primary-700 dark:[&_a]:text-primary-400">
                            {@html description}
                        </Text>
					</div>
				</div>
			{/each}
		</div>
        <div class="">
            <Button type="primary" size={4} ariaLabel="View all of my
            treatments" href="/treatments">
                Explore My Treatments
            </Button>
        </div>
	</Container>
</Section>
