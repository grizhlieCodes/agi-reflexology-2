<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="about-short-history" horizontal_padding={4} vertical_padding={8} grid_span="centeredSpan2">
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-4 md:flex-row-reverse
		md:items-start"
		>
			<div
				class="flex flex-col items-center gap-4 text-center md:items-start
            md:gap-5 md:text-left"
			>
				<div>
					<Text type="span" style="eyebrow">Short History</Text>
					<Text type="h2" style="h6" id="about-short-history_heading">From Odd Jobs to Enabling Natural Healing</Text>
				</div>
				<Text type="p" style="paraBase">
					I’ve always been drawn to the body’s quiet wisdom — the way it knows how to heal when given the right space. Reflexology wasn’t a childhood
					dream or something I planned. It found me, slowly, as I followed a deep curiosity about natural healing that never seemed to fade.
				</Text>
				<Text type="p" style="paraBase">
					Before I became a practitioner, I spent years doing all sorts of work — cleaning homes, helping others, dabbling in photography. Reflexology
					started as one of many things I was simply fascinated by. But the more I learned, the more I felt: this is it. This is what I’m meant to do.
				</Text>
			</div>
		</div>
	</Container>
</Section>
