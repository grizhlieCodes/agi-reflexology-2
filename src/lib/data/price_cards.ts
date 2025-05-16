import * as badge from '$lib/scripts/badges';

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
			location: badge.getLocationBadges('agi', 'default'),
			time: badge.getTimeBadge(60),
			massage_areas: badge.getMassageAreaBadges('face,or,hands,or,feet'),
			additional_info: [...badge.getLocationBadges('agi'), ...badge.getDayBadges('mon,wed,thur,fri')]
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
			location: badge.getLocationBadges('agi', 'default'),
			time: badge.getTimeBadge(90),
			massage_areas: badge.getMassageAreaBadges('face,or,hands,or,feet'),
			additional_info: [...badge.getLocationBadges('agi'), ...badge.getDayBadges('mon,wed,thur,fri')]
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
			location: badge.getLocationBadges('agi', 'default'),
			time: badge.getTimeBadge(90),
			massage_areas: badge.getMassageAreaBadges('face,and,feet'),
			additional_info: [...badge.getLocationBadges('agi'), ...badge.getDayBadges('mon,wed,thur,fri')]
		}
	}
];
