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

<Section section_id="homepage-my-approach" horizontal_padding={4} grid_span="fullSpan">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/ChatGPT%20Image%20May%2010%2C%202025%2C%2008_55_13%20PM.webp"
					alt="A person sitting with their bare feet resting on a soft towel. Hands gently touch the feet, surrounded by green ferns and pebbles, suggesting a relaxing and natural setting."
				></Image>
			</div>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">My Approach</Text>
					<Text type="h2" style="h6" id="homepage-my-approach_heading">
						How I Work Is Guided by <br />What Your Body Truly Needs
					</Text>
				</div>
				<Text type="p" style="paraBase">
					As your body returns to balance, I follow what it’s truly asking for, moment to moment. These are the qualities that shape every session:
				</Text>
				<!-- Turn this into a list comp -->
				<DecoratedList item_list={APPROACH_LIST} Icon={Leaf}></DecoratedList>
			</div>
		</div>
	</Container>
</Section>
