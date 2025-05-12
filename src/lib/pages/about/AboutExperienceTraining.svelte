<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const solutionCards = [
		{
			content: 'I am certified in Foot, Hand <br/> and Facial Reflexology.',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/icon-two-feet.webp',
			imgAlt: 'A green, smiling 3D emoji of a pair of feet.'
		},
		{
			content: 'I’m Trained in the Indian <br/> Aithein Healing Massage.',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/massage-icon.webp',
			imgAlt: 'A stylized green icon depicting a person giving a massage to another person who is lying down.'
		},
		{
			content: 'I never stop learning,<br/> reading and practicing.',
			imgSrc: 'https://seerstudio.b-cdn.net/image-tests/student-icon.webp',
			imgAlt:
				'A green icon depicting a person wearing a graduation cap with a circular arrow around them, symbolizing lifelong learning or education cycle.'
		}
	];
</script>

<Section section_id="about-experience-training" horizontal_padding={4} grid_span="fullSpan" background_color="primary-50" vertical_padding={9}>
	<Container class="gap-10 md:gap-16 lg:gap-20 max-w-[80rem]">
		<div class="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-full">
			<div class="flex flex-col items-center gap-2 md:gap-3 w-full">
				<div>
					<Text type="span" style="eyebrow">Qualifications & Training</Text>
					<Text type="h2" style="h6" id="about-experience-training_heading">Experience & Training</Text>
				</div>
				<Text type="p" style="paraBase" class="max-w-3xl">
					I have been practicing Reflexology since 2020. I have a deep passion and curiosity for all things Natural-Healing and therefore I never stop
					learning and practicing.
				</Text>
			</div>
			<div class="flex w-full max-w-[24rem] flex-wrap gap-4 md:gap-5
			md:max-w-[90rem] lg:gap-6 justify-center">
				{#each solutionCards as card}
					<BasicCard class="bg-primary-100 dark:bg-primary-900
					max-w-sm md:max-w-sm">
						<div class="aspect-square w-full max-w-[7rem]">
							<Image src={card.imgSrc} alt={card.imgAlt} decorate={false}></Image>
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
