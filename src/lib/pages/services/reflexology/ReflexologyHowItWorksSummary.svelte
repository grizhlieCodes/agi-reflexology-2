<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="reflexology-how_it_works-summary" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row md:items-start md:gap-8
		lg:gap-12"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_clean_overhead_image_of_a_pair_of_feet_resting_on_a__b28c85bb-570d-4087-9248-364c924e69e6.webp"
					alt="A person sits on a soft, white textured blanket with legs crossed. Their feet have multicolored, topographic pattern designs on the skin"
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">How It Works</Text>
					<Text type="h2" style="h6" id="reflexology-how_it_works-summary_heading">Tiny Pressure Points That Communicate With Your Whole Body</Text>
				</div>
				<div>
					<Text type="p" style="paraBase">
						Your feet, face, and hands contain dense networks of nerves — and in reflexology, we believe they mirror your whole body. Gentle pressure
						on specific zones can influence connected organs, glands, and systems. It’s like touching a switch that sends a signal inward.
					</Text>
					<Text type="p" style="paraBase">
						This helps your body respond in ways it already knows how: by softening tension, improving circulation, and calming the nervous system so
						healing can begin.
					</Text>
				</div>
			</div>
		</div>
	</Container>
</Section>
