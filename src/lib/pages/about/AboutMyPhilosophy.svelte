<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="about-my-philosophy" horizontal_padding={4} grid_span="fullSpan" background_color="primary-50" vertical_padding={9}>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center lg:gap-20"
		>
			<div class="flex w-full flex-col items-center">
				<div class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm">
					<Image
						src="https://seerstudio.b-cdn.net/image-tests/grizhlie_double_exposure_of_a_book_and_a_forest_made_entirely_o_72ed213a-f309-4170-bad2-c7a3878f54e4.webp"
						alt="An open book seamlessly merges into a lush forest scene, with tall trees and dense ferns, creating a magical landscape where nature and literature blend together."
					></Image>
				</div>
				<Text
					type="p"
					style="eyebrow"
					class="dark:text-primary-400 mt-2 text-neutral-400"
				>
					The Physician Treats, But Nature Heals <br />~ Hippocrates ~
				</Text>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Philosophy</Text>
					<Text type="h2" style="h6" id="about-my-philosophy_heading">Natural, Intuitive, Respectful of the Body</Text>
				</div>
				<div>
					<Text type="p" style="paraBase">
						My treatments are gentle, grounded, and deeply intuitive. I work slowly and attentively, creating space for your nervous system to settle
						and your body to feel safe again.
					</Text>
					<Text type="p" style="paraBase">
						Clients often say they feel deeply relaxed — but also lighter, clearer, more in tune with themselves. That’s because the body, when
						supported, knows what to do. I just help it get there.
					</Text>
				</div>

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
