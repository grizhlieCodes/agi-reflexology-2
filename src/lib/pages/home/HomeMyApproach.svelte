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

	const img_record = {
		id: 't31wczfnu8bkg6v',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Foot Massage Relaxation',
		slug: 'foot-massage-relaxation',
		folder: 'midjourney',
		tags: ['home'],
		created: '2025-06-04 21:59:42.914Z',
		updated: '2025-06-05 08:54:38.151Z',
		image_name: 'Foot Massage Relaxation',
		alt_text:
			"A close-up view of a person's feet resting on a soft towel, with hands gently massaging the ankles. The background features lush green foliage and a few smooth stones, creating a serene and calming atmosphere. The lighting is warm and soft, enhancing the tranquil setting.",
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-lg.png',
				filesize: 445347,
				format: 'png',
				height: 1024,
				name: 'lg.png',
				width: 1024
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-md.png',
				filesize: 445347,
				format: 'png',
				height: 1024,
				name: 'md.png',
				width: 1024
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-original.png',
				filesize: 445347,
				format: 'png',
				height: 1024,
				name: 'original.png',
				width: 1024
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-sm.png',
				filesize: 269458,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-thumbnail.webp',
				filesize: 7306,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-webp.webp',
				filesize: 91036,
				format: 'webp',
				height: 1024,
				name: 'webp.webp',
				width: 1024
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-relaxation-xs.png',
				filesize: 118298,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Section
	section_id="homepage-my-approach"
	horizontal_padding={4}
	vertical_padding={8}
	grid_span="fullSpan"
>
	<Container class="gap-10 md:gap-16 lg:gap-20">
		<div
			class="flex w-full flex-col items-center gap-6 md:flex-row-reverse
		md:items-start lg:gap-10"
		>
			<div class="aspect-square w-full max-w-md md:min-w-xs lg:max-w-sm">
				<Image
					record={img_record}
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
					As your body returns to balance, I follow what it’s truly asking for, moment to moment.
					These are the qualities that shape every session:
				</Text>
				<!-- Turn this into a list comp -->
				<DecoratedList item_list={APPROACH_LIST} Icon={Leaf}></DecoratedList>
			</div>
		</div>
	</Container>
</Section>
