// const price_cards = [
// 	{
// 		type: 'agi_price_card',
// 		cost: 65,
// 		title: 'Reflexology Session',
// 		duration: 60,
// 		description:
// 			'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['face', 'or', 'hands', 'or', 'feet'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 85,
// 		title: 'Extended Reflexology',
// 		duration: 90,
// 		description:
// 			'A deeper session for nervous system reset and relaxation. Choose between Face, Hands or Feet.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['face', 'or', 'hands', 'or', 'feet'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 85,
// 		title: 'Foot + Face Reflexology',
// 		duration: 90,
// 		description:
// 			'A full reset that combines facial and foot reflexology to rebalance both body and mind.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['face', 'and', 'feet'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 40,
// 		title: 'Head, Neck & Face Massage',
// 		duration: 30,
// 		description:
// 			'Targeted massage for upper body to release tension, ease fatigue, and calm your nervous system.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['head', 'and', 'face', 'and', 'neck'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 65,
// 		title: 'Back Tension Release',
// 		duration: 45,
// 		description:
// 			'Focused massage to ease muscle tightness and knots in the back. Ideal for chronic or acute pain.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['back'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 40,
// 		title: 'Front of Legs Massage',
// 		duration: 30,
// 		description:
// 			'Gentle release work across hips, thighs and shins to reduce built-up tightness or daily strain.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['legs'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 40,
// 		title: 'Back of Legs Massage',
// 		duration: 30,
// 		description:
// 			'Support for calves and hamstrings using slow, soothing massage to relax deep muscular tension.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['legs'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 40,
// 		title: 'Arms & Hands Massage',
// 		duration: 30,
// 		description:
// 			'Support for calves and hamstrings using slow, soothing massage to relax deep muscular tension.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['arms', 'and', 'hands'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 110,
// 		title: 'Aithein Full Body Massage',
// 		duration: 150,
// 		description:
// 			'A deep, intuitive massage to reset your whole body. Combines relaxation with energy flow work.',
// 		location_name: 'Agi\s Studio: Burnham',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['agi'],
// 		body_part: ['full body'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 75,
// 		title: 'Reflexology Session',
// 		duration: 60,
// 		description:
// 			'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
// 		location_name: 'Home Visit',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'home_visit', label: 'Home Visit' },
// 		locations: [
// 			'Beaconsfield',
// 			'Bisham',
// 			'Bourne End',
// 			'Cookham',
// 			'Farnham Common',
// 			'Forty Green',
// 			'Hedgerley',
// 			'Maidenhead',
// 			'Marlow',
// 			'Penn',
// 			'Stoke Poges',
// 			'Taplow',
// 			'Woodburn Green'
// 		],
// 		body_part: ['face', 'or', 'hands', 'or', 'feet'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 95,
// 		title: 'Extended Reflexology',
// 		duration: 90,
// 		description:
// 			'A deeper session for nervous system reset and relaxation. Choose between Face, Hands or Feet.',
// 		location_name: 'Home Visit',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'home_visit', label: 'Home Visit' },
// 		locations: [
// 			'Beaconsfield',
// 			'Bisham',
// 			'Bourne End',
// 			'Cookham',
// 			'Farnham Common',
// 			'Forty Green',
// 			'Hedgerley',
// 			'Maidenhead',
// 			'Marlow',
// 			'Penn',
// 			'Stoke Poges',
// 			'Taplow',
// 			'Woodburn Green'
// 		],
// 		body_part: ['face', 'or', 'hands', 'or', 'feet'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'agi_price_card',
// 		cost: 95,
// 		title: 'Foot + Face Reflexology',
// 		duration: 90,
// 		description:
// 			'A full reset that combines facial and foot reflexology to rebalance both body and mind.',
// 		location_name: 'Home Visit',
// 		button: {
// 			content: 'Book Treatment',
// 			icon: null,
// 			href: 'https://google.com'
// 		},
// 		location_type: { name: 'home_visit', label: 'Home Visit' },
// 		locations: [
// 			'Beaconsfield',
// 			'Bisham',
// 			'Bourne End',
// 			'Cookham',
// 			'Farnham Common',
// 			'Forty Green',
// 			'Hedgerley',
// 			'Maidenhead',
// 			'Marlow',
// 			'Penn',
// 			'Stoke Poges',
// 			'Taplow',
// 			'Woodburn Green'
// 		],
// 		body_part: ['face', 'and', 'feet'],
// 		days: ['mon', 'wed', 'thur', 'fri']
// 	},
// 	{
// 		type: 'reflexions_price_card',
// 		title: 'Reflexions',
// 		description:
// 			'I work in the Reflexions Chelsea and Bayswater studios on Tuesdays and Saturdays. Click the below button to see the locations and prices. Visit me there and make sure to request Aga when making your booking.',
// 		button: {
// 			content: 'Go To Fresha: Reflexions',
// 			icon: null,
// 			href: 'https://www.fresha.com/providers/reflexions-j8u52zlj?pId=424615'
// 		},
// 		location_type: { name: 'on_location', label: 'On Location' },
// 		locations: ['chelsea', 'bayswater'],
// 		body_part: ['face', 'or', 'hands', 'or', 'feet'],
// 		days: ['tue', 'sat']
// 	}
// ];

