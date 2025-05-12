// types.ts
import type { Icon as IconType } from '@lucide/svelte';

// ————— Header navigation —————

export interface SubLink {
	content: string;
	href: string;
	Icon?: IconType | null;
	description?: string;
}

export interface NavLink {
	content: string;
	href: string;
	links?: SubLink[];
}

export interface LogoData {
	logo_type: 'icon_text' | 'icon_only' | 'text_only';
	content: string;
}

export interface HeaderCTA {
	href: string;
	content: string;
}

export interface HeaderData {
	header_logo: LogoData;
	header_links: NavLink[];
	header_cta: HeaderCTA;
}

// ————— Footer navigation —————

// simple link type for footer columns
export interface FooterLink {
	content: string;
	href: string;
}

// one “column” in the footer
export interface FooterLinkColumn {
	column_title: string;
	links: FooterLink[];
}

export interface FooterData {
	footer_logo: LogoData;
	footer_links: FooterLinkColumn[];
	footer_business_name: string;
}

const getLink = (content, href) => {
	return { content, href };
};

export const headerData: HeaderData = {
	header_logo: {
		logo_type: 'icon_text',
		content: 'Agi Reflexology'
	},
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
export const footerData: FooterData = {
	footer_logo: {
		logo_type: 'icon_text',
		content: 'Agi Reflexology'
	},
	footer_links: [
		{
			column_title: 'Main Links',
			links: [getLink('Home', '/'), getLink('About', '/about'), getLink('Locations', '/locations'), getLink('FAQ', '/faq'), getLink('Contact', '/contact')]
		},
		{
			column_title: 'Services',
			links: [getLink('My Services', '/services'), getLink('About', '/services/reflexology'), getLink('Locations', '/services/massage'), getLink('All Treatments', '/treatments')]
		},
		{
			column_title: 'Privacy & Data',
			links: [getLink('Privacy Policy', '/privacy-policy'), getLink('Disclaimer', '/disclaimer'), getLink('Terms & Conditions', '/terms-and-conditions'), getLink('Cookie Policy', '/cookie-policy')]
		}
	],
	footer_business_name: 'Agi Reflexology'
};
