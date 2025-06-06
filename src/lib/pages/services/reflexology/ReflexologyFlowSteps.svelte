<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
  "id": "i6n8zvd7q0cfzif",
  "type": "image",
  "project": "agi-reflexology",
  "name": "Ethereal Human Form",
  "slug": "ethereal-human-form",
  "folder": "midjourney",
  "tags": [
    "reflexology"
  ],
  "created": "2025-06-04 21:59:38.228Z",
  "updated": "2025-06-05 09:06:18.142Z",
  "image_name": "Ethereal Human Form",
  "alt_text": "A translucent, ethereal representation of a human figure walking forward. The figure is surrounded by vibrant, swirling colors and light, suggesting energy and life. The body appears to be made of light, with intricate patterns and glowing elements, particularly around the chest area, which radiates a bright, luminous energy. The background is softly blurred, enhancing the focus on the figure, while wisps of light extend outward, creating a sense of movement and vitality.",
  "variants": {
    "lg": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-lg.png",
      "filesize": 2209105,
      "format": "png",
      "height": 2688,
      "name": "lg.png",
      "width": 1792
    },
    "md": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-md.png",
      "filesize": 1174469,
      "format": "png",
      "height": 1920,
      "name": "md.png",
      "width": 1280
    },
    "original": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-original.png",
      "filesize": 2209105,
      "format": "png",
      "height": 2688,
      "name": "original.png",
      "width": 1792
    },
    "sm": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-sm.png",
      "filesize": 437570,
      "format": "png",
      "height": 1152,
      "name": "sm.png",
      "width": 768
    },
    "thumbnail": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-thumbnail.webp",
      "filesize": 4114,
      "format": "webp",
      "height": 300,
      "name": "thumbnail.webp",
      "width": 300
    },
    "webp": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-webp.webp",
      "filesize": 436072,
      "format": "webp",
      "height": 2688,
      "name": "webp.webp",
      "width": 1792
    },
    "xs": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/ethereal-human-form-xs.png",
      "filesize": 183345,
      "format": "png",
      "height": 720,
      "name": "xs.png",
      "width": 480
    }
  }
}
</script>

<Section section_id="reflexology-flow-steps" horizontal_padding={4} vertical_padding={8} grid_span="centeredSpan2">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full max-w-3xl flex-col items-center gap-4
		md:flex-row-reverse md:items-start"
		>
			<div
				class="flex flex-col items-center gap-4 text-center
            md:gap-5"
			>
				<div>
					<Text type="span" style="eyebrow">The Reflexology Flow, Step by Step</Text>
					<Text type="h2" style="h6" id="reflexology-flow-steps_heading">A Gentle Way to Help the Body Rebalance Itself</Text>
				</div>
				<Text type="p" style="paraBase">
					Reflexology supports your body by calming the nervous system and restoring internal balance — without needing to touch the problem area
					directly. Here’s how it works in simple steps:
				</Text>
			</div>
		</div>
		<div
			class="flex w-full max-w-3xl flex-col items-center gap-8 md:flex-row md:items-stretch
		supports-[display:grid]:md:grid supports-[display:grid]:md:grid-cols-[5fr_4fr]"
		>
			<div class="aspect-[2/3] w-full max-w-sm md:aspect-[unset] md:max-w-none">
				<Image
					record={pb_img}
				></Image>
			</div>
			<div class="flex w-full flex-col items-center gap-4">
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">1. Signals Start at the Feet</Text>
					<Text type="p" style="para3"
						>Specific points on your feet (or hands/face) are gently stimulated — each linked to internal organs, systems, or glands.</Text
					>
				</BasicCard>
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">2. Your Nervous System Picks It Up</Text>
					<Text type="p" style="para3"
						>This stimulation sends a signal through nerve pathways and the spinal cord, inviting the body to relax and shift into rest-and-repair
						mode.</Text
					>
				</BasicCard>
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">3. Balance Begins to Return</Text>
					<Text type="p" style="para3"
						>As tension melts and circulation improves, your body’s natural rhythms begin to restore — from digestion to hormones and sleep.</Text
					>
				</BasicCard>
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">4. You Feel the Shift</Text>
					<Text type="p" style="para3"
						>Clients often leave sessions feeling lighter, clearer, and more at ease — because the body has been gently nudged back into balance.</Text
					>
				</BasicCard>
			</div>
		</div>
		<Text
			type="p"
			style="eyebrow"
			class="w-full max-w-3xl text-xl
		text-neutral-500 md:text-2xl dark:text-neutral-400"
		>
			And that’s it. Reflexology works because it enables the body to repair itself. It activates self-healing.
		</Text>
	</Container>
</Section>
