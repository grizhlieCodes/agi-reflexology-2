import type * as pc from '$lib/schemas/components/priceCard';
import { MapPinHouse, Store, Car, AlarmClock } from 'lucide-svelte';

const getDays = (days: string): pc.Badge[] => {
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

const getLocations = (locationNames: string, type?: string): pc.Badge[] => {
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
		result.push(locations[locationName]);
	});

	return result;
};

const getTime = (timeDuration: number): pc.Badge[] => [{ type: 'primary', Icon: AlarmClock, content: `${timeDuration}min` }];

const getMassageAreas = (massageAreaNames: string): pc.Badge[] => {
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

export const price_cards: pc.PriceCard[] = [
	{
		cost: 65,
		title: 'Reflexology Session',
		duration: 60,
		description: 'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
		location: 'Agi\s Studio: Burnham',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://google.com'
		},
		badges: {
			location: getLocations('agi', 'default'),
			time: getTime(60),
			massage_areas: getMassageAreas('face,or,hands,or,feet'),
			additional_info: [...getLocations('agi'), ...getDays('mon,wed,thur,fri')]
		}
	},
	{
		cost: 85,
		title: 'Extended Reflexology',
		duration: 90,
		description: 'A deeper session for nervous system reset and relaxation. Choose between Face, Hands or Feet.',
		location: 'Agi\s Studio: Burnham',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://google.com'
		},
		badges: {
			location: getLocations('agi', 'default'),
			time: getTime(90),
			massage_areas: getMassageAreas('face,or,hands,or,feet'),
			additional_info: [...getLocations('agi'), ...getDays('mon,wed,thur,fri')]
		}
	},
	{
		cost: 85,
		title: 'Foot + Face Reflexology',
		duration: 90,
		description: 'A full reset that combines facial and foot reflexology to rebalance both body and mind.',
		location: 'Agi\s Studio: Burnham',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://google.com'
		},
		badges: {
			location: getLocations('agi', 'default'),
			time: getTime(90),
			massage_areas: getMassageAreas('face,and,feet'),
			additional_info: [...getLocations('agi'), ...getDays('mon,wed,thur,fri')]
		}
	}
];
