// types.ts (or your relevant type definition file)
import type { ComponentType, SvelteComponent } from 'svelte'; // Ensure SvelteComponent is imported

// It's good practice to define the props type separately
export type IconComponentProps = {
    size?: string;
    color?: string;
    class?: string; // lucide-svelte icons often accept a class prop
    [prop: string]: any; // Keep this if icons might have other arbitrary props
};

// IconType should be a ComponentType of a SvelteComponent that accepts IconComponentProps
export type IconType = ComponentType<SvelteComponent<IconComponentProps>>;

// It's good practice to define the props type separately
export type IconComponentProps = {
    size?: string;
    color?: string;
    class?: string; // lucide-svelte icons often accept a class prop
    [prop: string]: any; // Keep this if icons might have other arbitrary props
};

// IconType should be a ComponentType of a SvelteComponent that accepts IconComponentProps
export type IconType = ComponentType<SvelteComponent<IconComponentProps>>;

// the three “kinds” of badge you use
export type BadgeKind = 'default' | 'info' | 'primary';

// a single badge (returned by getDays, getLocations, etc.)
export interface Badge {
	type: BadgeKind;
	content: string;
	Icon: IconType | null;
}

// --- function signatures ---

/**
 * @param days comma-separated day keys ("mon,tue,…")
 * @returns one Badge per day
 */
export function getDays(days: string): Badge[];

/**
 * @param locationNames comma-separated location keys ("agi,chelsea,…")
 * @returns one Badge per location
 */
export function getLocations(locationNames: string): Badge[];

/**
 * @param timeDuration in minutes
 * @returns a single “time” Badge
 */
export function getTime(timeDuration: number): Badge[];

/**
 * @param massageAreaNames comma-separated words (with “or”/“and”)
 * @returns one Badge per token
 */
export function getMassageAreas(massageAreaNames: string): Badge[];

// --- price card types ---

export interface PriceCardButton {
	content: string;
	icon: IconType | null;
	href: string;
}

export interface PriceCardBadges {
	location: Badge[];
	time: Badge[];
	massage_areas: Badge[];
	additional_info: Badge[];
}

export interface PriceCard {
	cost: number;
	title: string;
	duration: number;
	description: string;
	location: string;
	button: PriceCardButton;
	badges: PriceCardBadges;
}

