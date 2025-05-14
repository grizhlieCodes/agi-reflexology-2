<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import Leaf from 'lucide-svelte/icons/leaf';

	const APPROACH_LIST = [
		'You’re feeling stuck in cycles of tension, fatigue, or overwhelm',
		'You’ve tried other things and still don’t feel quite right',
		'You’re seeking natural support for your hormones, digestion, or mood',
		'You just want space to breathe, reset, and come back to yourself'
	];
</script>

<Section
	section_id="reflexology-right-for-me"
	horizontal_padding={4}
	vertical_padding={8}
	grid_span="fullSpan"
	background_color="primary-50"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_realistic_photo_of_a_man_walking_barefoot_along_a_qu_362dcec9-3e88-447f-86a3-9c6a365f0b2c.webp"
					alt="A man with short hair walks barefoot along a sunlit, forested path surrounded by lush ferns and tall trees. Sunlight filters through the leaves, creating a serene and peaceful atmosphere."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">Common Reasons People Try Reflexology</Text>
					<Text type="h2" style="h6" id="reflexology-right-for-me_heading" class="max-w-xl">
						Support for Stress, Hormones, Digestion, and More
					</Text>
				</div>
				<Text type="p" style="paraBase">
					People often try reflexology after dealing with tension, irregular cycles, sleep issues, or unexplained aches. Even if the symptoms are hard
					to describe, reflexology works by calming the nervous system — which can improve how your whole body functions and feels.
				</Text>
				<!-- Turn this into a list comp -->
				<DecoratedList item_list={APPROACH_LIST} Icon={Leaf}></DecoratedList>
			</div>
		</div>
	</Container>
</Section>
