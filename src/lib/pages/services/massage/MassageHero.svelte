<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section
	section_id="massage-hero"
	grid_span="fullSpan"
	vertical_padding={12}
	class=" items-center justify-center"
	horizontal_padding={6}
	background_color="primary-50"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row-reverse
		md:items-center md:gap-10 lg:gap-12"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:min-w-md">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_calming_spa-like_still_life_scene_in_a_white_room_wi_d3f36483-5ae4-48bb-987d-56e489211c72.webp"
					alt="A serene spa scene featuring rolled white towels, a bottle of essential oil, smooth stones, and a bundle of lavender, set against a backdrop of lush green ferns with gentle natural light."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Massage Practice</Text>
					<Text type="h2" style="h5" id="massage-hero_heading">
						Intuitive Massage to Help You Feel More at Ease in Your Body
					</Text>
				</div>
				<Text type="p" style="paraBase">
					I offer massage sessions designed to gently release tension, soften tight muscles, and bring your whole body into a state of calm. Whether you’re carrying physical aches or emotional fatigue, my approach is slow, grounding, and responsive — tailored to how you feel that day.
				</Text>

				<div class="mt-2 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/treatments" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
	</Container>
</Section>
