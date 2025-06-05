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

	const pb_img = {
  "id": "9el584izjui6yo0",
  "type": "image",
  "project": "agi-reflexology",
  "name": "Woman in Distress",
  "slug": "woman-in-distress",
  "folder": "midjourney",
  "tags": [
    "home",
    "massage"
  ],
  "created": "2025-06-04 21:59:47.839Z",
  "updated": "2025-06-05 09:07:17.876Z",
  "image_name": "Woman in Distress",
  "alt_text": "A young woman with long dark hair is standing amidst lush green foliage. She appears to be in distress, with her eyes closed and hands pressed against her temples. Her expression conveys pain or discomfort. The background is softly illuminated, creating a contrast with the vibrant greenery surrounding her.",
  "variants": {
    "lg": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-lg.png",
      "filesize": 349217,
      "format": "png",
      "height": 1024,
      "name": "lg.png",
      "width": 1024
    },
    "md": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-md.png",
      "filesize": 349217,
      "format": "png",
      "height": 1024,
      "name": "md.png",
      "width": 1024
    },
    "original": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-original.png",
      "filesize": 383473,
      "format": "png",
      "height": 1024,
      "name": "original.png",
      "width": 1024
    },
    "sm": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-sm.png",
      "filesize": 206887,
      "format": "png",
      "height": 768,
      "name": "sm.png",
      "width": 768
    },
    "thumbnail": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-thumbnail.webp",
      "filesize": 6086,
      "format": "webp",
      "height": 300,
      "name": "thumbnail.webp",
      "width": 300
    },
    "webp": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-webp.webp",
      "filesize": 72228,
      "format": "webp",
      "height": 1024,
      "name": "webp.webp",
      "width": 1024
    },
    "xs": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-distress-xs.png",
      "filesize": 91692,
      "format": "png",
      "height": 480,
      "name": "xs.png",
      "width": 480
    }
  }
}
</script>

<Section section_id="massage-common-reasons-to-visit" grid_span="centeredSpan3" vertical_padding={9}>
	<Container class="md:flex-row-reverse">
		<div class="aspect-square w-full md:max-w-sm">
			<Image
				record={pb_img}
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
