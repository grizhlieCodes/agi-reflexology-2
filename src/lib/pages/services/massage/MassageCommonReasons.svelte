<script>
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import { Leaf } from 'lucide-svelte';

	const list_items = [
		'Chronic tension in the back, shoulders, or neck',
		'Tired legs or heavy limbs from standing or walking',
		'Hormonal imbalances or emotional fatigue',
		'Nervous system overload — feeling wired or burnt out',
		'A need to soften, feel safe, and breathe again'
	];
</script>

<Section section_id="massage-common-reasons-to-visit" grid_span="centeredSpan3" vertical_padding={9}>
	<Container class="md:flex-row-reverse">
		<div class="aspect-square w-full md:max-w-sm">
			<Image
				src="https://seerstudio.b-cdn.net/image-tests/grizhlie_httpss.mj.run00UXohO79Rk_Realistic_photo_of_a_woman__b77ff3f5-0c8c-4050-a58a-1d2c4a2c6d5d_2.webp"
				alt="A woman stands in a green leafy environment, her eyes closed in discomfort. She holds her hands to her temples, and there is a red glow around her neck, suggesting pain or tension."
			></Image>
		</div>
		<div
			class="flex grow flex-col items-center gap-2 md:items-start
		md:gap-4 md:text-left"
		>
			<div>
				<Text type="span" style="eyebrow">Common Reasons Clients Come to Me</Text>
				<Text type="h1" style="h6" id="massage-common-reasons-to-visit_heading">You Hold More Than Just Tension</Text>
			</div>
			<Text type="p" style="paraBase">
				Massage can help with more than physical knots. When we’re overwhelmed or emotionally stretched, our bodies often hold on — in the shoulders,
				jaw, hips, or even the breath. These treatments are designed for people who are tired of pushing through and want a gentler way to feel
				better.
			</Text>
			<div>
				<DecoratedList Icon={Leaf} item_list={list_items}></DecoratedList>
			</div>
		</div>
	</Container>
</Section>
