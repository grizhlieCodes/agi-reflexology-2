<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import Leaf from 'lucide-svelte/icons/leaf';

	const pb_img = {
  "id": "iv4mk90m6nmar2o",
  "type": "image",
  "project": "agi-reflexology",
  "name": "Woman in Forest",
  "slug": "woman-in-forest",
  "folder": "photographs",
  "tags": [
    "about"
  ],
  "created": "2025-06-04 21:36:47.913Z",
  "updated": "2025-06-05 09:04:48.421Z",
  "image_name": "Woman in Forest",
  "alt_text": "A woman with medium-length brown hair sits in a forest, looking directly at the camera. She has a thoughtful expression and is wearing a gray top with a decorative pattern. Her left arm is raised, resting on her shoulder, and is adorned with colorful tattoos, including a green bird and fern leaves. The background features tall trees and soft, dappled sunlight filtering through the foliage, creating a serene and natural atmosphere.",
  "variants": {
    "lg": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-lg.jpeg",
      "filesize": 2210314,
      "format": "jpeg",
      "height": 2560,
      "name": "lg.jpeg",
      "width": 1920
    },
    "md": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-md.jpeg",
      "filesize": 1037884,
      "format": "jpeg",
      "height": 1707,
      "name": "md.jpeg",
      "width": 1280
    },
    "original": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-original.jpeg",
      "filesize": 3117551,
      "format": "jpeg",
      "height": 3088,
      "name": "original.jpeg",
      "width": 2316
    },
    "sm": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-sm.jpeg",
      "filesize": 409741,
      "format": "jpeg",
      "height": 1024,
      "name": "sm.jpeg",
      "width": 768
    },
    "thumbnail": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-thumbnail.webp",
      "filesize": 6070,
      "format": "webp",
      "height": 300,
      "name": "thumbnail.webp",
      "width": 300
    },
    "webp": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-webp.webp",
      "filesize": 499188,
      "format": "webp",
      "height": 3088,
      "name": "webp.webp",
      "width": 2316
    },
    "xs": {
      "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/woman-in-forest-xs.jpeg",
      "filesize": 176066,
      "format": "jpeg",
      "height": 640,
      "name": "xs.jpeg",
      "width": 480
    }
  }
}

	const APPROACH_LIST = [
		'Gentle, focused touch supports your body’s natural healing flow',
		'Each session adapts to how your body and energy feel that day',
		'Soothing pressure helps ease tension and calm your whole system',
		'Treatments move slowly, giving space to soften and fully let go',
		'Clients often feel lasting shifts in sleep, stress, and balance'
	];
</script>

<Section section_id="about-more-about-me" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col-reverse items-center gap-6 md:flex-row-reverse
		md:items-center lg:gap-10"
		>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-3 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">More About Me</Text>
					<Text type="h2" style="h6" id="about-more-about-me_heading">A Personal Note</Text>
				</div>
				<Text type="p" style="paraBase">
					I’m most at home in nature — walking through forests, sitting by rivers, being around animals. That same grounded presence shapes the way I
					work.
				</Text>
				<Text type="p" style="paraBase">
					Healing, for me, isn’t mystical. It’s natural. It’s already in you. I’m just here to hold space while your body does what it’s always known
					how to do.
				</Text>
			</div>

			<div class="aspect-square w-full max-w-sm md:max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					record={pb_img}
				></Image>
			</div>
		</div>
	</Container>
</Section>
