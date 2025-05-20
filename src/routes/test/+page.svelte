<!-- const price_cards = [
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
 			'I work in the Reflexions Chelsea and Bayswater studios on Tuesdays and Saturdays. Click the below button to see the locations and prices. Visit me there and make sure  request Aga when making your booking.',
 		button: {
 			content: 'Go To Fresha: Reflexions',
 			icon: null,
 			href: 'https://www.fresha.com/providers/reflexions-j8u52zlj?pId=424615'
 		},
 		body_part: ['face', 'or', 'hands', 'or', 'feet'],
 		locations: ['chelsea', 'bayswater'],
 		days: ['tue', 'sat']
 	}
 ]; -->
<script lang="ts">
	const treatments = [
		{
			name: 'Reflexology Session',
			duration: 60,
			bodyParts: ['Face', 'Hands', 'Feet'],
			locations: ['Burnham', 'Taplow']
		},
		{
			name: 'Extended Reflexology',
			duration: 90,
			bodyParts: ['Face', 'Hands', 'Feet'],
			locations: ['Burnham']
		},
		{
			name: 'Foot + Face Reflexology',
			duration: 90,
			bodyParts: ['Face', 'Feet'],
			locations: ['Taplow']
		},
		{
			name: 'Mini Facial',
			duration: 30,
			bodyParts: ['Face'],
			locations: ['Taplow']
		}
	];

	let selectedDuration = $state(null); // e.g. 60
	let selectedBodyParts = $state([]); // e.g. "Feet"
	let selectedLocation = $state(''); // e.g. "Burnham"
	let filteredArray: any = $state([...treatments]);

	const filterDuration = (duration: any) => {
		return (t: any) => t.duration === duration;
	};
	const filterBodyPart = (parts: string[]) => {
		return (t: any) => {
			if (!parts || parts.length === 0 || (parts.length === 1 && parts[0] === '')) return true;

			return parts.some((part: string) =>
				t.bodyParts.map((b: any) => b.toLowerCase()).includes(part.toLowerCase())
			);
		};
	};
	
	const filterLocations = (location: any) => {
		return (t: any) =>
			t.locations.map((b: any) => b.toLowerCase()).includes(location.toLowerCase());
	};

	const buildFilters = () => {
		let filters = [];

		if (selectedDuration) filters.push(filterDuration(selectedDuration));
		if (selectedBodyParts.length > 0) filters.push(filterBodyPart(selectedBodyParts));
		if (selectedLocation) filters.push(filterLocations(selectedLocation));

		return filters;
	};

	const filterResults = () => {
		const filters = buildFilters();
		filteredArray = treatments.filter((t) => {
			return filters.every((fn) => fn(t));
		});
	};
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center gap-2">
	<h2>Filters</h2>

	<label>
		Duration:
		<input
			onchange={filterResults}
			type="number"
			bind:value={selectedDuration}
			placeholder="e.g. 90"
		/>
	</label>

	<label>
		Body Part:
		<select multiple bind:value={selectedBodyParts} onchange={filterResults}>
			{#each [{ name: '', label: 'All' }, { name: 'feet', label: 'Feet' }, { name: 'hands', label: 'Hands' }, { name: 'face', label: 'Face' }] as body_part, i}
				<option value={body_part.name}>{body_part.label}</option>
			{/each}
		</select>
	</label>

	<label>
		Location:
		<input
			onchange={filterResults}
			type="text"
			bind:value={selectedLocation}
			placeholder="e.g. Burnham"
		/>
	</label>

	<h2>Filtered Results</h2>
	<ul class="flex flex-col gap-2">
		{#if filteredArray && filteredArray.length > 0}
			{#each filteredArray as t}
				<li class="bg-green-100">
					{t.name} – {t.duration}min – {t.bodyParts.join(', ')} – {t.locations.join(', ')}
				</li>
			{/each}
		{/if}
	</ul>
</div>
