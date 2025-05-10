<script lang="ts">
	import type * as Type from './sectionTypes';
	import {
		gridSpanOptions,
		justifyContentOptions,
		alignItemsOptions,
		yPaddingOptions,
		xPaddingOptions,
		gapOptions,
		overflowOptions,
		backgroundOptions
	} from './sectionOptions';
	import { cn } from '$lib/scripts/utils';

	// Svelte 5 props declaration
	let {
		section_id,
		section_labelledby,
		type: typeProp, // Renamed to avoid conflict with HTML element type keyword
		grid_span: gridSpanProp,
		justify_content: justifyContentProp,
		align_items: alignItemsProp,
		background_color: backgroundColorProp,
		overflow: overflowProp,
		vertical_padding: verticalPaddingProp,
		horizontal_padding: horizontalPaddingProp,
		gap: gapProp,
		customStyling: customStylingProp,
		class: className,
		children
	}: Type.SectionProps = $props();

	// --- Apply defaults for optional props using nullish coalescing ---
	const type = typeProp ?? 'section';
	const grid_span = gridSpanProp ?? 'centeredSpan1';
	const justify_content = justifyContentProp ?? 'normal';
	const align_items = alignItemsProp ?? 'center';
	const background_color = backgroundColorProp ?? 'default';
	const overflow = overflowProp ?? 'visible';
	const vertical_padding = verticalPaddingProp ?? 4;
	const horizontal_padding = horizontalPaddingProp ?? 4;
	const gap = gapProp ?? 0;
	const customStyling = customStylingProp ?? '';


	// --- Computed classes using Svelte 5 $derived ---
	const sectionClasses = $derived.by(() => {
		const classes = [
			'flex', // Base class for flex layout
			'flex-col', // Default to column layout for section content

			gridSpanOptions[grid_span],
			justifyContentOptions[justify_content],
			alignItemsOptions[align_items],
			yPaddingOptions[String(vertical_padding) as Type.YPaddingType],
			xPaddingOptions[String(horizontal_padding) as Type.XPaddingType],
			gapOptions[String(gap) as Type.GapType],
			backgroundOptions[background_color],
			overflowOptions[overflow]
		];

		// Add mx-auto for centering if not fullSpan
		if (grid_span !== 'fullSpan') {
			classes.push('mx-auto');
		}

		// Add custom styling class if provided
		if (customStyling) {
			classes.push(customStyling);
		}

		return classes.filter(Boolean).join(' ');
	});

	let styles = $derived(cn(sectionClasses, className))
</script>

<svelte:element
	this={type}
	id={section_id}
	aria-labelledby={section_labelledby ?? `${section_id}_heading` }
	class={styles}
>
	{@render children()}
</svelte:element>