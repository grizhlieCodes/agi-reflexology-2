<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import DecoratedList from '$lib/components/ui/DecoratedList.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import Leaf from 'lucide-svelte/icons/leaf';

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
					src="https://seerstudio.b-cdn.net/image-tests/IMG_2127.webp"
					alt="A woman with shoulder-length hair and a tattoo on her right arm stands in a forest, wearing a patterned gray top. The background shows blurred trees and forest floor."
				></Image>
			</div>
		</div>
	</Container>
</Section>
