<script lang="ts">
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="homepage-hero" grid_span="fullSpan" gap={4} vertical_padding={14} class="bg-primary-50">
	<div
		class="lg:12 flex w-full max-w-[80rem] flex-col items-center gap-8
    text-center md:gap-10"
	>
        <div class="flex flex-col gap-3">
            <Text id="homepage-hero_heading" type="h1" style="h4" class="text-primary-800 max-w-4xl font-[450] ">
                Experience Deep Relief & <br /> Reconnect With Your Body
            </Text>
            <Text type="p" style="paraBase" class="max-w-2xl">
                I use my intuitive reflexology-massage techniques to guide your body toward a deep release and natural balance. In a healing and peaceful environment, I help you let go of tension patterns that prevent you from experiencing true bodily peace.
            </Text>
        </div>
        <div class="flex flex-col md:flex-row gap-3">
            <Button size={3} type="primary" ariaLabel="View my treatments page
            to see which of my services could benefit you" href="/treatments">
                Explore My Treatments
            </Button>
            <Button size={3} type="plain" ariaLabel="View my treatments page
            to see which of my services could benefit you" href="/">
                Discover My Approach
            </Button>
        </div>
	</div>
</Section>
