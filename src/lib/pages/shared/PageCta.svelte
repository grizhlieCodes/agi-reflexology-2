<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="page-cta" grid_span="fullSpan" class="w-full p-0" justify_content="center">
	<Container
		class="grid min-h-screen w-full max-w-[100rem] grid-cols-1
	grid-rows-1 p-0 *:col-start-1 *:row-start-1 md:min-h-[52rem] md:p-10
	lg:min-h-[56rem] xl:min-h-[60rem]"
	>
		<div class="z-3 flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
			<Text type="h1" style="h3" class="font-[450]">
				Ready To Feel <br /> Supported Again?
			</Text>
			<Text type="p" style="paraBase" class="max-w-2xl">
				Whether you’re navigating pain, stress, or just need space to breathe, your next session can meet you where you are.
			</Text>
			<div class="mt-2 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
				<Button size={4} type="primary" href="/treatments" ariaLabel="View all of my services that could help you" class="w-full max-w-md sm:w-max">
					Explore My Treatments
				</Button>
				<Button size={4} type="plain" href="/treatments" ariaLabel="Learn how reflexology works" class="w-full max-w-md sm:w-max">
					How Reflexology Works
				</Button>
			</div>
		</div>
		<div
			class="z-2 grid h-full w-full grid-cols-1 grid-rows-1 *:col-start-1
		*:row-start-1"
		>
			<Image
				src="https://seerstudio.b-cdn.net/image-tests/grizhlie_Create_a_soft_high-key_background_image_designed_for_a_4059b71e-b7f1-4139-a71a-212523ab5bf1.webp"
				alt="Purely decorative image of a surface with fern plants surrounding the empty center."
				decorate={true}
				containerClass="w-full h-full dark:opacity-0 transition-opacity duration-1000"
			></Image>
			<Image
				src="https://seerstudio.b-cdn.net/image-tests/grizhlie_httpss.mj.run0Uw2dwfUORs_Create_a_dark_atmospheric_bac_778ecb51-a686-492c-875b-b7d73bb28a46.webp"
				alt="Purely decorative image of a surface with fern plants surrounding the empty center."
				decorate={true}
				containerClass="w-full h-full opacity-0 dark:opacity-100 transition-opacity duration-1000"
			></Image>
		</div>
	</Container>
</Section>
