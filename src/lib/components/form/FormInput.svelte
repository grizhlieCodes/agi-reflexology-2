<script lang="ts">
	import { slide } from 'svelte/transition';

	// Props for the FormInput component
	let {
		id, // Unique identifier for the input and label association
		label, // Optional label text for the input
		placeholder, // Optional placeholder text for the input
		errors, // Optional array or object of error messages (typically from Svelte Superforms)
		required = false, // Boolean indicating if the field is required (defaults to false)
		value = $bindable(), // The current value of the input, two-way bound
		type = 'text', // The type of the input (e.g., "text", "email", "password", "number"),
		class: className,
		autocomplete
	}: {
		id: string;
		label?: string;
		placeholder?: string;
		errors?: string[] | undefined | any; // Assuming errors for a field will be an array of strings
		required?: boolean;
		value?: string | number; // Using 'any' for flexibility, but could be narrowed down (e.g., string | number)
		type?:
			| 'text'
			| 'email'
			| 'password'
			| 'number'
			| 'search'
			| 'tel'
			| 'url'
			| 'date'
			| 'time'
			| 'datetime-local'
			| 'month'
			| 'week'
			| any; // Added more common input types
		class?: string;
		autocomplete: 'given-name' | 'family-name' | 'tel' | 'email';
	} = $props();

	let el: any = $state(null);

	const removeIt = () => {
		el.data;
	};

	// $inspect(errors[0]);
	let errs = $derived(errors && errors.length > 0 ? 'error' : '');
</script>

<div class="flex flex-col items-start gap-2 {className} text-left">
	<label
		for={id}
		class="font-ui w-full
			text-neutral-800 dark:text-neutral-300"
	>
		<span class="w-full">{label}{required ? '*' : ''}</span>
	</label>
	{#if type !== 'textarea'}
		<input
			bind:this={el}
			class:err={errs}
			{type}
			{id}
			name={id}
			{placeholder}
			bind:value
			{required}
			class="input"
			{autocomplete}
		/>
	{:else}
		<textarea
			bind:this={el}
			class:err={errs}
			{id}
			name={id}
			{placeholder}
			bind:value
			{required}
			class="input"
			rows="4"
			{autocomplete}
		></textarea>
	{/if}
	{#if errors && errors.length > 0}
		<div id={`${id}-errors`} class="errors" transition:slide>
			{#each errors as error}
				<p class="error-message text-(--input-error) dark:text-(--input-error_dark)">{error}</p>
			{/each}
		</div>
	{/if}
</div>

<style>
	@reference "../../../app.css";

	.input {
		--input-bg: white;
		--input-bg_dark: var(--color-primary-900);
		--input-bg_error: var(--color-danger-200);
		--input-bg_dark_error: var(--color-danger-950);

		--input-text: var(--color-neutral-500);
		--input-text_dark: var(--color-neutral-200);

		--input-placeholder: var(--color-neutral-300);
		--input-placeholder_dark: var(--color-neutral-300);

		--input-text_focus: var(--color-neutral-600);
		--input-text_dark_focus: var(--color-neutral-50);

		--input-border: var(--color-neutral-200);
		--input-border_dark: var(--color-neutral-700);
		--input-border_hover: var(--color-neutral-400);
		--input-border_dark_hover: var(--color-neutral-600);
		--input-border_error: var(--color-danger-400);
		--input-border_dark_error: var(--color-danger-800);

		--input-outline: var(--color-primary-500);
		--input-outline_dark: var(--color-primary-400);

		@apply font-ui w-full rounded-xl border border-(--input-border) bg-(--input-bg) px-3 py-2 text-base text-(--input-text) outline-2 outline-offset-2 outline-transparent transition-colors duration-300 placeholder:text-(--input-placeholder) focus-within:text-(--input-text_focus) focus-within:outline-(--input-outline) hover:cursor-text hover:border-(--input-border_hover) dark:border-(--input-border_dark) dark:bg-(--input-bg_dark) dark:text-(--input-text_dark) dark:placeholder:text-(--input-placeholder_dark) dark:focus-within:text-(--input-text_dark_focus) dark:focus-within:outline-(--input-outline_dark) dark:hover:border-(--input-border_dark_hover);
	}

	.err {
		@apply !border-(--input-border_error) bg-(--input-bg_error) dark:!border-(--input-border_dark_error) dark:bg-(--input-bg_dark_error);
	}

	.error-message {
		--input-error: var(--color-danger-500);
		--input-error_dark: var(--color-danger-400);
	}
</style>
