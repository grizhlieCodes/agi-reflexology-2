<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="science-behind-reflexology" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row md:gap-8
		lg:gap-12"
		>
			<div class="aspect-square w-full max-w-md -scale-x-100 md:min-w-sm lg:min-w-md">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_close-up_of_a_persons_hands_resting_on_their_stomach_cee5c270-9db6-4488-8c6d-88b9ba8e54f7.webp"
					alt="A person lying down with eyes closed, enveloped in soft,
				warm-toned lighting. They are wearing a loose, light-colored
				shirt, with hands resting on their abdomen. The lighting casts
				colorful patterns across the fabric, suggesting a tranquil and
				serene atmosphere."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Science Behind the Calm</Text>
					<Text type="h2" style="h6" id="science-behind-reflexology_heading">Why Reflexology Helps When Stress or Overwhelm Don’t Shift</Text>
				</div>
				<div>
					<Text type="p" style="paraBase">
						Many of the symptoms people bring to reflexology — tension, trouble sleeping, digestive issues, irregular cycles — are connected to the
						nervous system being out of balance. Reflexology helps activate the parasympathetic (rest-and-restore) state, which allows your body to
						slow down, rebalance, and reset itself.
					</Text>
					<Text type="p" style="paraBase">
						When your system feels safe, everything works a little better: from hormones and sleep to digestion and emotional regulation.
					</Text>
				</div>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={3} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={3} type="plain" href="/treatments" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
	</Container>
</Section>
