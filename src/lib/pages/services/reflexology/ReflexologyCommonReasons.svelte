<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import Leaf from 'lucide-svelte/icons/leaf';

	const APPROACH_LIST = [
		'Nervous tension or ongoing stress',
		'Hormonal changes or irregular cycles',
		'Trouble sleeping or staying asleep',
		'Digestive discomfort or bloating',
		'General fatigue or feeling out of sync'
	];
</script>

<Section section_id="reflexology-common-reasons-for-trying" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_realistic_overhead_photo_of_a_relaxed_human_figure_b5d624df-7652-48a1-9c34-0d8f3c008995_1.webp"
					alt="A woman lying on her back on a white sheet, eyes closed, wearing light-colored, comfortable clothes. A soft, glowing rainbow-like pattern surrounds her, suggesting relaxation or a meditative state. The setting conveys calm and tranquility."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">Common Reasons People Try Reflexology</Text>
					<Text type="h2" style="h6" id="reflexology-common-reasons-for-trying_heading" class="max-w-xl">
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
