<script lang="ts">
	import Form from '$lib/components/form/Form.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';

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
</script>

<Section section_id="contact-form" vertical_padding={20} grid_span="centeredSpan3">
	<Container>
		<Form
			method="POST"
			dataForm={data.form}
			inputs={formInputs}
			image={{
				alt: 'A tranquil massage room featuring a bed topped with neatly folded towels and massage supplies. Soft candlelight glows from two side tables, creating a calming atmosphere. A window with potted plants adds a touch of nature, while a privacy screen stands in the background.',
				src: 'https://seerstudio.b-cdn.net/image-tests/IMG_1679.webp'
			}}
		></Form>
	</Container>
</Section>
