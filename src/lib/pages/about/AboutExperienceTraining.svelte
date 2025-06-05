<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const records = {
		glowing_footprint: {
			id: 'ulges1s3deh4nvx',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Glowing Footprint',
			slug: 'glowing-footprint',
			folder: 'chatgpt-icon',
			tags: [],
			created: '2025-06-04 21:40:38.912Z',
			updated: '2025-06-04 21:40:38.912Z',
			image_name: 'Glowing Footprint',
			alt_text:
				'A stylized, glowing footprint is centered in the image. The footprint is depicted in a soft green color with a textured appearance, set against a dark, gradient background. The toes are represented by five smaller circular shapes, gradually decreasing in size from left to right, leading to the larger base of the foot. The overall effect is ethereal and modern, with a subtle glow emanating from the footprint.',
			variants: {
				lg: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-lg.png',
					filesize: 83804,
					format: 'png',
					height: 1024,
					name: 'lg.png',
					width: 1024
				},
				md: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-md.png',
					filesize: 83804,
					format: 'png',
					height: 1024,
					name: 'md.png',
					width: 1024
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-original.png',
					filesize: 93816,
					format: 'png',
					height: 1024,
					name: 'original.png',
					width: 1024
				},
				sm: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-sm.png',
					filesize: 40121,
					format: 'png',
					height: 768,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-thumbnail.webp',
					filesize: 7198,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-webp.webp',
					filesize: 67710,
					format: 'webp',
					height: 1024,
					name: 'webp.webp',
					width: 1024
				},
				xs: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/glowing-footprint-xs.png',
					filesize: 10682,
					format: 'png',
					height: 480,
					name: 'xs.png',
					width: 480
				}
			}
		},
		massage_illustration: {
			id: 'b2606v8b7q2jx5q',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Massage Illustration',
			slug: 'massage-illustration',
			folder: 'chatgpt-icon',
			tags: [],
			created: '2025-06-04 21:40:34.421Z',
			updated: '2025-06-04 21:40:34.421Z',
			image_name: 'Massage Illustration',
			alt_text:
				'An abstract illustration depicting two figures in a massage setting. One figure, represented in a green hue, is positioned behind another figure who is lying down with their arms crossed. The figure in the back appears to be performing a massage, with one hand raised in a gesture that suggests motion or action. The background is a gradient of dark colors, enhancing the focus on the figures.',
			variants: {
				lg: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-lg.png',
					filesize: 136097,
					format: 'png',
					height: 1024,
					name: 'lg.png',
					width: 1024
				},
				md: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-md.png',
					filesize: 136097,
					format: 'png',
					height: 1024,
					name: 'md.png',
					width: 1024
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-original.png',
					filesize: 159570,
					format: 'png',
					height: 1024,
					name: 'original.png',
					width: 1024
				},
				sm: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-sm.png',
					filesize: 63891,
					format: 'png',
					height: 768,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-thumbnail.webp',
					filesize: 15710,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-webp.webp',
					filesize: 119696,
					format: 'webp',
					height: 1024,
					name: 'webp.webp',
					width: 1024
				},
				xs: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-illustration-xs.png',
					filesize: 21771,
					format: 'png',
					height: 480,
					name: 'xs.png',
					width: 480
				}
			}
		},
		graduate_icon: {
			id: 'pw6lo28v197ki9b',
			type: 'image',
			project: 'agi-reflexology',
			name: 'Graduate Icon',
			slug: 'graduate-icon',
			folder: 'chatgpt-icon',
			tags: [],
			created: '2025-06-04 21:40:33.771Z',
			updated: '2025-06-04 21:40:33.771Z',
			image_name: 'Graduate Icon',
			alt_text:
				'A stylized icon representing a graduate, featuring a silhouette of a person wearing a graduation cap. The figure is encircled by a curved arrow, symbolizing progress or a cycle of learning. The background is a gradient of dark green, enhancing the visibility of the icon.',
			variants: {
				lg: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-lg.png',
					filesize: 135276,
					format: 'png',
					height: 1024,
					name: 'lg.png',
					width: 1024
				},
				md: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-md.png',
					filesize: 135276,
					format: 'png',
					height: 1024,
					name: 'md.png',
					width: 1024
				},
				original: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-original.png',
					filesize: 149632,
					format: 'png',
					height: 1024,
					name: 'original.png',
					width: 1024
				},
				sm: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-sm.png',
					filesize: 74281,
					format: 'png',
					height: 768,
					name: 'sm.png',
					width: 768
				},
				thumbnail: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-thumbnail.webp',
					filesize: 16120,
					format: 'webp',
					height: 300,
					name: 'thumbnail.webp',
					width: 300
				},
				webp: {
					bunny_url:
						'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-webp.webp',
					filesize: 123780,
					format: 'webp',
					height: 1024,
					name: 'webp.webp',
					width: 1024
				},
				xs: {
					bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/graduate-icon-xs.png',
					filesize: 21271,
					format: 'png',
					height: 480,
					name: 'xs.png',
					width: 480
				}
			}
		}
	};

	const solutionCards = [
		{
			content: 'I am certified in Foot, Hand <br/> and Facial Reflexology.',
			record: records.glowing_footprint
		},
		{
			content: 'I’m Trained in the Indian <br/> Aithein Healing Massage.',
			record: records.massage_illustration
		},
		{
			content: 'I never stop learning,<br/> reading and practicing.',
			record: records.graduate_icon
		}
	];
</script>

<Section
	section_id="about-experience-training"
	horizontal_padding={4}
	grid_span="fullSpan"
	background_color="primary-50"
	vertical_padding={9}
>
	<Container class="max-w-[80rem] gap-10 md:gap-16 lg:gap-20">
		<div class="flex w-full flex-col items-center gap-6 md:gap-8 lg:gap-10">
			<div class="flex w-full flex-col items-center gap-2 md:gap-3">
				<div>
					<Text type="span" style="eyebrow">Qualifications & Training</Text>
					<Text type="h2" style="h6" id="about-experience-training_heading"
						>Experience & Training</Text
					>
				</div>
				<Text type="p" style="paraBase" class="max-w-3xl">
					I have been practicing Reflexology since 2020. I have a deep passion and curiosity for all
					things Natural-Healing and therefore I never stop learning and practicing.
				</Text>
			</div>
			<div
				class="flex w-full max-w-[24rem] flex-wrap justify-center gap-4
			md:max-w-[90rem] md:gap-5 lg:gap-6"
			>
				{#each solutionCards as card}
					<BasicCard
						class="bg-primary-100 dark:bg-primary-900
					max-w-sm md:max-w-sm"
					>
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
