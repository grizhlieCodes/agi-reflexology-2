<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import { Button } from 'bits-ui';
	import type { ButtonProps } from '$lib/schemas/components/buttonTypes';

	type ButtonTypes = 'default' | 'default_light' | 'primary' | 'outline' | 'plain' | 'secondary' | 'warning' | 'danger' | 'info';
	type ButtonSizes = 1 | 2 | 3 | 4 | 5;

	let iconSizes = {
		1: 4,
		2: 4,
		3: 4,
		4: 5,
		5: 6
	};

	let paddings = {
		1: 'px-2 py-1',
		2: 'px-2 py-1',
		3: 'px-2.5 py-1.5',
		4: 'px-3 py-2',
		5: 'px-4 py-2'
	};

	let paddingsIconOnly = {
		1: 'p-1',
		2: 'p-1.5',
		3: 'p-2',
		4: 'p-2.5',
		5: 'p-3'
	};

	let gaps = {
		1: 'gap-2',
		2: 'gap-2',
		3: 'gap-2',
		4: 'gap-2.5',
		5: 'gap-2.5'
	};

	let borderRadiuses = {
		1: 'rounded-lg',
		2: 'rounded-lg',
		3: 'rounded-lg',
		4: 'rounded-xl',
		5: 'rounded-xl'
	};

	let textSizes = {
		1: 'text-xs',
		2: 'text-sm',
		3: 'text-sm',
		4: 'text-base',
		5: 'text-lg'
	};

	let types = {
		default: 'btnDefault',
		default_light: 'btnDefaultInvert',
		primary: 'btnPrimary',
		outline: 'btnOutline',
		plain: 'btnPlain',
		secondary: 'btnSecondary',
		warning: 'btnWarning',
		danger: 'btnDanger',
		info: 'btnInfo'
	};

	let { children, href, type, size, onclick, ariaLabel, disabled = false, iconOnly = false, class: className, ...restProps }: ButtonProps = $props();

	let BASE_STYLES = `button font-ui flex flex-row items-center justify-center cursor-pointer outline-2 outline-offset-3 outline-transparent transition-all not-disabled:active:scale-95 border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50`;

	let iconSize = $derived(iconSizes[size]);
	let padding = $derived(iconOnly ? paddingsIconOnly[size] : paddings[size]);
	let gap = $derived(gaps[size]);
	let borderRadius = $derived(borderRadiuses[size]);
	let textSize = $derived(textSizes[size]);
	let btnType = $derived(types[type]);
	let btnStyling = $derived(cn(BASE_STYLES, padding, gap, borderRadius, btnType, textSize, className));
</script>

<Button.Root {href} {disabled} class={btnStyling} aria-label={ariaLabel} onclick={onclick}>
	<div style:--icon-size="calc(var(--spacing)*{iconSize})"
	style:--text-size="calc(var()*)" class="[&_svg]:w-(--icon-size) grid">
		{@render children()}
	</div>
</Button.Root>

