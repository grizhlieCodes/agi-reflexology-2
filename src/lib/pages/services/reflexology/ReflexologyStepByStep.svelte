<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const solutionCards = [
		{
			content: 'Relief That Stays <br/> With You',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/happy-man-icon.webp',
			imgAlt: 'A green, smiling 3D emoji of a person with short hair, against a transparent background.'
		},
		{
			content: 'Sleep That Feels Like <br/> Actual Rest',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/moon-icon.webp',
			imgAlt: 'A teal crescent moon accompanied by four sparkling stars on a white background, symbolising a good night\s sleep.'
		},
		{
			content: 'Feeling More in Tune <br/> With Your Body',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/leaf-health-pulse-icon.webp',
			imgAlt: 'A green leaf icon with a white heartbeat line running through the center, symbolizing a connection between nature and health.'
		}
	];
</script>

<Section section_id="session-steps" horizontal_padding={4} grid_span="fullSpan" background_color="primary-50" vertical_padding={9}>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center lg:gap-20"
		>
			<div class="flex w-full flex-col items-center">
				<div class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm">
					<Image
						src="https://seerstudio.b-cdn.net/image-tests/agas-client.webp"
						alt="A person is reclining on a chair indoors, covered with a cream-colored knitted blanket. They have a cloth covering their eyes. There are large plants around, and a window with sheer curtains overlooks white orchids. The setting appears calm and relaxing."
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
					Reflexology supports your body by calming the nervous system and restoring internal balance — without needing to touch the problem area
					directly. Here’s how it works in simple steps:
				</Text>

				<ul class="mt-4 flex w-full flex-col gap-6 md:mt-6">
					<li class="flex w-full flex-col gap-2">
						<Text type="h3" style="paraBase" class="font-ui font-semibold">1. Book Treatment</Text>
						<Text type="p" style="para4" class="text-neutral-500 dark:text-neutral-400">
							Book your treatment by following any of the links on this page. It will provide you with the option of contacting me via mobile or by
							using the provided form.
						</Text>
					</li>
					<li class="flex w-full flex-col gap-2">
						<Text type="h3" style="paraBase" class="font-ui font-semibold">2. Attend Treatment</Text>
						<Text type="p" style="para4" class="text-neutral-500 dark:text-neutral-400">
							Arrive for your treatment and make sure you put aside the right amount of time for it. During your first session this includes a 20min
							free consultation. Please make sure that the treatment area you booked for is clean and free of any makeup.
						</Text>
					</li>
					<li class="flex w-full flex-col gap-2">
						<Text type="h3" style="paraBase" class="font-ui font-semibold">3. The Work</Text>
						<Text type="p" style="para4" class="text-neutral-500 dark:text-neutral-400">
							The treatment will comprise of a focused reflexology massage that will work through areas of high-benefit, uniquely to you and your
							body.
						</Text>
					</li>
				</ul>

				<div class="mt-6 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/treatments" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div>
			</div>
		</div>
	</Container>
</Section>
