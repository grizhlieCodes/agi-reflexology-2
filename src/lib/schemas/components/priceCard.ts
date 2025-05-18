import type { ComponentType, SvelteComponent } from 'svelte';

// --- Icon types ---
export interface IconComponentProps {
  size?: string;
  color?: string;
  class?: string;
  [prop: string]: any;
}
export type IconType = ComponentType<SvelteComponent<IconComponentProps>>;

// --- Badge ---
export type BadgeKind = 'default' | 'info' | 'primary';
export interface Badge {
  type: BadgeKind;
  content: string;
  Icon: IconType | null;
}

// --- Badge generators (align with badge.get*Names) ---
export function getLocationBadges(
  locationKeys: string,
  kind?: BadgeKind
): Badge[];

export function getTimeBadge(
  durationMinutes: number
): Badge[];

export function getMassageAreaBadges(
  areaKeys: string
): Badge[];

export function getDayBadges(
  dayKeys: string
): Badge[];

// --- Price card sub-types ---
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

// --- Base and specific PriceCard definitions ---
interface PriceCardBase {
  type: string;
  title: string;
  description: string;
  button: PriceCardButton;
  badges: PriceCardBadges;
  locations: string[];
  body_part: string[];
  days: string[];
}

// For treatments (with cost, duration, single location)
export interface TreatmentPriceCard extends PriceCardBase {
  type: 'agi_price_card';
  cost?: number;
  duration: number;
  location?: string;
}

// For reflexions (no cost/duration/location fields)
export interface ReflexionsPriceCard extends PriceCardBase {
  type: 'reflexions_price_card';
}

// Union type for all price cards
export type PriceCard = TreatmentPriceCard | ReflexionsPriceCard;
