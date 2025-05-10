<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
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
			class="flex w-full flex-col items-center gap-4 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_close-up_of_bare_feet_resting_gently_on_a_soft_lin_faa959bc-5933-42e0-b12d-555a422599aa_3.webp"
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
				<ul class="w-full space-y-1.5">
					{#each APPROACH_LIST as item}
						<li class="flex items-center gap-2">
							<Leaf class="size-4.5 stroke-primary-300"></Leaf>
							<Text type="span" style="para4" class="text-neutral-500">
								{item}
							</Text>
						</li>
					{/each}
				</ul>
				<!-- <div class="mt-10 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
					<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
						Explore My Treatments
					</Button>
					<Button size={4} type="plain" href="/treatments" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
						How Reflexology Works
					</Button>
				</div> -->
			</div>
		</div>
	</Container>
</Section>
