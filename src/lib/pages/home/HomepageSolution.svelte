<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const records = {
		smiling_emoji_face: {
			id: 'qfr0td5r0q4cijo',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Smiling Emoji Face',
			slug: 'smiling-emoji-face',
			folder: 'chatgpt-icon',
			tags: ['home'],
			created: '2025-06-04 21:40:39.627Z',
			updated: '2025-06-05 08:54:36.633Z',
			image_name: 'Smiling Emoji Face',
			alt_text:
				"A stylized, cartoon-like representation of a smiling male face with a light green color. The character has a simple, friendly expression with closed eyes and a wide smile. The background is dark, creating a glowing effect around the figure, enhancing its cheerful appearance. The character's hair is slightly darker green, styled in a simple manner, and the shoulders are rounded, giving it a friendly and approachable look.",
			variants: {
				lg: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-lg.png',
					filesize: 139028,
					format: 'png',
					height: 1024,
					name: 'lg.png',
					width: 1024
				},
				md: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-md.png',
					filesize: 139028,
					format: 'png',
					height: 1024,
					name: 'md.png',
					width: 1024
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-original.png',
					filesize: 167264,
					format: 'png',
					height: 1024,
					name: 'original.png',
					width: 1024
				},
				sm: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-sm.png',
					filesize: 77613,
					format: 'png',
					height: 768,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-thumbnail.webp',
					filesize: 10550,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-webp.webp',
					filesize: 74788,
					format: 'webp',
					height: 1024,
					name: 'webp.webp',
					width: 1024
				},
				xs: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/smiling-emoji-face-xs.png',
					filesize: 21726,
					format: 'png',
					height: 480,
					name: 'xs.png',
					width: 480
				}
			}
		},
		moon_and_stars: {
			id: '3y8t79173u2e07l',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Moon and Stars',
			slug: 'moon-and-stars',
			folder: 'chatgpt-icon',
			tags: ['home'],
			created: '2025-06-04 21:40:36.427Z',
			updated: '2025-06-05 08:54:36.260Z',
			image_name: 'Moon and Stars',
			alt_text:
				'A stylized, glossy crescent moon in a soft mint green color, accompanied by three sparkling stars of varying sizes. The background is a subtle gradient of muted brown tones, enhancing the ethereal quality of the moon and stars.',
			variants: {
				lg: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-lg.png',
					filesize: 103439,
					format: 'png',
					height: 1024,
					name: 'lg.png',
					width: 1024
				},
				md: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-md.png',
					filesize: 103439,
					format: 'png',
					height: 1024,
					name: 'md.png',
					width: 1024
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-original.png',
					filesize: 120088,
					format: 'png',
					height: 1024,
					name: 'original.png',
					width: 1024
				},
				sm: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-sm.png',
					filesize: 54674,
					format: 'png',
					height: 768,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-thumbnail.webp',
					filesize: 10198,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-webp.webp',
					filesize: 86938,
					format: 'webp',
					height: 1024,
					name: 'webp.webp',
					width: 1024
				},
				xs: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/moon-and-stars-xs.png',
					filesize: 19501,
					format: 'png',
					height: 480,
					name: 'xs.png',
					width: 480
				}
			}
		},
		leaf_with_pulse: {
			id: 'e3e29ha47od560p',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Leaf with Pulse',
			slug: 'leaf-with-pulse',
			folder: 'chatgpt-icon',
			tags: ['home'],
			created: '2025-06-04 21:40:32.302Z',
			updated: '2025-06-05 08:54:35.542Z',
			image_name: 'Leaf with Pulse',
			alt_text:
				"A stylized green leaf with a white pulse line running through it, symbolizing the connection between nature and health. The background is a soft gradient of earthy tones, enhancing the leaf's vibrant color.",
			variants: {
				lg: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-lg.png',
					filesize: 140173,
					format: 'png',
					height: 1024,
					name: 'lg.png',
					width: 1024
				},
				md: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-md.png',
					filesize: 140173,
					format: 'png',
					height: 1024,
					name: 'md.png',
					width: 1024
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-original.png',
					filesize: 161006,
					format: 'png',
					height: 1024,
					name: 'original.png',
					width: 1024
				},
				sm: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-sm.png',
					filesize: 76048,
					format: 'png',
					height: 768,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-thumbnail.webp',
					filesize: 7890,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-webp.webp',
					filesize: 96120,
					format: 'webp',
					height: 1024,
					name: 'webp.webp',
					width: 1024
				},
				xs: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/leaf-with-pulse-xs.png',
					filesize: 26777,
					format: 'png',
					height: 480,
					name: 'xs.png',
					width: 480
				}
			}
		},
		forest_portrait: {
			id: '515gf7x6ew0x468',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Forest Portrait',
			slug: 'forest-portrait',
			folder: 'photographs',
			tags: ['home', 'about'],
			created: '2025-06-04 21:36:56.753Z',
			updated: '2025-06-05 09:04:47.620Z',
			image_name: 'Forest Portrait',
			alt_text:
				'A woman with shoulder-length brown hair stands in a forest, looking directly at the camera with a gentle expression. She is wearing a light gray knitted top with a decorative pattern around the neckline. Her arms are slightly bent, and she has a visible tattoo on her left arm. The background features tall trees with soft, blurred foliage, creating a serene and natural atmosphere.',
			variants: {
				lg: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-lg.jpeg',
					filesize: 2039535,
					format: 'jpeg',
					height: 2560,
					name: 'lg.jpeg',
					width: 1920
				},
				md: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-md.jpeg',
					filesize: 955347,
					format: 'jpeg',
					height: 1707,
					name: 'md.jpeg',
					width: 1280
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-original.jpeg',
					filesize: 2883211,
					format: 'jpeg',
					height: 3088,
					name: 'original.jpeg',
					width: 2316
				},
				sm: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-sm.jpeg',
					filesize: 373862,
					format: 'jpeg',
					height: 1024,
					name: 'sm.jpeg',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-thumbnail.webp',
					filesize: 5914,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-webp.webp',
					filesize: 363072,
					format: 'webp',
					height: 3088,
					name: 'webp.webp',
					width: 2316
				},
				xs: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/forest-portrait-xs.jpeg',
					filesize: 160676,
					format: 'jpeg',
					height: 640,
					name: 'xs.jpeg',
					width: 480
				}
			}
		}
	};

	const solutionCards = [
		{
			content: 'Relief That Stays <br/> With You',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/happy-man-icon.webp',
			imgAlt:
				'A green, smiling 3D emoji of a person with short hair, against a transparent background.',
			record: records.smiling_emoji_face
		},
		{
			content: 'Sleep That Feels Like <br/> Actual Rest',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/moon-icon.webp',
			imgAlt:
				'A teal crescent moon accompanied by four sparkling stars on a white background, symbolising a good night\s sleep.',
			record: records.moon_and_stars
		},
		{
			content: 'Feeling More in Tune <br/> With Your Body',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/leaf-health-pulse-icon.webp',
			imgAlt:
				'A green leaf icon with a white heartbeat line running through the center, symbolizing a connection between nature and health.',
			record: records.leaf_with_pulse
		}
	];
