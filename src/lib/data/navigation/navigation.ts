import type { Icon as IconType } from '@lucide/svelte';

export interface NavLink {
	content: string;
	href: string;
	links?: SubLink[];
}

export interface SubLink {
	content: string;
	href: string;
	Icon?: IconType | null;
	description?: string;
}

export interface LogoData {
	logo_type: 'icon_text' | 'icon_only' | 'text_only';
	content: string;
}

export interface HeaderCTA {
	href: string;
	content: string;
}

export interface NavData {
	logo: LogoData;
	footer_links: any;
	header_links: NavLink[];
	header_cta: HeaderCTA;
}

export const navData: NavData = {
	logo: {
		logo_type: 'icon_text',
		content: 'Agi Reflexology'
	},
	footer_links: [],
	header_links: [
		{
			content: 'About',
			href: '/about'
		},
		{
			content: 'Services',
			href: '/services',
			links: [
				{
					content: 'Services',
					href: '/services'
				},
				{
					content: 'Reflexology',
					href: '/services/reflexology'
				},
				{
					content: 'Massage',
					href: '/services/massage'
				}
			]
		},
		{
			content: 'Locations',
			href: '/locations',
			links: [
				{ content: 'All Locations', href: '/locations' },
				{ content: "Agi's Studio", href: '/locations/agis-studio' },
				{ content: 'Reflexia, Chelsea', href: '/locations/reflexia-chelsea' },
				{ content: 'Reflexia, Bayswater', href: '/locations/reflexia-bayswater' },
				{ content: 'Beaconsfield', href: '/locations/beaconsfield' },
				{ content: 'Bisham', href: '/locations/bisham' },
				{ content: 'Bourne End', href: '/locations/bourne-end' },
				{ content: 'Cookham', href: '/locations/cookham' },
				{ content: 'Farnham Common', href: '/locations/farnham-common' },
				{ content: 'Forty Green', href: '/locations/forty-green' },
				{ content: 'Hedgerley', href: '/locations/hedgerley' },
				{ content: 'Maidenhead', href: '/locations/maidenhead' },
				{ content: 'Marlow', href: '/locations/marlow' },
				{ content: 'Penn', href: '/locations/penn' },
				{ content: 'Stoke Poges', href: '/locations/stoke-poges' },
				{ content: 'Taplow', href: '/locations/taplow' },
				{ content: 'Woburn Green', href: '/locations/woburn-green' }
			]
		},
		{
			content: 'Contact',
			href: '/contact'
		},
		{
			content: 'FAQ',
			href: '/faq'
		}
	],
	header_cta: {
		href: '/treatments',
		content: 'Explore All Treatments'
	}
};