// let selected_location_type = 'home_visit';
// let filteredPriceCards = price_cards.filter((pc) => pc.location_type.name === selected_location_type);
// let newLocations = [...new Set(filteredPriceCards.map((pc) => pc.locations).flat())]; //?
// let aval_location_types = [];

// const updateAvalLocTypes = () => {
// 	aval_location_types = Array.from(
// 		new Map(price_cards.map((pc) => [pc.location_type.name, pc.location_type])).values()
// 	);
// };

// updateAvalLocTypes();

// console.log(aval_location_types); //?

// // const myMap = new Map([
// // 	['a', 1],
// // 	['b', 2],
// // 	['a', 1]
// // ]);

// // console.log([...myMap.values()]); //?

// // const arr = ['hehe', 'hoho', 'hehe'];

// // console.log([...new Set(arr)])

// const str1 = "taplow"
// const str2 = "great_taplow"

// export const returnLocationName = (string) => {
// 	return string.split('_').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")
// }

// convert(str1) //?
// convert(str2) //?

// const locations = ['bayswater'];

// const treatments = [{ locations: ['bayswater', 'chelsea'] }];

// const doIt = () => {
// 	return locations.some((location) => treatments[0].locations.map((loc) => loc.includes(location)));
// };

// console.log(doIt); //?

const routes = [
	{
		route: '/',
		sub_routes: null
	},
	{
		route: '/about',
		sub_routes: null
	},
	{
		route: '/services',
		sub_routes: ['reflexology', 'massage']
	},

	{
		route: '/locations',
		sub_routes: [
			'agi-studio/burnham',
			'reflexions/chelsea',
			'reflexions/bayswater',
			'home-visit/beaconsfield',
			'home-visit/bisham',
			'home-visit/bourne-end',
			'home-visit/cookham',
			'home-visit/farnham-common',
			'home-visit/forty-green',
			'home-visit/hedgerley',
			'home-visit/maidenhead',
			'home-visit/marlow',
			'home-visit/penn',
			'home-visit/stoke-poges',
			'home-visit/taplow',
			'home-visit/woodburn-green'
		]
	},
	{
		route: '/contact',
		sub_routes: null
	},
	{
		route: '/faq',
		sub_routes: null
	},
	{
		route: '/treatments',
		sub_routes: null
	},
	{
		route: '/privacy-policy',
		sub_routes: null
	},
	{
		route: '/disclaimer',
		sub_routes: null
	},
	{
		route: '/terms-and-conditions',
		sub_routes: null
	}
];

const createLinks = (arr) => {
	let res = [];
	arr.forEach((route) => {
		res.push(route.route);
		if (route.sub_routes && route.sub_routes.length > 0) {
			route.sub_routes.forEach((sub_route) => {
				console.log()
				res.push(`${route.route}/${sub_route}`);
			});
		}
	});

	return res;
};

createLinks(routes); //?