</script>

<Section
	section_id="homepage-solution"
	horizontal_padding={4}
	grid_span="fullSpan"
	background_color="primary-50"
	vertical_padding={9}
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center lg:gap-20"
		>
			<div class="flex w-full flex-col items-center">
				<div class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm">
					<Image
						record={records.forest_portrait}
					></Image>
				</div>
				<Text
					type="p"
					style="eyebrow"
					class="dark:text-primary-400
		mt-2 text-neutral-400"
				>
					This isn’t about chasing symptoms. It’s about helping your body recover its rhythm.
				</Text>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Solution</Text>
					<Text type="h2" style="h6" id="homepage-solution_heading">
						When The Body Is Supported, <br /> It Can Finally Heal Naturally
					</Text>
				</div>
				<div>
					<Text type="p" style="paraBase">
						I work with people whose bodies are stuck in cycles of pain, fatigue, or imbalance —
						often after conventional approaches haven’t helped.
					</Text>
					<Text type="p" style="paraBase">
						Reflexology offers a different path. By applying gentle, targeted pressure to specific
						points on the feet, I support your body’s nervous system, circulation, and internal
						rhythms. The result is often deep release, better sleep, reduced pain, and a return to a
						more natural state of balance. Every session is focused, respectful, and guided by what
						your body actually needs.
					</Text>
				</div>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
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
		<div class="flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
			<div class="flex flex-col items-center gap-2 md:gap-3">
				<Text type="h2" style="h6" id="homepage-solution_heading"
					>What Clients Often Notice After Sessions</Text
				>
				<Text type="p" style="paraBase" class="max-w-3xl">
					As your body returns to balance, certain changes tend to show up — not just in symptoms,
					but in how you feel day to day. Here are some of the results clients often notice.louder.
				</Text>
			</div>
			<div
				class="flex w-full max-w-[64rem] flex-wrap justify-center
		gap-4 md:gap-5 lg:gap-6
		supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:justify-items-center supports-[display:grid]:sm:grid-cols-2 supports-[display:grid]:md:grid-cols-3"
			>
				{#each solutionCards as card}
					<BasicCard class="bg-primary-100 dark:bg-primary-900">
						<div class="aspect-square w-full max-w-[7rem]">
							<Image record={card.record} decorate={false}></Image>
						</div>
						<Text type="h3" style="h8" class="tracking-[-1px]">
							{@html card.content}
						</Text>
					</BasicCard>
				{/each}
			</div>
		</div>
	</Container>
</Section>
