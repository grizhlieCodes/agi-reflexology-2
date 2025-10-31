<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="services-directions" grid_span="fullSpan" vertical_padding={10}>
	<Container class="w-full">
		<Text type="h1" id="services-directions_header" style="sr">Choose between learning about my Reflexology or Massage service.</Text>
		<div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:gap-8">
			<BasicCard
				class="items-start rounded-md border-neutral-200
			bg-neutral-50 p-6 text-left sm:max-w-md"
			>
				<Text type="h2" style="para8" class="font-ui font-medium">Reflexology</Text>
				<span class="block h-[1px] w-full bg-neutral-100"></span>
				<Text type="p" style="para4">
					Reflexology uses gentle pressure on the feet, face, or hands to support your nervous system and help your body rebalance from within.
				</Text>
				<div class="mt-4 w-full">
					<Button
						type="default_light"
						size={4}
						href="/reflexology"
						ariaLabel="Learn how my reflexology service works."
						class="w-full rounded-md">Explore How Reflexology Works</Button
					>
				</div>
			</BasicCard>
			<BasicCard
				class="items-start rounded-md border-neutral-200
			bg-neutral-50 p-6 text-left sm:max-w-md"
			>
				<Text type="h2" style="para8" class="font-ui font-medium">Massage</Text>
				<span class="block h-[1px] w-full bg-neutral-100"></span>
				<Text type="p" style="para4">
					Massage works directly on your muscles to release tension, ease tightness, and relax the body through slow, intuitive touch.
				</Text>
				<div class="mt-4 w-full">
					<Button type="default_light" size={4} href="/services/massage" ariaLabel="Learn how my reflexology service works." class="w-full rounded-md"
						>Explore My Massage Service</Button
					>
				</div>
			</BasicCard>
		</div>
	</Container>
</Section>
