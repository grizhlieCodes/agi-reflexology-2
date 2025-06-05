<script lang="ts">
	import Image from './Image.svelte';
	import Text from './Text.svelte';

	type Testimonial = {
		children: any;
		quotationMark?: boolean;
		authorName: string;
		authorTitle?: string;
	};
	let { children, quotationMark = true, authorName, authorTitle }: Testimonial = $props();

	let pb_img = {
		id: 'vasdj3s29x328m8',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Stylized Quotation Marks',
		slug: 'stylized-quotation-marks',
		folder: 'chatgpt-icon',
		tags: ['shared'],
		created: '2025-06-04 21:40:31.697Z',
		updated: '2025-06-05 08:55:13.534Z',
		image_name: 'Stylized Quotation Marks',
		alt_text:
			'A pair of stylized quotation marks in a glossy, mint green color. The marks are smooth and rounded, set against a soft, blurred background that transitions from light to dark shades of green. The overall appearance is modern and artistic, emphasizing the shape and color of the quotation marks.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-lg.png',
				filesize: 131088,
				format: 'png',
				height: 1024,
				name: 'lg.png',
				width: 1024
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-md.png',
				filesize: 131088,
				format: 'png',
				height: 1024,
				name: 'md.png',
				width: 1024
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-original.png',
				filesize: 145589,
				format: 'png',
				height: 1024,
				name: 'original.png',
				width: 1024
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-sm.png',
				filesize: 71780,
				format: 'png',
				height: 768,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-thumbnail.webp',
				filesize: 9278,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-webp.webp',
				filesize: 100766,
				format: 'webp',
				height: 1024,
				name: 'webp.webp',
				width: 1024
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/stylized-quotation-marks-xs.png',
				filesize: 20868,
				format: 'png',
				height: 480,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<div class="flex w-full flex-col gap-4">
	<Image
		record={pb_img}
		containerClass="size-10 -translate-x-3 -scale-x-100	rotate-180 text-inherit md:size-12 lg:size-16"
		decorate={false}
	></Image>
	<div class="flex flex-col gap-4">
		<Text type="p" style="h6" class="text-primary-800 dark:text-primary-200 font-normal">
			{@render children()}
		</Text>
		<div>
			{#if authorName}
				<!-- content here -->
				<Text type="p" style="para4" class="font-bold text-neutral-700 dark:text-neutral-300">
					{authorName}
				</Text>
			{/if}
			{#if authorTitle}
				<!-- content here -->
				<Text type="p" style="para4" class="text-neutral-400 dark:text-neutral-400">
					{authorTitle}
				</Text>
			{/if}
		</div>
	</div>
</div>
