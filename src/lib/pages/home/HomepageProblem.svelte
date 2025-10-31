<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

const records = {
  "woman_in_distress": {
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
  },
  "green_refresh_icon": {
    "id": "591t95qf9741582",
    "type": "image",
    "project": "agi-reflexology",
    "name": "Green Refresh Icon",
    "slug": "green-refresh-icon",
    "folder": "chatgpt-icon",
    "tags": [
      "home"
    ],
    "created": "2025-06-04 21:40:41.156Z",
    "updated": "2025-06-05 08:54:37.451Z",
    "image_name": "Green Refresh Icon",
    "alt_text": "A stylized green refresh icon featuring a circular arrow. The arrow curves around to the right, indicating a continuous loop or refresh action. The icon has a glossy finish and a soft glow effect, set against a light gradient background that transitions from white to a pale green.",
    "variants": {
      "lg": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-lg.png",
        "filesize": 58105,
        "format": "png",
        "height": 1024,
        "name": "lg.png",
        "width": 1024
      },
      "md": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-md.png",
        "filesize": 58105,
        "format": "png",
        "height": 1024,
        "name": "md.png",
        "width": 1024
      },
      "original": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-original.png",
        "filesize": 78442,
        "format": "png",
        "height": 1024,
        "name": "original.png",
        "width": 1024
      },
      "sm": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-sm.png",
        "filesize": 30708,
        "format": "png",
        "height": 768,
        "name": "sm.png",
        "width": 768
      },
      "thumbnail": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-thumbnail.webp",
        "filesize": 10308,
        "format": "webp",
        "height": 300,
        "name": "thumbnail.webp",
        "width": 300
      },
      "webp": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-webp.webp",
        "filesize": 73580,
        "format": "webp",
        "height": 1024,
        "name": "webp.webp",
        "width": 1024
      },
      "xs": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-refresh-icon-xs.png",
        "filesize": 12405,
        "format": "png",
        "height": 480,
        "name": "xs.png",
        "width": 480
      }
    }
  },
  "green_battery_icon": {
    "id": "d8lau557nbbhlq6",
    "type": "image",
    "project": "agi-reflexology",
    "name": "Green Battery Icon",
    "slug": "green-battery-icon",
    "folder": "chatgpt-icon",
    "tags": [
      "home"
    ],
    "created": "2025-06-04 21:40:40.467Z",
    "updated": "2025-06-05 08:54:37.797Z",
    "image_name": "Green Battery Icon",
    "alt_text": "A stylized green battery icon with a rounded top and a flat base. The battery has a smooth, glossy finish and features a small rectangular label at the bottom, which is white. The background is a soft gradient of dark green, enhancing the battery's appearance.",
    "variants": {
      "lg": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-lg.png",
        "filesize": 130315,
        "format": "png",
        "height": 1024,
        "name": "lg.png",
        "width": 1024
      },
      "md": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-md.png",
        "filesize": 130315,
        "format": "png",
        "height": 1024,
        "name": "md.png",
        "width": 1024
      },
      "original": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-original.png",
        "filesize": 167292,
        "format": "png",
        "height": 1024,
        "name": "original.png",
        "width": 1024
      },
      "sm": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-sm.png",
        "filesize": 62972,
        "format": "png",
        "height": 768,
        "name": "sm.png",
        "width": 768
      },
      "thumbnail": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-thumbnail.webp",
        "filesize": 10076,
        "format": "webp",
        "height": 300,
        "name": "thumbnail.webp",
        "width": 300
      },
      "webp": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-webp.webp",
        "filesize": 114100,
        "format": "webp",
        "height": 1024,
        "name": "webp.webp",
        "width": 1024
      },
      "xs": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-battery-icon-xs.png",
        "filesize": 21395,
        "format": "png",
        "height": 480,
        "name": "xs.png",
        "width": 480
      }
    }
  },
  "green_clock_jar": {
    "id": "k6s7cvkf89utj9v",
    "type": "image",
    "project": "agi-reflexology",
    "name": "Green Clock Jar",
    "slug": "green-clock-jar",
    "folder": "chatgpt-icon",
    "tags": [
      "home"
    ],
    "created": "2025-06-04 21:40:38.394Z",
    "updated": "2025-06-05 08:54:37.054Z",
    "image_name": "Green Clock Jar",
    "alt_text": "A stylized illustration of a green jar with a clock face on its front. The jar has a rounded body and a lid with vertical ridges. The clock face features a white background with green hour and minute hands, and small hour markers. The overall color scheme is various shades of green, set against a softly blurred green background.",
    "variants": {
      "lg": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-lg.png",
        "filesize": 131094,
        "format": "png",
        "height": 1024,
        "name": "lg.png",
        "width": 1024
      },
      "md": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-md.png",
        "filesize": 131094,
        "format": "png",
        "height": 1024,
        "name": "md.png",
        "width": 1024
      },
      "original": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-original.png",
        "filesize": 180506,
        "format": "png",
        "height": 1024,
        "name": "original.png",
        "width": 1024
      },
      "sm": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-sm.png",
        "filesize": 77918,
        "format": "png",
        "height": 768,
        "name": "sm.png",
        "width": 768
      },
      "thumbnail": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-thumbnail.webp",
        "filesize": 11486,
        "format": "webp",
        "height": 300,
        "name": "thumbnail.webp",
        "width": 300
      },
      "webp": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-webp.webp",
        "filesize": 141870,
        "format": "webp",
        "height": 1024,
        "name": "webp.webp",
        "width": 1024
      },
      "xs": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/green-clock-jar-xs.png",
        "filesize": 28576,
        "format": "png",
        "height": 480,
        "name": "xs.png",
        "width": 480
      }
    }
  },
  "spiral_stomach_icon": {
    "id": "0ml7fsybwicn5z9",
    "type": "image",
    "project": "agi-reflexology",
    "name": "Spiral Stomach Icon",
    "slug": "spiral-stomach-icon",
    "folder": "chatgpt-icon",
    "tags": [
      "home"
    ],
    "created": "2025-06-04 21:40:37.073Z",
    "updated": "2025-06-05 08:54:35.909Z",
    "image_name": "Spiral Stomach Icon",
    "alt_text": "A stylized green icon resembling a stomach with a spiral shape. The design features smooth curves and a glossy finish, set against a soft, blurred green background that enhances the icon's visibility. The stomach shape has a prominent spiral element, suggesting movement or digestion.",
    "variants": {
      "lg": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-lg.png",
        "filesize": 133463,
        "format": "png",
        "height": 1024,
        "name": "lg.png",
        "width": 1024
      },
      "md": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-md.png",
        "filesize": 133463,
        "format": "png",
        "height": 1024,
        "name": "md.png",
        "width": 1024
      },
      "original": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-original.png",
        "filesize": 169090,
        "format": "png",
        "height": 1024,
        "name": "original.png",
        "width": 1024
      },
      "sm": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-sm.png",
        "filesize": 77837,
        "format": "png",
        "height": 768,
        "name": "sm.png",
        "width": 768
      },
      "thumbnail": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-thumbnail.webp",
        "filesize": 10300,
        "format": "webp",
        "height": 300,
        "name": "thumbnail.webp",
        "width": 300
      },
      "webp": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-webp.webp",
        "filesize": 97156,
        "format": "webp",
        "height": 1024,
        "name": "webp.webp",
        "width": 1024
      },
      "xs": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/spiral-stomach-icon-xs.png",
        "filesize": 21807,
        "format": "png",
        "height": 480,
        "name": "xs.png",
        "width": 480
      }
    }
  },
  "person_with_stress": {
    "id": "835g5j5dt4w5asz",
    "type": "image",
    "project": "agi-reflexology",
    "name": "Person with Stress",
    "slug": "person-with-stress",
    "folder": "chatgpt-icon",
    "tags": [
      "home"
    ],
    "created": "2025-06-04 21:40:35.051Z",
    "updated": "2025-06-05 10:08:47.398Z",
    "image_name": "Person with Stress",
    "alt_text": "An abstract illustration of a person with a smooth, rounded head and shoulders, depicted in a muted green color. Surrounding the figure are zigzag lines representing stress or discomfort. The background is a darker shade of green, creating a contrast with the figure.",
    "variants": {
      "lg": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-lg.png",
        "filesize": 156387,
        "format": "png",
        "height": 1024,
        "name": "person-with-stress-lg.png",
        "width": 1024
      },
      "md": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-md.png",
        "filesize": 156387,
        "format": "png",
        "height": 1024,
        "name": "person-with-stress-md.png",
        "width": 1024
      },
      "original": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-original.png",
        "filesize": 172169,
        "format": "png",
        "height": 1024,
        "name": "person-with-stress-original.png",
        "width": 1024
      },
      "sm": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-sm.png",
        "filesize": 82996,
        "format": "png",
        "height": 768,
        "name": "person-with-stress-sm.png",
        "width": 768
      },
      "thumbnail": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-thumbnail.webp",
        "filesize": 12524,
        "format": "webp",
        "height": 300,
        "name": "person-with-stress-thumbnail.webp",
        "width": 300
      },
      "webp": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-webp.webp",
        "filesize": 109526,
        "format": "webp",
        "height": 1024,
        "name": "person-with-stress-webp.webp",
        "width": 1024
      },
      "xs": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/person-with-stress-xs.png",
        "filesize": 23873,
        "format": "png",
        "height": 480,
        "name": "person-with-stress-xs.png",
        "width": 480
      }
    }
  },
  "theater_mask_shield": {
    "id": "42x26w9348tr49h",
    "type": "image",
    "project": "agi-reflexology",
    "name": "Theater Mask Shield",
    "slug": "theater-mask-shield",
    "folder": "chatgpt-icon",
    "tags": [
      "home"
    ],
    "created": "2025-06-04 21:40:33.096Z",
    "updated": "2025-06-05 08:54:34.856Z",
    "image_name": "Theater Mask Shield",
    "alt_text": "A stylized shield divided into two halves, one side features a sad face and the other side features a happy face. The shield has a soft green hue and a textured appearance, set against a darker green background.",
    "variants": {
      "lg": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-lg.png",
        "filesize": 181258,
        "format": "png",
        "height": 1024,
        "name": "lg.png",
        "width": 1024
      },
      "md": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-md.png",
        "filesize": 181258,
        "format": "png",
        "height": 1024,
        "name": "md.png",
        "width": 1024
      },
      "original": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-original.png",
        "filesize": 223373,
        "format": "png",
        "height": 1024,
        "name": "original.png",
        "width": 1024
      },
      "sm": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-sm.png",
        "filesize": 89347,
        "format": "png",
        "height": 768,
        "name": "sm.png",
        "width": 768
      },
      "thumbnail": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-thumbnail.webp",
        "filesize": 10032,
        "format": "webp",
        "height": 300,
        "name": "thumbnail.webp",
        "width": 300
      },
      "webp": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-webp.webp",
        "filesize": 109888,
        "format": "webp",
        "height": 1024,
        "name": "webp.webp",
        "width": 1024
      },
      "xs": {
        "bunny_url": "https://seerstudio.b-cdn.net/projects/agi-reflexology/theater-mask-shield-xs.png",
        "filesize": 24976,
        "format": "png",
        "height": 480,
        "name": "xs.png",
        "width": 480
      }
    }
  }
};

	const problemCards = [
		{
			content: 'Persistent Pain That Keeps Returning',
			pb_img: records.green_clock_jar,
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/bottle-time-persistent-icon.webp',
			imgAlt: 'A green bottle with a clock face on the side, featuring a screw-on lid.'
		},
		{
			content: "Exhaustion That Sleep Doesn't Fix",
			pb_img: records.green_battery_icon,
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/low-battery-icon.webp',
			imgAlt: 'A large, stylized green battery with a low power level.'
		},
		{
			content: 'An Unpredictable Menstrual Cycle',
			pb_img: records.green_refresh_icon,
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/cycle-icon.webp',
			imgAlt: 'A 3D green circular arrow forming a loop, symbolizing a cycle.'
		},
		{
			content: 'Digestive Discomfort Without a Clear Cause',
			pb_img: records.spiral_stomach_icon,
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/stomach-icon.webp',
			imgAlt: 'A stylized green stomach icon with a spiral design in the center.'
		},
		{
			content: 'Mood Swings or Irritability That Linger',
			pb_img: records.theater_mask_shield,
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/mood-mask-icon.webp',
			imgAlt:
				'A green shield-shaped icon with a dual-faced design; the left side shows a sad expression, and the right side shows a happy expression, symbolizing duality or contrasting emotions.'
		},
		{
			content: 'A Body That Never Fully Relaxes',
			pb_img: records.person_with_stress,
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/shoulder-pain-icon.webp',
			imgAlt:
				'A green, stylized silhouette of a person with zigzag lines around the shoulders, suggesting pain or stress.'
		}
	];
