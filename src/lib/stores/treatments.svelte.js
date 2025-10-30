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
	let aval_location_types = $state([]);
	let sel_location_type = $state('');
	let aval_locations = $state([]);
	let sel_locations = $state([]);
	let aval_days = $state([]);
	let sel_days = $state([]);
	let aval_treatment_types = $state([]);
	let sel_treatment_types = $state([]);
	let aval_body_parts = $state([]);
	let sel_body_parts = $state([]);
	let aval_durations = $state([]);
	let sel_durations = $state([]);

	let aval_price_cards = $state([]);

	const setDefaultAvailableLocationTypes = () => {
		aval_location_types = Array.from(
			new Map(price_cards.map((pc) => [pc.location_type.name, pc.location_type])).values()
		);
	};
	const updateSelectedLocationType = (new_type) => {
		if (sel_location_type === new_type) return;
		clearSelectedLocations();
		clearSelectedDays();
		clearSelectedTreatmentTypes();
		clearSelectedBodyParts();
		clearSelectedDurations();
		sel_location_type = new_type; // home_visit or on_location
		updateAvailableLocations(sel_location_type);
		updateAvailableDays(sel_location_type);
		updateAvailableTreatmentTypes(sel_location_type);
		updateAvailableBodyParts(sel_location_type);
		updateAvailableDurations(sel_location_type);
	};

	const updateAvailableLocations = (location_type) => {
		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type);
		aval_locations = [...new Set(filteredPCards.map((pc) => pc.locations).flat())];
	};

	const updateAvailableDays = (location_type) => {
		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type);
		aval_days = [...new Set(filteredPCards.map((pc) => pc.days).flat())];
	};

	const updateAvailableTreatmentTypes = (location_type) => {
		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type);
		aval_treatment_types = [...new Set(filteredPCards.map((pc) => pc.treatment_type))];
	};

	const updateAvailableBodyParts = (location_type) => {
		const exclusionKeywords = ['or', 'and'];
		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type);
		const allBodyParts = filteredPCards.map((pc) => pc.body_part).flat();
		aval_body_parts = [...new Set(allBodyParts.filter(part => !exclusionKeywords.includes(part)))];
	};

	const updateAvailableDurations = (location_type) => {
		let filteredPCards = price_cards.filter((pc) => pc.location_type.name === location_type && pc.duration !== undefined);
		aval_durations = [...new Set(filteredPCards.map((pc) => pc.duration))].sort((a, b) => a - b);
	};

	const clearSelectedLocations = () => (sel_locations = []);
	const clearSelectedDays = () => (sel_days = []);
	const clearSelectedTreatmentTypes = () => (sel_treatment_types = []);
	const clearSelectedBodyParts = () => (sel_body_parts = []);
	const clearSelectedDurations = () => (sel_durations = []);

	const updateSelectedLocations = (locations) => (sel_locations = locations);
	const updateSelectedDays = (days) => (sel_days = days);
	const updateSelectedTreatmentTypes = (types) => (sel_treatment_types = types);
	const updateSelectedBodyParts = (parts) => (sel_body_parts = parts);
	const updateSelectedDurations = (durations) => (sel_durations = durations);

	const removeSelectedLocation = (loc) => {
		sel_locations = sel_locations.filter((l) => l !== loc);
	};

	const resetPriceCards = () => (aval_price_cards = [...price_cards]);

	const filterByLocationType = (location_type) => {
		return (treatment) => {
			return treatment.location_type.name === location_type;
		};
	};

	const filterByLocation = (locations) => {
		return (treatment) => {
			if (!locations || locations.length === 0 || (locations.length === 1 && locations[0] === ''))
				return true;
			return locations.every((location) => {
				return treatment.locations.some((l) => {
					return l.includes(location);
				});
			});
		};
	};
	const filterByDays = (days) => {
		return (treatment) => {
			if (!days || days.length === 0 || (days.length === 1 && days[0] === '')) return true;
			return days.every((day) => {
				return treatment.days.some((l) => {
					return l.includes(day);
				});
			});
		};
	};

	const filterByTreatmentType = (types) => {
		return (treatment) => {
			if (!types || types.length === 0 || (types.length === 1 && types[0] === '')) return true;
			return types.some((type) => treatment.treatment_type === type);
		};
	};

	const filterByBodyPart = (parts) => {
		return (treatment) => {
			if (!parts || parts.length === 0 || (parts.length === 1 && parts[0] === '')) return true;
			const treatmentBodyParts = treatment.body_part.filter(part => !['or', 'and'].includes(part));
			return parts.some(part => treatmentBodyParts.includes(part));
		};
	};

	const filterByDuration = (durations) => {
		return (treatment) => {
			if (!durations || durations.length === 0 || (durations.length === 1 && durations[0] === '')) return true;
			return durations.some(duration => treatment.duration === duration);
		};
	};

	const setupDefaultTreatments = () => {
		setDefaultAvailableLocationTypes(); // home_visit or on_location
		updateSelectedLocationType(aval_location_types[0].name);
		updateAvailableLocations(sel_location_type);
		updateAvailableDays(sel_location_type);
		updateAvailableTreatmentTypes(sel_location_type);
		updateAvailableBodyParts(sel_location_type);
		updateAvailableDurations(sel_location_type);
		resetPriceCards();
		filterResults();
	};

	const buildFilters = () => {
		let filters = [];

		if (sel_location_type) filters.push(filterByLocationType(sel_location_type));
		if (sel_locations) filters.push(filterByLocation(sel_locations));
		if (sel_days) filters.push(filterByDays(sel_days));
		if (sel_treatment_types && sel_treatment_types.length > 0) {
			filters.push(filterByTreatmentType(sel_treatment_types));
		}
		if (sel_body_parts && sel_body_parts.length > 0) {
			filters.push(filterByBodyPart(sel_body_parts));
		}
		if (sel_durations && sel_durations.length > 0) {
			filters.push(filterByDuration(sel_durations));
		}

		return filters;
	};

	const filterResults = () => {
		const filters = buildFilters();

		aval_price_cards = price_cards.filter((t) => {
			return filters.every((fn) => fn(t));
		});
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
		get aval_price_cards() {
			return aval_price_cards;
		},
		get aval_days() {
			return aval_days;
		},
		get sel_days() {
			return sel_days;
		},
		get aval_treatment_types() {
			return aval_treatment_types;
		},
		get sel_treatment_types() {
			return sel_treatment_types;
		},
		get aval_body_parts() {
			return aval_body_parts;
		},
		get sel_body_parts() {
			return sel_body_parts;
		},
		get aval_durations() {
			return aval_durations;
		},
		get sel_durations() {
			return sel_durations;
		},
		setDefaultAvailableLocationTypes,
		updateSelectedLocationType,
		updateAvailableLocations,
		clearSelectedLocations,
		updateSelectedLocations,
		setupDefaultTreatments,
		removeSelectedLocation,
		filterResults,
		clearSelectedDays,
		updateSelectedDays,
		clearSelectedTreatmentTypes,
		updateSelectedTreatmentTypes,
		updateAvailableTreatmentTypes,
		clearSelectedBodyParts,
		updateSelectedBodyParts,
		updateAvailableBodyParts,
		clearSelectedDurations,
		updateSelectedDurations,
		updateAvailableDurations
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
