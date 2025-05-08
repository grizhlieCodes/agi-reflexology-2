// export type IconComponent = React.ComponentType<any> | null;
import type { Icon as IconType } from '@lucide/svelte';

// --- Badge Item Type ---
// This is the structure for individual items within the badge arrays (location, time, etc.)
export type BadgeDisplayType = 'default' | 'primary' | 'info'; // Add more if you have other types

export interface BadgeItem {
	type: BadgeDisplayType;
	Icon: IconType | null; // Can be an Icon component or null
	content: string;
}

// --- Card Badges Type ---
// This defines the structure of the 'badges' object within a PriceCard
export interface CardBadges {
	location: BadgeItem[];
	time: BadgeItem[];
	key_info: BadgeItem[];
	additional_info: BadgeItem[];
}

// --- Card Button Type ---
// This defines the structure of the 'button' object within a PriceCard
export interface CardButton {
	content: string;
	icon: IconComponent; // Assuming button icon can also be a component or null
	href: string;
}

// --- Price Card Type ---
// This is the main type for an individual price card object
export interface PriceCard {
	cost: number;
	title: string;
	duration: number; // Assuming duration is in minutes or some consistent numeric unit
	divider?: boolean;
	badges: CardBadges;
	description: string;
	button: CardButton;
}
