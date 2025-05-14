<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="massage-expectations-for-client" grid_span="centeredSpan3" vertical_padding={9}>
	<Container class="md:flex-row">
		<div class="aspect-square w-full md:max-w-xs min-w-xs">
			<Image
				src="https://seerstudio.b-cdn.net/image-tests/grizhlie_clothed_neck_massage_person_laying_down._Female_hand_694680ab-ed00-43e9-b54d-0cfd23a7f7ed_3.webp"
				alt="A woman lying on her back with closed eyes, receiving a head and neck massage. She is relaxed, with brown hair spread around her. Soft light and green foliage create a calming atmosphere."
			></Image>
		</div>
		<div class="flex flex-col gap-4 grow md:text-left items-center md:items-start">
			<div>
				<Text type="span" style="eyebrow">What to Expect</Text>
				<Text type="h2" id="" style="h6">A Calmer Approach to Massage</Text>
			</div>
			<Text style="paraBase" type="p">
				My massage sessions don’t push through tension — they listen to it. Using slow, responsive techniques, I support your body’s natural unwinding
				process without force or pressure overload. Each session is shaped around you — your energy, your breath, your body’s signals.
			</Text>
			<div class="flex flex-col gap-3 md:flex-row">
				<Button
					size={3}
					type="primary"
					ariaLabel="View my treatments page
            to see which of my services could benefit you"
					href="/treatments"
				>
					Explore My Treatments
				</Button>
				<Button
					size={3}
					type="plain"
					ariaLabel="View my treatments page
            to see which of my services could benefit you"
					href="/reflexology"
				>
					Discover My Approach
				</Button>
			</div>
		</div>
	</Container>
</Section>