<style>
	@reference "../../../app.css";
	:global(.button.btnDefault) {
		--bg-default: var(--color-neutral-700);
		--bg-hover: var(--color-neutral-900);
		--border-default: var(--color-neutral-500);
		--outline-col: var(--color-neutral-500);
		--text-default: var(--color-neutral-100);
		--text-hover: var(--color-neutral-50);

		--bg-default_dark: var(--color-neutral-600);
		--bg-hover_dark: var(--color-neutral-500);
		--border-default_dark: var(--color-neutral-500);
		--outline-col_dark: var(--color-neutral-500);
		--text-default_dark: var(--color-neutral-100);
		--text-hover_dark: var(--color-neutral-50);
	}
	:global(.button.btnDefaultInvert) {
		--bg-default: var(--color-white);
		--bg-hover: var(--color-neutral-100);
		--border-default: var(--color-neutral-200);
		--outline-col: var(--color-neutral-400);
		--text-default: var(--color-neutral-700);
		--text-hover: var(--color-neutral-750);

		--bg-default_dark: var(--color-neutral-600);
		--bg-hover_dark: var(--color-neutral-500);
		--border-default_dark: var(--color-neutral-500);
		--outline-col_dark: var(--color-neutral-500);
		--text-default_dark: var(--color-neutral-100);
		--text-hover_dark: var(--color-neutral-50);
	}
	:global(.button.btnPrimary) {
		--bg-default: var(--color-primary-500);
		--bg-hover: var(--color-primary-700);
		--border-default: var(--color-primary-300);
		--outline-col: var(--color-primary-500);
		--text-default: var(--color-primary-50);
		--text-hover: var(--color-primary-50);

		--bg-default_dark: var(--color-primary-600);
		--bg-hover_dark: var(--color-primary-500);
		--border-default_dark: var(--color-primary-500);
		--outline-col_dark: var(--color-primary-500);
		--text-default_dark: var(--color-primary-50);
		--text-hover_dark: var(--color-primary-50);
	}
	:global(.button.btnSecondary) {
		--bg-default: var(--color-secondary-600);
		--bg-hover: var(--color-secondary-700);
		--border-default: var(--color-secondary-300);
		--outline-col: var(--color-secondary-500);
		--text-default: var(--color-secondary-50);
		--text-hover: var(--color-secondary-50);

		--bg-default_dark: var(--color-secondary-800);
		--bg-hover_dark: var(--color-secondary-600);
		--border-default_dark: var(--color-secondary-600);
		--outline-col_dark: var(--color-secondary-500);
		--text-default_dark: var(--color-secondary-50);
		--text-hover_dark: var(--color-secondary-50);
	}
	:global(.button.btnOutline) {
		--bg-default: transparent;
		--bg-hover: var(--color-neutral-100);
		--border-default: var(--color-neutral-200);
		--outline-col: var(--color-primary-500);
		--text-default: var(--color-neutral-600);
		--text-hover: var(--color-neutral-800);

		--bg-default_dark: transparent;
		--bg-hover_dark: var(--color-neutral-900);
		--border-default_dark: var(--color-neutral-500);
		--outline-col_dark: var(--color-neutral-500);
		--text-default_dark: var(--color-neutral-300);
		--text-hover_dark: var(--color-neutral-200);
	}
	:global(.button.btnPlain) {
		--bg-default: transparent;
		--bg-hover: var(--color-neutral-100);
		--border-default: transparent;
		--outline-col: var(--color-primary-500);
		--text-default: var(--color-neutral-500);
		--text-hover: var(--color-neutral-800);

		--bg-default_dark: transparent;
		--bg-hover_dark: var(--color-neutral-800);
		--border-default_dark: transparent;
		--outline-col_dark: var(--color-primary-500);
		--text-default_dark: var(--color-neutral-300);
		--text-hover_dark: var(--color-neutral-200);
	}
	:global(.button.btnWarning) {
		--bg-default: var(--color-warning-400);
		--bg-hover: var(--color-warning-500);
		--border-default: var(--color-warning-400);
		--outline-col: var(--color-warning-500);
		--text-default: var(--color-warning-700);
		--text-hover: var(--color-warning-900);

		--bg-default_dark: var(--color-warning-500);
		--bg-hover_dark: var(--color-warning-400);
		--border-default_dark: var(--color-warning-500);
		--outline-col_dark: var(--color-warning-500);
		--text-default_dark: var(--color-warning-950);
		--text-hover_dark: var(--color-warning-900);
	}
	:global(.button.btnDanger) {
		--bg-default: var(--color-danger-600);
		--bg-hover: var(--color-danger-800);
		--border-default: transparent;
		--outline-col: var(--color-danger-500);
		--text-default: var(--color-danger-50);
		--text-hover: var(--color-danger-50);

		--bg-default_dark: var(--color-danger-400);
		--bg-hover_dark: var(--color-danger-300);
		--border-default_dark: var(--color-danger-500);
		--outline-col_dark: var(--color-danger-400);
		--text-default_dark: var(--color-danger-950);
		--text-hover_dark: var(--color-danger-900);
	}
	:global(.button.btnInfo) {
		--bg-default: var(--color-info-600);
		--bg-hover: var(--color-info-800);
		--border-default: transparent;
		--outline-col: var(--color-info-500);
		--text-default: var(--color-info-50);
		--text-hover: var(--color-info-50);

		--bg-default_dark: var(--color-info-400);
		--bg-hover_dark: var(--color-info-300);
		--border-default_dark: var(--color-info-600);
		--outline-col_dark: var(--color-info-500);
		--text-default_dark: var(--color-info-900);
		--text-hover_dark: var(--color-info-900);
	}
	:global(.button) {
		@apply border-(--border-default) bg-(--bg-default) text-(--text-default) not-disabled:hover:bg-(--bg-hover) not-disabled:hover:text-(--text-hover) not-disabled:not-active:focus-visible:outline-(--outline-col) dark:border-(--border-default_dark) dark:bg-(--bg-default_dark) dark:text-(--text-default_dark) dark:not-disabled:hover:bg-(--bg-hover_dark) dark:not-disabled:hover:text-(--text-hover_dark) dark:not-disabled:not-active:focus-visible:outline-(--outline-col_dark);
	}
</style>
