<script>
	import Image from '$lib/components/ui/Image.svelte';

	const img = {
		id: 'v032un16s36zt65',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Green Question Mark',
		slug: 'green-question-mark',
		folder: 'midjourney',
		tags: ['shared'],
		created: '2025-06-04 21:59:05.176Z',
		updated: '2025-06-05 08:55:13.946Z',
		image_name: 'Green Question Mark',
		alt_text:
			'An aerial view of a large question mark made of lush green ferns, set against a textured gray stone background. Surrounding the question mark are various shades of green foliage, creating a vibrant and natural atmosphere. The lighting suggests a warm, sunny environment.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-lg.png',
				filesize: 3757551,
				format: 'png',
				height: 2688,
				name: 'lg.png',
				width: 1792
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-md.png',
				filesize: 1993415,
				format: 'png',
				height: 1920,
				name: 'md.png',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-original.png',
				filesize: 3757551,
				format: 'png',
				height: 2688,
				name: 'original.png',
				width: 1792
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-sm.png',
				filesize: 724282,
				format: 'png',
				height: 1152,
				name: 'sm.png',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-thumbnail.webp',
				filesize: 16526,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-webp.webp',
				filesize: 1798672,
				format: 'webp',
				height: 2688,
				name: 'webp.webp',
				width: 1792
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/green-question-mark-xs.png',
				filesize: 288384,
				format: 'png',
				height: 720,
				name: 'xs.png',
				width: 480
			}
		}
	};
</script>

<Image record={img} fallbackVariant="md"></Image>
