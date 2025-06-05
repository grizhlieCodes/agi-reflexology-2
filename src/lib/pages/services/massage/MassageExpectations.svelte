<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import Text from '$lib/components/ui/Text.svelte';

	const pb_img = {
		id: 'qlv612l0vrm532v',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Relaxing Massage Session',
		slug: 'relaxing-massage-session',
		folder: 'midjourney',
		tags: ['massage'],
		created: '2025-06-04 21:59:44.812Z',
		updated: '2025-06-05 09:07:18.212Z',
		image_name: 'Relaxing Massage Session',
		alt_text:
			'A serene scene depicting a woman receiving a massage. She is lying on a soft surface, eyes closed, with a peaceful expression. A person is gently holding her neck and head, providing a soothing massage. The background features lush green ferns, adding to the calming atmosphere. The woman is wearing a light-colored, loose-fitting top, and her hair is cascading over the side.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-lg.png',
				filesize: 456838,
				format: 'png',
				height: 1024,
				name: 'lg.png',
				width: 1024
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-md.png',
				filesize: 456838,
				format: 'png',
				height: 1024,
				name: 'md.png',
				width: 1024
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-original.png',
				filesize: 456838,
				format: 'png',
				height: 1024,
				name: 'original.png',
				width: 1024
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-sm.png',
				filesize: 275800,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-thumbnail.webp',
				filesize: 6264,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-webp.webp',
				filesize: 83506,
				format: 'webp',
				height: 1024,
				name: 'webp.webp',
				width: 1024
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-massage-session-xs.png',
				filesize: 123261,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="massage-expectations-for-client"
	grid_span="centeredSpan3"
	vertical_padding={9}
>
	<Container class="md:flex-row">
		<div class="aspect-square w-full min-w-xs md:max-w-xs">
			<Image
				containerClass="-scale-x-100"
				record={pb_img}
			></Image>
		</div>
		<div class="flex grow flex-col items-center gap-4 md:items-start md:text-left">
			<div>
				<Text type="span" style="eyebrow">What to Expect</Text>
				<Text type="h2" id="" style="h6">A Calmer Approach to Massage</Text>
			</div>
			<Text style="paraBase" type="p">
				My massage sessions don’t push through tension — they listen to it. Using slow, responsive
				techniques, I support your body’s natural unwinding process without force or pressure
				overload. Each session is shaped around you — your energy, your breath, your body’s signals.
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