</script>

<Section
	section_id="homepage-problem"
	horizontal_padding={4}
	vertical_padding={8}
	grid_span="fullSpan"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row-reverse
		md:items-start"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs">
				<Image
					record={records.woman_in_distress}
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Problem</Text>
					<Text type="h2" style="h6" id="homepage-problem_heading">
						Persistent Pain, Hormonal Imbalance, Daily Exhaustion. <i>Nothing Seems to Work.</i>
					</Text>
				</div>
				<Text type="p" style="paraBase">
					Many people come to me after months — sometimes years — of living with fatigue, tension,
					hormonal shifts, or stress that just won’t lift. They’ve stretched, tried supplements,
					seen specialists… but nothing seems to bring lasting relief. That’s often because the
					focus stays on the symptom — not the signal behind it.
					<br /><br />
					Your body isn’t broken — it’s communicating. And when it’s ignored, it doesn’t stop. It gets
					louder.
				</Text>

				<div class="mt-10 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button
						size={4}
						type="primary"
						href="/treatments"
						ariaLabel="View all of my services that could help you"
						class="w-full max-w-md sm:w-max"
					>
						Explore My Treatments
					</Button>
					<Button
						size={4}
						type="plain"
						href="/reflexology"
						ariaLabel="Learn how reflexology works"
						class="w-full max-w-md sm:w-max"
					>
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
		<div
			class="flex w-full flex-wrap justify-center gap-4 md:gap-5 lg:gap-6
		supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:justify-items-center supports-[display:grid]:sm:grid-cols-2 supports-[display:grid]:md:grid-cols-3"
		>
			{#each problemCards as card}
				<BasicCard>
					<div class="aspect-square w-full max-w-[7rem]">
						<Image record={card.pb_img} decorate={false}></Image>
					</div>
					<Text type="h3" style="h8" class="tracking-[-1px]">
						{card.content}
					</Text>
				</BasicCard>
			{/each}
		</div>
	</Container>
</Section>
