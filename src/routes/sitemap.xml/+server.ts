import type { RequestHandler } from './$types';

const SITEMAP_BASE_URL = 'https://www.agireflexology.com';

const staticPages = ['/', '/about', '/reflexology', '/locations', '/locations/agi-studio/burnham', '/locations/reflexions/chelsea', '/locations/reflexions/bayswater', '/locations/home-visit/beaconsfield', '/locations/home-visit/bisham', '/locations/home-visit/bourne-end', '/locations/home-visit/cookham', '/locations/home-visit/farnham-common', '/locations/home-visit/forty-green', '/locations/home-visit/hedgerley', '/locations/home-visit/maidenhead', '/locations/home-visit/marlow', '/locations/home-visit/penn', '/locations/home-visit/stoke-poges', '/locations/home-visit/taplow', '/locations/home-visit/woodburn-green', '/contact', '/faq', '/treatments', '/privacy-policy', '/disclaimer', '/terms-and-conditions'];

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

	const urls = staticPages
		.map((page) => {
			return `
			<url>
				<loc>${SITEMAP_BASE_URL}${page}</loc>
				<lastmod>${today}</lastmod>
				<changefreq>monthly</changefreq>
				<priority>${page === '/' ? '1.0' : '0.8'}</priority>
			</url>
		`;
		})
		.join('');

	const sitemapXml = `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
		${urls}
	</urlset>`;

	return new Response(sitemapXml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600' // Cache for 1 hour on CDN, revalidate on browser
		}
	});
};
