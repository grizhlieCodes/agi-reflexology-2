import * as badge from '$lib/scripts/badges';
import type { pc } from '$lib/schemas/components/priceCard';

// Simple ID generator
const generateId = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const price_cards: pc.PriceCard[] = [
	{
		id: generateId(),
		type: 'agi_price_card',
		cost: 60,
		title: 'Reflexology Session',
		duration: 60,
		description: 'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
		location_name: 'Agi\s Studio: Burnham',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://www.fresha.com/a/agi-reflexology-burnham-25-hall-meadow-vsdu68y7/booking?offerItems=sv:23278970'
		},
		location_type: { name: 'on_location', label: 'On Location' },
		locations: ['burnham'],
		body_part: ['face', 'or', 'hands', 'or', 'feet'],
		days: ['mon', 'wed', 'thur', 'fri'],
		treatment_type: 'reflexology'
	},
	{
		id: generateId(),
		type: 'agi_price_card',
		cost: 70,
		title: 'Extended Reflexology',
		duration: 90,
		description: 'A deeper session for nervous system reset and relaxation. Choose between Face, Hands or Feet.',
		location_name: 'Agi\s Studio: Burnham',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://www.fresha.com/a/agi-reflexology-burnham-25-hall-meadow-vsdu68y7/booking?offerItems=sv:23279001'
		},
		location_type: { name: 'on_location', label: 'On Location' },
		locations: ['burnham'],
		body_part: ['face', 'or', 'hands', 'or', 'feet'],
		days: ['mon', 'wed', 'thur', 'fri'],
		treatment_type: 'reflexology'
	},
	{
		id: generateId(),
		type: 'agi_price_card',
		cost: 70,
		title: 'Foot + Face Reflexology',
		duration: 90,
		description: 'A full reset that combines facial and foot reflexology to rebalance both body and mind.',
		location_name: 'Agi\s Studio: Burnham',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://www.fresha.com/a/agi-reflexology-burnham-25-hall-meadow-vsdu68y7/booking?offerItems=sv:23279059'
		},
		location_type: { name: 'on_location', label: 'On Location' },
		locations: ['burnham'],
		body_part: ['face', 'and', 'feet'],
		days: ['mon', 'wed', 'thur', 'fri'],
		treatment_type: 'reflexology'
	},
	{
		id: generateId(),
		type: 'agi_price_card',
		cost: 65,
		title: 'Reflexology Session',
		duration: 60,
		description: 'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
		location_name: 'Home Visit',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://www.fresha.com/a/agi-reflexology-burnham-25-hall-meadow-vsdu68y7/booking?offerItems=sv:23279120'
		},
		location_type: { name: 'home_visit', label: 'Home Visit' },
		locations: ['beaconsfield', 'bisham', 'bourne_end', 'cookham', 'farnham_common', 'forty_green', 'hedgerley', 'maidenhead', 'marlow', 'penn', 'stoke_poges', 'taplow', 'woodburn_green'],
		body_part: ['face', 'or', 'hands', 'or', 'feet'],
		days: ['mon', 'wed', 'thur', 'fri'],
		treatment_type: 'reflexology'
	},
	{
		id: generateId(),
		type: 'agi_price_card',
		cost: 75,
		title: 'Extended Reflexology',
		duration: 90,
		description: 'A deeper session for nervous system reset and relaxation. Choose between Face, Hands or Feet.',
		location_name: 'Home Visit',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://www.fresha.com/a/agi-reflexology-burnham-25-hall-meadow-vsdu68y7/booking?offerItems=sv:23279160'
		},
		location_type: { name: 'home_visit', label: 'Home Visit' },
		locations: ['beaconsfield', 'bisham', 'bourne_end', 'cookham', 'farnham_common', 'forty_green', 'hedgerley', 'maidenhead', 'marlow', 'penn', 'stoke_poges', 'taplow', 'woodburn_green'],
		body_part: ['face', 'or', 'hands', 'or', 'feet'],
		days: ['mon', 'wed', 'thur', 'fri'],
		treatment_type: 'reflexology'
	},
	{
		id: generateId(),
		type: 'agi_price_card',
		cost: 75,
		title: 'Foot + Face Reflexology',
		duration: 90,
		description: 'A full reset that combines facial and foot reflexology to rebalance both body and mind.',
		location_name: 'Home Visit',
		button: {
			content: 'Book Treatment',
			icon: null,
			href: 'https://www.fresha.com/a/agi-reflexology-burnham-25-hall-meadow-vsdu68y7/booking?offerItems=sv:23279213'
		},
		location_type: { name: 'home_visit', label: 'Home Visit' },
		locations: ['beaconsfield', 'bisham', 'bourne_end', 'cookham', 'farnham_common', 'forty_green', 'hedgerley', 'maidenhead', 'marlow', 'penn', 'stoke_poges', 'taplow', 'woodburn_green'],
		body_part: ['face', 'and', 'feet'],
		days: ['mon', 'wed', 'thur', 'fri'],
		treatment_type: 'reflexology'
	},
	{
		id: generateId(),
		type: 'reflexions_price_card',
		title: 'Reflexions',
		description: 'I work in the Reflexions Chelsea and Bayswater studios on Tuesdays and Saturdays. Click the below button to see the locations and prices. Visit me there and make sure to request Aga when making your booking.',
		button: {
			content: 'Go To Fresha: Reflexions',
			icon: null,
			href: 'https://www.fresha.com/providers/reflexions-j8u52zlj?pId=424615'
		},
		location_type: { name: 'on_location', label: 'On Location' },
		locations: ['chelsea', 'bayswater'],
		body_part: ['face', 'or', 'hands', 'or', 'feet'],
		days: ['tue', 'sat'],
		treatment_type: 'reflexology'
	}
];
