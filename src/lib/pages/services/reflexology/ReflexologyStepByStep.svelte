<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	const pb_img = {
		id: 'di04569spz5p931',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Relaxing at Home',
		slug: 'relaxing-at-home',
		folder: 'photographs',
		tags: ['reflexology', 'location', 'burnham'],
		created: '2025-06-04 21:36:33.162Z',
		updated: '2025-06-05 09:16:44.239Z',
		image_name: 'Relaxing at Home',
		alt_text:
			'A person resting in a reclining chair with a white blanket draped over them. They have a cold compress over their eyes and are lying in a cozy indoor setting. In the background, there are large windows with sheer curtains, allowing natural light to filter in. Outside the window, there are blooming white orchids in pots. The room is decorated with green plants, adding to the tranquil atmosphere.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-lg.jpeg',
				filesize: 2267403,
				format: 'jpeg',
				height: 2559,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-md.jpeg',
				filesize: 1058859,
				format: 'jpeg',
				height: 1706,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-original.jpeg',
				filesize: 2674776,
				format: 'jpeg',
				height: 2666,
				name: 'original.jpeg',
				width: 2000
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-sm.jpeg',
				filesize: 413280,
				format: 'jpeg',
				height: 1024,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-thumbnail.webp',
				filesize: 6134,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-webp.webp',
				filesize: 451064,
				format: 'webp',
				height: 2666,
				name: 'webp.webp',
				width: 2000
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-xs.jpeg',
				filesize: 168695,
				format: 'jpeg',
				height: 640,
				name: 'xs.jpeg',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="session-steps"
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
						record={pb_img}
					></Image>
				</div>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">During the Session</Text>
					<Text type="h2" style="h6" id="session-steps_heading">Working With Me, Step by Step</Text>
				</div>
				<Text type="p" style="paraBase" class="text-neutral-600 dark:text-neutral-300">
					Reflexology supports your body by calming the nervous system and restoring internal
					balance — without needing to touch the problem area directly. Here’s how it works in
					simple steps:
				</Text>

				<ul class="mt-4 flex w-full flex-col gap-6 md:mt-6">
					<li class="flex w-full flex-col gap-2">
						<Text type="h3" style="paraBase" class="font-ui font-semibold">1. Book Treatment</Text>
						<Text type="p" style="para4" class="text-neutral-500 dark:text-neutral-400">
							Book your treatment by following any of the links on this page. It will provide you
							with the option of contacting me via mobile or by using the provided form.
						</Text>
					</li>
					<li class="flex w-full flex-col gap-2">
						<Text type="h3" style="paraBase" class="font-ui font-semibold">2. Attend Treatment</Text
						>
						<Text type="p" style="para4" class="text-neutral-500 dark:text-neutral-400">
							Arrive for your treatment and make sure you put aside the right amount of time for it.
							During your first session this includes a 20min free consultation. Please make sure
							that the treatment area you booked for is clean and free of any makeup.
						</Text>
					</li>
					<li class="flex w-full flex-col gap-2">
						<Text type="h3" style="paraBase" class="font-ui font-semibold">3. The Work</Text>
						<Text type="p" style="para4" class="text-neutral-500 dark:text-neutral-400">
							The treatment will comprise of a focused reflexology massage that will work through
							areas of high-benefit, uniquely to you and your body.
						</Text>
					</li>
				</ul>

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
						ariaLabel="Go to the locations page to all of the locations I provide my services in"
						href="/locations"
					>
						View My Locations
					</Button>
				</div>
			</div>
		</div>
	</Container>
</Section>
