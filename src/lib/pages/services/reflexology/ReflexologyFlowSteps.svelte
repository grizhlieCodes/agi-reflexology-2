<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="reflexology-flow-steps" horizontal_padding={4} vertical_padding={8} grid_span="centeredSpan2">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full max-w-3xl flex-col items-center gap-4
		md:flex-row-reverse md:items-start"
		>
			<div
				class="flex flex-col items-center gap-4 text-center
            md:gap-5"
			>
				<div>
					<Text type="span" style="eyebrow">The Reflexology Flow, Step by Step</Text>
					<Text type="h2" style="h6" id="reflexology-flow-steps_heading">A Gentle Way to Help the Body Rebalance Itself</Text>
				</div>
				<Text type="p" style="paraBase">
					Reflexology supports your body by calming the nervous system and restoring internal balance — without needing to touch the problem area
					directly. Here’s how it works in simple steps:
				</Text>
			</div>
		</div>
		<div
			class="flex w-full max-w-3xl flex-col items-center gap-8 md:grid
		md:grid-cols-[5fr_4fr] md:items-stretch"
		>
			<div class="aspect-[2/3] w-full max-w-sm md:aspect-[unset] md:max-w-none">
				<Image
					src="https://seerstudio.b-cdn.net/image-tests/grizhlie_A_realistic_digital_illustration_of_a_full_human_silho_07bd63a1-266d-48ee-90c4-184f91651dac.webp"
					alt="An ethereal, glowing human figure stands with closed eyes against a swirling, colorful backdrop of light and energy patterns, resembling neural pathways or cosmic currents."
				></Image>
			</div>
			<div class="flex w-full flex-col items-center gap-4">
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">1. Signals Start at the Feet</Text>
					<Text type="p" style="para3"
						>Specific points on your feet (or hands/face) are gently stimulated — each linked to internal organs, systems, or glands.</Text
					>
				</BasicCard>
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">2. Your Nervous System Picks It Up</Text>
					<Text type="p" style="para3"
						>This stimulation sends a signal through nerve pathways and the spinal cord, inviting the body to relax and shift into rest-and-repair
						mode.</Text
					>
				</BasicCard>
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">3. Balance Begins to Return</Text>
					<Text type="p" style="para3"
						>As tension melts and circulation improves, your body’s natural rhythms begin to restore — from digestion to hormones and sleep.</Text
					>
				</BasicCard>
				<BasicCard type="neutral" class="items-start p-5 text-left">
					<Text type="h3" style="paraBase" class="font-ui font-semibold">4. You Feel the Shift</Text>
					<Text type="p" style="para3"
						>Clients often leave sessions feeling lighter, clearer, and more at ease — because the body has been gently nudged back into balance.</Text
					>
				</BasicCard>
			</div>
		</div>
		<Text
			type="p"
			style="eyebrow"
			class="w-full max-w-3xl text-xl
		text-neutral-500 md:text-2xl dark:text-neutral-400"
		>
			And that’s it. Reflexology works because it enables the body to repair itself. It activates self-healing.
		</Text>
	</Container>
</Section>
