<script>
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import BasicCard from '$lib/components/ui/BasicCard.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="massage-location">
	<Container>
		<div class="flex flex-col items-center gap-4">
			<div>
				<Text type="span" style="eyebrow">Where You Can See Me</Text>
				<Text type="h2" style="h6">Your Massage Treatment Awaits in Burnham</Text>
			</div>
			<Text type="p" style="paraBase" class="text-neutral-500">All of my massage treatments occur in Burnham.</Text>
		</div>

		<div
			class="border-primary-200 aspect-[2/2.5] w-full overflow-hidden
		rounded-xl border-2
        md:aspect-[5/4] md:w-full"
		>
			<iframe
				title="Interactice google map showing the location of Agi Reflexology"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.3222201689268!2d-0.6603834728789147!3d51.53896564052878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487665ff26d86315%3A0x13a3816db920c66a!2sAgi%20Reflexology!5e0!3m2!1sen!2suk!4v1747293250234!5m2!1sen!2suk"
				class="h-full w-full"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
		<ul class="flex w-full flex-wrap justify-center gap-4 md:gap-5 *:max-w-sm supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:md:grid-cols-2">
			<BasicCard includeMaxWidthStyling={false} type="neutral" element="li" class="items-start p-6 text-left">
				<Text type="h3" style="paraBase" class="font-ui font-semibold">1. Book Your Session</Text>
				<Text type="h3" style="paraBase" class="text-neutral-500">
					Choose your treatment and book using the links on this site. You’ll be able to select your preferred location or request a home visit. You
					can also contact me with any questions.
				</Text>
			</BasicCard>
			<BasicCard includeMaxWidthStyling={false} type="neutral" element="li" class="items-start p-6 text-left">
				<Text type="h3" style="paraBase" class="font-ui font-semibold">2. Arrive and Settle In</Text>
				<Text type="h3" style="paraBase" class="text-neutral-500">
					Whether at my home space or a studio, you’ll be welcomed into a quiet, calming environment. We begin with a short check-in to tailor the
					session to how you’re feeling that day.
				</Text>
			</BasicCard>
			<BasicCard includeMaxWidthStyling={false} type="neutral" element="li" class="items-start p-6 text-left">
				<Text type="h3" style="paraBase" class="font-ui font-semibold">3. Gentle, Intuitive Work</Text>
				<Text type="h3" style="paraBase" class="text-neutral-500">
					Each massage is shaped by what your body needs. I use slow, focused pressure and calming rhythm to support your nervous system and ease held
					tension — without overwhelming it.
				</Text>
			</BasicCard>
			<BasicCard includeMaxWidthStyling={false} type="neutral" element="li" class="items-start p-6 text-left">
				<Text type="h3" style="paraBase" class="font-ui font-semibold">4. Aftercare & Reflection</Text>
				<Text type="h3" style="paraBase" class="text-neutral-500">
					We’ll take a moment to reflect on how you feel and discuss any next steps. Most people notice a deep sense of calm that continues unfolding
					in the hours and days afterward.
				</Text>
			</BasicCard>
		</ul>
		<div class="flex flex-col gap-3 md:flex-row">
			<Button
				size={4}
				type="primary"
				ariaLabel="View my treatments page
            to see which of my services could benefit you"
				href="/treatments"
			>
				Explore My Treatments
			</Button>
			<Button
				size={4}
				type="plain"
				ariaLabel="View my treatments page
            to see which of my services could benefit you"
				href="/locations"
			>
				View My Locations
			</Button>
		</div>
	</Container>
</Section>
