import { price_cards } from '$lib/data/price_cards';

// class Treatments {
// 	aval_location_types = $state(['']);
// 	sel_location_type = $state('');
// 	aval_locations = $state([]);
// 	sel_locations = $state([]);
	// aval_week_days = [""]
	// sel_week_days = [""]
	// aval_treatment_types = [""]
	// sel_treatment_types = [""]
	// aval_massage_areas = [""]
	// sel_massage_areas = [""]
	// aval_durations = [""]
	// sel_durations = [""]

// 	setDefaultAvailableLocationTypes() {
// 		this.aval_location_types = Array.from(
// 			new Map(price_cards.map((pc) => [pc.location_type.name, pc.location_type])).values()
// 		);
// 	}
// 	updateSelectedLocationType(new_type) {
// 		if (this.sel_location_type === new_type) return;
// 		this.clearSelectedLocations();
// 		this.sel_location_type = new_type; // home_visit or on_location
// 	}

// 	updateAvailableLocations(location_type) {
// 		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type);
// 		this.aval_locations = [...new Set(filteredPCards.map((pc) => pc.locations).flat())];
// 	}

// 	clearSelectedLocations() {
// 		this.sel_locations = [];
// 	}

// 	addLocationToSelectedLocations(location_name) {
// 		this.sel_locations.push(location_name);
// 	}

// 	constructor() {
// 		this.setDefaultAvailableLocationTypes(); // home_visit or on_location
// 		this.updateSelectedLocationType(this.aval_location_types[0].name);
// 		this.updateAvailableLocations(this.sel_location_type);
// 	}
// }

// export const t = new Treatments();

const createTreatments = () => {
	let aval_location_types = $state(['']);
	let sel_location_type = $state('');
	let aval_locations = $state([]);
	let sel_locations = $state([]);

	const setDefaultAvailableLocationTypes = () => {
		aval_location_types = Array.from(
			new Map(price_cards.map((pc) => [pc.location_type.name, pc.location_type])).values()
		);
	};
	const updateSelectedLocationType = (new_type) => {
		if (sel_location_type === new_type) return;
		clearSelectedLocations();
		sel_location_type = new_type; // home_visit or on_location
		updateAvailableLocations(sel_location_type);
	};

	const updateAvailableLocations = (location_type) => {
		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type);
		aval_locations = [...new Set(filteredPCards.map((pc) => pc.locations).flat())];
	};

	const clearSelectedLocations = () => {
		sel_locations = [];
	};

	const updateSelectedLocations = (locations) => {
		sel_locations = locations;
	};

	const removeSelectedLocation = (loc) => {
		sel_locations = sel_locations.filter((l) => l !== loc);
	};

	const setupDefaultTreatments = () => {
		setDefaultAvailableLocationTypes(); // home_visit or on_location
		updateSelectedLocationType(aval_location_types[0].name);
		updateAvailableLocations(sel_location_type);
	};

	return {
		get aval_location_types() {
			return aval_location_types;
		},
		get sel_location_type() {
			return sel_location_type;
		},
		get aval_locations() {
			return aval_locations;
		},
		get sel_locations() {
			return sel_locations;
		},
		setDefaultAvailableLocationTypes,
		updateSelectedLocationType,
		updateAvailableLocations,
		clearSelectedLocations,
		updateSelectedLocations,
		setupDefaultTreatments,
		removeSelectedLocation
	};
};

export const t = createTreatments();
t.setupDefaultTreatments();

// counter.svelte.js;

// export class Counter {
// 	count = $state(0);

// 	increase() {
// 		this.count = this.count + 1;
// 	}

// 	decrease() {
// 		this.count -= 1;
// 	}
// }

// export const counter = new Counter();

// export const createCounter = (defaultValue) => {
// 	let count = $state(defaultValue);

// 	const reset = () => (count = defaultValue);
// 	const add = () => (count += 1);
// 	const sub = () => (count -= 1);

// 	return {
// 		get count() {
// 			return count;
// 		},
// 		reset,
// 		add,
// 		sub
// 	};
// };

// export const counter = createCounter(0);
