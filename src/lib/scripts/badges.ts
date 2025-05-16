import type Badge from '$lib/components/ui/Badge.svelte';
import type * as pc from '$lib/schemas/components/priceCard';
import { MapPinHouse, Store, Car, AlarmClock, Check, X, MapPin } from 'lucide-svelte';

type BadgeType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export const getDayBadges = (days: string): pc.Badge[] => {
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

	days.split(',').forEach((dayName: string) => {
		let newDayName = dayNames[dayName];
		result.push({
			type: 'default',
			content: newDayName,
			Icon: null
		});
	});
	return result;
};

export const getLocationBadges = (locationNames: 'agi' | 'chelsea' | 'bayswater' | 'home_visit' | string, type?: BadgeType): pc.Badge[] => {
	let result: any[] = [];

	const locations = {
		agi: {
			type: type ?? 'info',
			Icon: MapPinHouse,
			content: "Agi's Studio - Burnham"
		},
		chelsea: {
			type: type ?? 'info',
			Icon: Store,
			content: 'Reflexions: Chelsea'
		},
		bayswater: {
			type: type ?? 'info',
			Icon: Store,
			content: 'Reflexions: Bayswater'
		},
		home_visit: {
			type: type ?? 'info',
			Icon: Car,
			content: 'Home Visit'
		}
	};

	locationNames.split(',').forEach((locationName) => {
		if (['agi', 'chelsea', 'bayswater', 'home_visit'].includes(locationName)) {
			result.push(locations[locationName]);
		} else {
			let newContent = locationName
				.split(' ')
				.map((c) => c.charAt(0).toUpperCase() + c.slice(1))
				.join(' ');
			result.push({ type: type ?? 'info', Icon: MapPin, content: newContent });
		}
	});

	return result;
};

export const getTimeBadge = (timeDuration: number): pc.Badge[] => [{ type: 'primary', Icon: AlarmClock, content: `${timeDuration}min` }];

export const getMassageAreaBadges = (massageAreaNames: string): pc.Badge[] => {
	let result: any[] = [];
	massageAreaNames.split(',').forEach((word) => {
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
