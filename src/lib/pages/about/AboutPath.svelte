<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="about-the-path" horizontal_padding={4} grid_span="fullSpan" vertical_padding={9}>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col-reverse items-center gap-6 md:flex-row-reverse md:items-start md:gap-12
		lg:items-center"
		>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">The Path</Text>
					<Text type="h2" style="h6" id="about-the-path_heading">How I Found My Way Into Healing Work</Text>
				</div>
				<div>
					<Text type="p" style="paraBase">
						I’ve always been someone who reads, experiments, learns with my hands. When I found reflexology, I didn’t stop at one course. I kept going
						— reading books, taking trainings, and most recently, traveling to India to study healing massage techniques in person.
					</Text>
					<Text type="p" style="paraBase">
						I don’t see myself as someone who ‘fixes’ people. I don’t believe the body is broken. What I do is help the body return to its own natural
						rhythm — by gently unblocking the areas where stress, trauma, or imbalance have built up over time.
					</Text>
				</div>
			</div>
			<div class="flex w-full flex-col items-center">
				<div class="aspect-[2/3] w-full max-w-xs sm:min-w-[17rem] md:max-w-sm lg:min-w-sm">
					<Image
						src="https://seerstudio.b-cdn.net/image-tests/IMG_7731.webp"
						alt="A woman with long, blonde hair is smiling softly at the camera. She is wearing a dark turtleneck sweater and a delicate necklace. Behind her, there are kitchen shelves with glassware and a wooden pepper mill."
					></Image>
				</div>
			</div>
		</div>
	</Container>
</Section>
