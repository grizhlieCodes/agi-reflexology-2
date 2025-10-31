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
			content: 'Reflexology',
			href: '/reflexology'
		},
		{
			content: 'Locations',
			href: '/locations',
			links: [
				{ content: 'All Locations', href: '/locations' },
				{ content: "Agi's Studio", href: '/locations/agi-studio/burnham' },
				{ content: 'Reflexions, Chelsea', href: '/locations/reflexions/chelsea' },
				{ content: 'Reflexions, Bayswater', href: '/locations/reflexions/bayswater' },
				{ content: 'Beaconsfield', href: '/locations/home-visit/beaconsfield' },
				{ content: 'Bisham', href: '/locations/home-visit/bisham' },
				{ content: 'Bourne End', href: '/locations/home-visit/bourne-end' },
				{ content: 'Cookham', href: '/locations/home-visit/cookham' },
				{ content: 'Farnham Common', href: '/locations/home-visit/farnham-common' },
				{ content: 'Forty Green', href: '/locations/home-visit/forty-green' },
				{ content: 'Hedgerley', href: '/locations/home-visit/hedgerley' },
				{ content: 'Henley-on-Thames', href: '/locations/home-visit/henley-on-thames' },
				{ content: 'Maidenhead', href: '/locations/home-visit/maidenhead' },
				{ content: 'Marlow', href: '/locations/home-visit/marlow' },
				{ content: 'Penn', href: '/locations/home-visit/penn' },
				{ content: 'Stoke Poges', href: '/locations/home-visit/stoke-poges' },
				{ content: 'Taplow', href: '/locations/home-visit/taplow' },
				{ content: 'Woodburn Green', href: '/locations/home-visit/woodburn-green' }
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
			links: [getLink('Home', '/'), getLink('About', '/about'), getLink('Reflexology', '/reflexology'), getLink('Locations', '/locations'), getLink('Treatments', '/treatments'), getLink('FAQ', '/faq'), getLink('Contact', '/contact')]
		},
		{
			column_title: 'Privacy & Data',
			links: [getLink('Privacy Policy', '/privacy-policy'), getLink('Disclaimer', '/disclaimer'), getLink('Terms & Conditions', '/terms-and-conditions')]
		}
	],
	footer_business_name: 'Agi Reflexology'
};
