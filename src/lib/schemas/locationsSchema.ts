// locationTypes.ts
import type { Badge } from '$lib/schemas/components/priceCard';

// ——— Location Card ———
export interface LocationCard {
	id: string;
	title: string;
	description: string;
	button_href: string;
	badges: {
		location_badge: Badge[];
		day_badges: Badge[];
	};
	mapIframeSource: string;
}

// ——— Hero Section on a Location Page ———
export interface HeroImage {
	src: string;
	alt: string;
}

export interface HeroButton {
	content: string;
	href: string;
	aria_label: string;
}

export interface LocationPageHeroSection {
	id: string;
	title: string;
	description: string;
	image: HeroImage;
	badges: {
		location: Badge[];
		available_services: Badge[];
		available_days: Badge[];
	};
	buttons: {
		primary: HeroButton;
		secondary: HeroButton;
	};
}

// ——— Full Location Page ———
export interface LocationPage {
	hero_section: LocationPageHeroSection;
}

// ——— One Entry in your `locations` map ———
export interface LocationEntry {
	location_card: LocationCard;
	location_page: LocationPage;
}

// keyed by slug (e.g. “burnham”, “chelsea”, etc.)
export type LocationsMap = Record<string, LocationEntry>;

// ——— Sections (for `locationSections`) ———
export interface LocationButton {
	href: string;
}

export interface LocationSection {
	title: string;
	id: string;
	badges: {
		available_services: Badge[];
		available_days: Badge[];
	};
	description: string;
	location_button: LocationButton | null;
	locations: LocationEntry[];
}

export type LocationSections = LocationSection[];
