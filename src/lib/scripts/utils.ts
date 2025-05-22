import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const returnLocationName = (string) => {
	return string
		.split('_')
		.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
		.join(' ');
};

export const pathToTitle = (path: string) => {
	if (path === '/') return 'Home';

	const segmentMap: Record<string, string> = {
		locations: 'Locations',
		reflexions: 'Reflexions',
		chelsea: 'Chelsea',
		bayswater: 'Bayswater',
		about: 'About',
		contact: 'Contact'
	};

	return path
		.split('/')
		.filter(Boolean)
		.map((segment) => segmentMap[segment] || capitalize(segment))
		.join(' – ');
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
