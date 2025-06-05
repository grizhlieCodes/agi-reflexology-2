<script lang="ts">
	import { bounceInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms';
	import FormInput from './FormInput.svelte';
	import { SendHorizontal, Check, CircleX, LoaderCircle } from 'lucide-svelte';
	import Button from '../ui-interactive/Button.svelte';
	import Image from '../ui/Image.svelte';
	import Text from '../ui/Text.svelte';
	let {
		inputs = [],
		action = '',
		method = 'POST',
		image,
		dataForm
	}: {
		inputs: any;
		action?: string;
		method?: 'POST';
		image?: any;
		dataForm: any;
	} = $props();

	let formSubmissionButtonState = $state('send');

	const { form, enhance, errors } = $state(
		superForm(dataForm, {
			resetForm: false,
			dataType: 'json',
			invalidateAll: false,
			onResult: ({ result }) => {
				console.log(result);
				if (result.type === 'success') {
					formSubmissionButtonState = 'sent';
					return;
				}
				if (result.type === 'failure') {
					formSubmissionButtonState = 'error';
				}
			}
		})
	);

	const buttonColors: any = {
		send: 'bg-sky-500 hover:bg-sky-700 focus-within:bg-sky-700',
		sent: 'bg-primary-400',
		error: 'bg-danger-500',
		sending: 'bg-sky-500'
	};

	let buttonSelectedCol = $derived(buttonColors[formSubmissionButtonState]);
</script>

<div
	class=" bg-primary-50 dark:bg-primary-950 border-primary-200 dark:border-primary-700 grid w-full grid-cols-1
overflow-hidden rounded-2xl border lg:grid-cols-[1.25fr_1fr]"
>
	<form
		oninput={() => {
			if (formSubmissionButtonState !== 'send') {
				formSubmissionButtonState = 'send';
			}
		}}
		{action}
		{method}
		use:enhance
		class="row-start-2 flex flex-wrap gap-x-3 gap-y-5 p-6 lg:row-start-1 lg:p-10"
	>
		<div class="flex w-full flex-col items-start text-left">
			<Text type="h2" style="h6">Get In Touch</Text>
			<Text type="p" style="para4"
				>Please use this form if you have a question about my services, reflexology or locations. I
				will try getting back to you within 48 working-hours.</Text
			>
		</div>
		{#each inputs as input}
			<FormInput
				id={input.id}
				label={input.label}
				placeholder={input.placeholder}
				bind:value={$form[input.id]}
				type={input.type}
				errors={$errors[input.id]}
				class={input.class}
				autocomplete={input.autocomplete}
			></FormInput>
		{/each}
		<Button
			ariaLabel="Click to submit form"
			type="primary"
			size={4}
			class={buttonSelectedCol}
			onclick={() => {
				console.log('clicked send');
				formSubmissionButtonState = 'sending';
			}}
		>
			{#if formSubmissionButtonState === 'send'}
				<div class="col-start-1 row-start-1 flex items-center gap-2">
					<span transition:fly={{ x: 15, duration: 225, easing: bounceInOut }}>Send</span>
					<div transition:fly={{ x: 15, duration: 200, easing: bounceInOut }}>
						<SendHorizontal class="size-6" />
					</div>
				</div>
			{:else if formSubmissionButtonState === 'sending'}
				<div class="col-start-1 row-start-1 flex items-center gap-2">
					<div transition:fly={{ x: -15, duration: 335, easing: bounceInOut }} class="animate-spin">
						<LoaderCircle class="size-6" />
					</div>
					<span transition:fly={{ x: -15, duration: 300, easing: bounceInOut }}>Sending...</span>
				</div>
			{:else if formSubmissionButtonState === 'sent'}
				<div class="col-start-1 row-start-1 flex items-center gap-2">
					<div transition:fly={{ x: -15, duration: 335, easing: bounceInOut }}>
						<Check class="size-6" />
					</div>
					<span transition:fly={{ x: -15, duration: 300, easing: bounceInOut }}>Sent!</span>
				</div>
			{:else if formSubmissionButtonState === 'error'}
				<div class="col-start-1 row-start-1 flex items-center gap-2">
					<div transition:fly={{ x: -15, duration: 335, easing: bounceInOut }}>
						<CircleX class="size-6" />
					</div>
					<span transition:fly={{ x: -15, duration: 300, easing: bounceInOut }}>Error</span>
				</div>
			{/if}
		</Button>
	</form>
	{#if image}
		<div
			class="col-start-1 row-start-1 aspect-video h-full w-full
		lg:col-start-2 lg:row-start-1 lg:aspect-auto"
		>
			<Image record={image} containerClass="!rounded-none" brightness={15}></Image>
		</div>
	{/if}
</div>
