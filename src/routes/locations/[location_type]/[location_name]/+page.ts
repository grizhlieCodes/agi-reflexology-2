import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { locations, locationSections } from '$lib/data/locations';

export const load = async ({ params }) => {
	const parsedLocationName = params.location_name.replaceAll('-', '_');
	const pageData = locations[parsedLocationName];
	const pageSection = locationSections.filter((l) => l.locationNames.includes(parsedLocationName));

	if (!pageData) {
		error(404, 'Not found');
	}

	return {
		location: params.location_name,
		pageData,
		pageSection
	};
};
