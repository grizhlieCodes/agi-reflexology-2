<script>
	const price_cards = [
		{
			type: 'agi_price_card',
			cost: 65,
			title: 'Reflexology Session',
			duration: 60,
			description:
				'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['face', 'or', 'hands', 'or', 'feet'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 85,
			title: 'Extended Reflexology',
			duration: 90,
			description:
				'A deeper session for nervous system reset and relaxation. Choose between Face, Hands or Feet.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['face', 'or', 'hands', 'or', 'feet'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 85,
			title: 'Foot + Face Reflexology',
			duration: 90,
			description:
				'A full reset that combines facial and foot reflexology to rebalance both body and mind.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['face', 'and', 'feet'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 40,
			title: 'Head, Neck & Face Massage',
			duration: 30,
			description:
				'Targeted massage for upper body to release tension, ease fatigue, and calm your nervous system.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['head', 'and', 'face', 'and', 'neck'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 65,
			title: 'Back Tension Release',
			duration: 45,
			description:
				'Focused massage to ease muscle tightness and knots in the back. Ideal for chronic or acute pain.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['back'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 40,
			title: 'Front of Legs Massage',
			duration: 30,
			description:
				'Gentle release work across hips, thighs and shins to reduce built-up tightness or daily strain.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['legs'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 40,
			title: 'Back of Legs Massage',
			duration: 30,
			description:
				'Support for calves and hamstrings using slow, soothing massage to relax deep muscular tension.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['legs'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 40,
			title: 'Arms & Hands Massage',
			duration: 30,
			description:
				'Support for calves and hamstrings using slow, soothing massage to relax deep muscular tension.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['arms', 'and', 'hands'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'agi_price_card',
			cost: 110,
			title: 'Aithein Full Body Massage',
			duration: 150,
			description:
				'A deep, intuitive massage to reset your whole body. Combines relaxation with energy flow work.',
			location: 'Agis Studio: Burnham',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			locations: ['agi'],
			body_part: ['full body'],
			days: ['mon', 'wed', 'thur', 'fri']
		},
		{
			type: 'reflexions_price_card',
			title: 'Reflexions',
			description:
				'I work in the Reflexions Chelsea and Bayswater studios on Tuesdays and Saturdays. Click the below button to see the locations and prices. Visit me there and make sure to request Aga when making your booking.',
			button: {
				content: 'Go To Fresha: Reflexions',
				icon: null,
				href: 'https://www.fresha.com/providers/reflexions-j8u52zlj?pId=424615'
			},
			body_part: ['face', 'or', 'hands', 'or', 'feet'],
			locations: ['chelsea', 'bayswater'],
			days: ['tue', 'sat']
		}
	];


    let selected_locations = ["chelsea", "bayswater"]

</script>
