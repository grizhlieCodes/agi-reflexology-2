import type Badge from '$lib/components/ui/Badge.svelte';
import type * as pc from '$lib/schemas/components/priceCard';
import { MapPinHouse, Store, Car, AlarmClock, Check, X, MapPin } from 'lucide-svelte';

type BadgeType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export const getDayBadges = (days: string[]): pc.Badge[] => {
	// days = "mon,tue,wed,etc"
	let result: any[] = [];

	const dayNames = {
		mon: 'Monday',
		tue: 'Tuesday',
		wed: 'Wednesday',
		thur: 'Thursday',
		fri: 'Friday',
		sat: 'Saturday',
		sun: 'Sunday'
	};

	days.forEach((dayName: string) => {
		let newDayName = dayNames[dayName];
		result.push({
			type: 'default',
			content: newDayName,
			Icon: null
		});
	});
	return result;
};

export const getLocationBadges = (locationKeys: string[], type: BadgeType = 'info'): pc.Badge[] => {
	const templates: Record<string, Omit<pc.Badge, 'type'>> = {
		agi: {
			Icon: MapPinHouse,
			content: "Burnham"
		},
		chelsea: {
			Icon: Store,
			content: 'Chelsea'
		},
		bayswater: {
			Icon: Store,
			content: 'Bayswater'
		},
		home_visit: {
			Icon: Car,
			content: 'Home Visit'
		}
	};

	return locationKeys.map((key) => {
		if (templates[key]) {
			// known location
			return { type, ...templates[key] };
		}

		// fallback: title-case the key, use generic pin icon
		const content = key
			.split(/[\s-_]+/)
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ');
		return { type, Icon: MapPin, content };
	});
};

export const getTimeBadge = (timeDuration: number): pc.Badge[] => [{ type: 'primary', Icon: AlarmClock, content: `${timeDuration}min` }];

export const getBodyPartAreaBadges = (massageAreaNames: string[]): pc.Badge[] => {
	let result: any[] = [];
	massageAreaNames.forEach((word) => {
		const isSeperator = ['and', 'or'].includes(word.trim().toLowerCase());
		if (isSeperator) {
			result.push({
				type: 'default',
				content: word,
				Icon: null
			});
		} else {
			result.push({
				type: 'primary',
				content: word.charAt(0).toUpperCase() + word.slice(1),
				Icon: null
			});
		}
	});

	return result;
};

export const getServiceAvailabilityBadges = (serviceAvailabilities: string): pc.Badge[] => {
	let result: any[] = [];

	serviceAvailabilities.split(',').forEach((availability) => {
		const availabilityItems = availability.split('-');
		const available = availabilityItems[1] === 'true';
		const content = availabilityItems[0].charAt(0).toLocaleUpperCase() + availabilityItems[0].slice(1);

		let Icon = available ? Check : X;
		let type = available ? 'primary' : 'danger';

		result.push({
			type,
			Icon,
			content
		});
	});

	return result;
};
