import type { Snippet } from 'svelte';

// --- Literal Types for Prop Values ---

export type SectionHtmlTag = 'section' | 'article';

export type GridSpanType = 'centeredSpan1' | 'centeredSpan2' | 'centeredSpan3' | 'centeredSpan4' | 'centeredSpan5' | 'centeredSpan6' | 'fullSpan';
export type JustifyContentType = 'normal' | 'start' | 'end' | 'center' | 'stretch' | 'between' | 'around' | 'evenly';
export type AlignItemsType = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type BackgroundType = 'none' | 'default' | 'primary-50' | 'primary-100' | 'primary-200' | 'primary-300' | 'primary-400' | 'primary-500' | 'primary-600' | 'primary-700' | 'primary-800' | 'primary-900' | 'primary-950';
export type OverflowType = 'hidden' | 'scroll' | 'auto' | 'visible';

// Numeric range for padding/gap props
export type PaddingPropValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

// String key types for padding/gap option maps (matching keys in sectionOptions.ts)
export type StringKeyForPadding = `${PaddingPropValue}`;

// Aliases for specific padding/gap key types as used in original file and sectionOptions.ts
export type YPaddingType = StringKeyForPadding;
export type XPaddingType = StringKeyForPadding;
export type GapType = StringKeyForPadding;


// --- Option Map Record Types ---
// These define the shape of the constant objects in sectionOptions.ts

export type GridSpanOptions = Record<GridSpanType, string>;
export type JustifyContentOptions = Record<JustifyContentType, string>;
export type AlignItemsOptions = Record<AlignItemsType, string>;
export type YPaddingOptions = Record<YPaddingType, string>;
export type XPaddingOptions = Record<XPaddingType, string>;
export type GapOptions = Record<GapType, string>;
export type OverflowOptions = Record<OverflowType, string>;
export type BackgroundOptions = Record<BackgroundType, string>;


// --- Svelte Component Props Interface ---
export interface SectionProps {
	section_id: string;
	section_labelledby?: string;
	type?: SectionHtmlTag;
	grid_span?: GridSpanType;
	justify_content?: JustifyContentType;
	align_items?: AlignItemsType;
	background_color?: BackgroundType;
	overflow?: OverflowType;
	customStyling?: string;
	vertical_padding?: PaddingPropValue;
	horizontal_padding?: PaddingPropValue;
	gap?: PaddingPropValue;
	class?: string;
	children: Snippet; // Svelte 5 children prop
}