// IMPORTS
import { headData } from '$lib/data/head_data';
import { pathToTitle } from '$lib/scripts/utils';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const pageData = headData[pathname];

	const title =
		pageData?.title ?? `Agi Reflexology - ${pathToTitle(pathname)}`;
	const description =
		pageData?.description ??
		'I use my intuitive reflexology-massage techniques to guide your body toward a deep release and natural balance. In a healing and peaceful environment, I help you let go of tension patterns that prevent you from experiencing true bodily peace. Based in Burnham, UK.';

	return {
		url: pathname,
		title,
		description
	};
};
