<script lang="ts">
	import { cn } from '$lib/scripts/utils';
	import type { Badge, BadgeTypeMap } from '$lib/schemas/components/badgeTypes';

	let { children, type, class: className, ...restProps }: Badge = $props();
	let types: BadgeTypeMap = {
		default: 'badgeDefault',
		primary: 'badgePrimary',
		secondary: 'badgeSecondary',
		success: 'badgeSuccess',
		warning: 'badgeWarning',
		danger: 'badgeDanger',
		info: 'badgeInfo'
	};

	let badgeType = $derived(types[type]);

	let defaultBadgeStyling =
		'flex gap-1.5 items-center font-ui badge text-sm font-medium transition-colors duration-150 **:transition-colors **:duration-300 rounded-md px-1.5 py-1';
	let styles = $derived(cn(defaultBadgeStyling, className));
</script>

<span class="{styles} {badgeType} [&_svg]:size-4.5" {...restProps}>
	{@render children()}
</span>

<style>
	@reference "../../../app.css";

	:global(.badge.badgeDefault) {
		--badge-bg: var(--color-neutral-100);
		--badge-bg_hover: var(--color-neutral-200);
		--badge-text: var(--color-neutral-500);
		--badge-text_hover: var(--color-neutral-600);

		--badge-bg_dark: var(--color-neutral-800);
		--badge-bg_hover_dark: var(--color-neutral-700);
		--badge-text_dark: var(--color-neutral-300);
		--badge-text_hover_dark: var(--color-neutral-200);
	}
	:global(.badge.badgePrimary) {
		--badge-bg: var(--color-primary-100);
		--badge-bg_hover: var(--color-primary-200);
		--badge-text: var(--color-primary-500);
		--badge-text_hover: var(--color-primary-600);

		--badge-bg_dark: var(--color-primary-800);
		--badge-bg_hover_dark: var(--color-primary-700);
		--badge-text_dark: var(--color-primary-300);
		--badge-text_hover_dark: var(--color-primary-200);
	}
	:global(.badge.badgeSecondary) {
		--badge-bg: var(--color-secondary-100);
		--badge-bg_hover: var(--color-secondary-200);
		--badge-text: var(--color-secondary-500);
		--badge-text_hover: var(--color-secondary-600);

		--badge-bg_dark: var(--color-secondary-800);
		--badge-bg_hover_dark: var(--color-secondary-700);
		--badge-text_dark: var(--color-secondary-300);
		--badge-text_hover_dark: var(--color-secondary-200);
	}
	:global(.badge.badgeSuccess) {
		--badge-bg: var(--color-green-100);
		--badge-bg_hover: var(--color-green-200);
		--badge-text: var(--color-green-500);
		--badge-text_hover: var(--color-green-600);

		--badge-bg_dark: var(--color-green-900);
		--badge-bg_hover_dark: var(--color-green-800);
		--badge-text_dark: var(--color-green-400);
		--badge-text_hover_dark: var(--color-green-300);
	}
	:global(.badge.badgeWarning) {
		--badge-bg: var(--color-warning-100);
		--badge-bg_hover: var(--color-warning-200);
		--badge-text: var(--color-warning-500);
		--badge-text_hover: var(--color-warning-600);

		--badge-bg_dark: var(--color-warning-900);
		--badge-bg_hover_dark: var(--color-warning-800);
		--badge-text_dark: var(--color-warning-400);
		--badge-text_hover_dark: var(--color-warning-300);
	}
	:global(.badge.badgeDanger) {
		--badge-bg: var(--color-danger-100);
		--badge-bg_hover: var(--color-danger-200);
		--badge-text: var(--color-danger-500);
		--badge-text_hover: var(--color-danger-600);

		--badge-bg_dark: var(--color-danger-900);
		--badge-bg_hover_dark: var(--color-danger-800);
		--badge-text_dark: var(--color-danger-400);
		--badge-text_hover_dark: var(--color-danger-300);
	}
	:global(.badge.badgeInfo) {
		--badge-bg: var(--color-info-100);
		--badge-bg_hover: var(--color-info-200);
		--badge-text: var(--color-info-500);
		--badge-text_hover: var(--color-info-600);

		--badge-bg_dark: var(--color-info-900);
		--badge-bg_hover_dark: var(--color-info-800);
		--badge-text_dark: var(--color-info-400);
		--badge-text_hover_dark: var(--color-info-300);
	}

	:global(.badge) {
		@apply bg-(--badge-bg) text-(--badge-text) hover:bg-(--badge-bg_hover) hover:text-(--badge-text_hover) dark:bg-(--badge-bg_dark) dark:text-(--badge-text_dark) dark:hover:bg-(--badge-bg_hover_dark) dark:hover:text-(--badge-text_hover_dark);
	}
</style>
