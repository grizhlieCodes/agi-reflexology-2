<script lang="ts">
	import Form from '$lib/components/form/Form.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import PageCta from '$lib/pages/shared/PageCta.svelte';

	let { data } = $props(); // Coming from load function in the server (+page.server.ts)
	$inspect(data.form);

	const formInputs = [
		{
			id: 'first_name',
			label: 'First Name',
			placeholder: 'Jane',
			type: 'text',
			required: true,
			class: 'grow',
			autocomplete: 'given-name'
		},
		{
			id: 'second_name',
			label: 'Second Name',
			placeholder: 'Doe',
			type: 'text',
			required: true,
			class: 'grow',
			autocomplete: 'family-name'
		},
		{
			id: 'email',
			label: 'Email',
			placeholder: 'jane.doe@example.com',
			type: 'email',
			required: true,
			class: 'w-full grow',
			autocomplete: 'email'
		},
		{
			id: 'phone_number',
			label: 'Phone Number (E.164)',
			placeholder: '+11234567890',
			type: 'tel',
			class: 'w-full grow',
			autocomplete: 'tel'
		},
		{
			id: 'subject',
			label: 'Subject',
			placeholder: 'Inquiry about...',
			type: 'text',
			required: true,
			class: 'w-full grow'
		},
		{
			id: 'message',
			label: 'Message',
			placeholder: 'Your message here...',
			type: 'textarea',
			required: true,
			class: 'w-full grow'
		}
	];

	const pb_img = {
		id: 'h038h459y95tb1f',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Massage Therapy Room',
		slug: 'massage-therapy-room',
		folder: 'photographs',
		tags: ['location', 'burnham', 'contact'],
		created: '2025-06-04 21:36:37.112Z',
		updated: '2025-06-05 09:26:30.166Z',
		image_name: 'Massage Therapy Room',
		alt_text:
			'A serene massage therapy room featuring a massage table covered with a light-colored sheet. Two rolled towels, one gray and one beige, are neatly placed on the table. A small candle is lit on a round wooden side table, and another table holds a potted plant. The room has large windows with sheer curtains, allowing natural light to filter in, and a decorative folding screen is visible in the background.',
		variants: {
			lg: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-lg.jpeg',
				filesize: 2087092,
				format: 'jpeg',
				height: 2560,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-md.jpeg',
				filesize: 939167,
				format: 'jpeg',
				height: 1707,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-original.jpeg',
				filesize: 4794469,
				format: 'jpeg',
				height: 4032,
				name: 'original.jpeg',
				width: 3024
			},
			sm: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-sm.jpeg',
				filesize: 345669,
				format: 'jpeg',
				height: 1024,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-thumbnail.webp',
				filesize: 5176,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-webp.webp',
				filesize: 654454,
				format: 'webp',
				height: 4032,
				name: 'webp.webp',
				width: 3024
			},
			xs: {
				bunny_url:
					'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-xs.jpeg',
				filesize: 141501,
				format: 'jpeg',
				height: 640,
				name: 'xs.jpeg',
				width: 480
			}
		}
	};
</script>

<Section section_id="contact-form" vertical_padding={20} grid_span="centeredSpan3">
	<Container>
		<Form method="POST" dataForm={data.form} inputs={formInputs} image={pb_img}></Form>
	</Container>
</Section>

<PageCta></PageCta>
