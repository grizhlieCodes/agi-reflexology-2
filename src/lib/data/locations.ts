import type { Badge } from '$lib/schemas/components/priceCard';
import * as badge from '$lib/scripts/badges';

import type * as locations from '$lib/schemas/locationsSchema';
import * as faqs from '$lib/data/faqs/faqs';

const images = {
	foot_massage_session: {
		id: '033y1ha94z82kfe',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Foot Massage Session',
		slug: 'foot-massage-session',
		folder: 'photographs',
		tags: ['location'],
		created: '2025-06-05 09:23:33.744Z',
		updated: '2025-06-05 09:28:30.187Z',
		image_name: 'Foot Massage Session',
		alt_text: 'A close-up view of a foot massage session. A person in a light-colored shirt is gently holding and manipulating the ankle of another person, who is lying on a massage table. The person receiving the massage is wearing black leggings, and their foot is bare. The background features a window with soft natural light coming in, creating a calm and soothing atmosphere.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-lg.jpeg',
				filesize: 612628,
				format: 'jpeg',
				height: 1280,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-md.jpeg',
				filesize: 294071,
				format: 'jpeg',
				height: 853,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-original.jpeg',
				filesize: 631191,
				format: 'jpeg',
				height: 1280,
				name: 'original.jpeg',
				width: 1920
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-sm.jpeg',
				filesize: 118877,
				format: 'jpeg',
				height: 512,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-thumbnail.webp',
				filesize: 2876,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-webp.webp',
				filesize: 50334,
				format: 'webp',
				height: 1280,
				name: 'webp.webp',
				width: 1920
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/foot-massage-session-xs.jpeg',
				filesize: 50924,
				format: 'jpeg',
				height: 320,
				name: 'xs.jpeg',
				width: 480
			}
		}
	},
	fresha_experience_screenshot: {
		id: '254roj1ueeva3lk',
		type: 'image',
		project: 'agi-reflexology',
		name: 'fresha-experience-screenshot',
		slug: 'fresha-experience-screenshot',
		folder: 'shared',
		tags: ['location', 'burnham'],
		created: '2025-06-05 09:13:51.789Z',
		updated: '2025-06-05 09:28:30.586Z',
		image_name: 'fresha-experience-screenshot',
		alt_text: "A digital interface displaying a service selection for massage. The title 'Select services' is prominently featured at the top. Below, there is a section labeled 'Massage' with a specific service listed as 'Foot Reflexology.' The details include a duration of '1 hour' and a price of '£50.' An expandable option is indicated by a plus sign next to the service.",
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-lg.webp',
				filesize: 19679,
				format: 'webp',
				height: 854,
				name: 'lg.webp',
				width: 1379
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-md.webp',
				filesize: 20264,
				format: 'webp',
				height: 793,
				name: 'md.webp',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-original.webp',
				filesize: 21469,
				format: 'webp',
				height: 854,
				name: 'original.webp',
				width: 1379
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-sm.webp',
				filesize: 8280,
				format: 'webp',
				height: 476,
				name: 'sm.webp',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-thumbnail.webp',
				filesize: 1342,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-webp.webp',
				filesize: 14156,
				format: 'webp',
				height: 854,
				name: 'webp.webp',
				width: 1379
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/fresha-experience-screenshot-xs.webp',
				filesize: 4220,
				format: 'webp',
				height: 297,
				name: 'xs.webp',
				width: 480
			}
		}
	},
	reflexions_chelsea: {
		id: '32av519d4h344s1',
		type: 'image',
		project: 'agi-reflexology',
		name: 'reflexions-chelsea',
		slug: 'reflexions-chelsea',
		folder: 'shared',
		tags: ['location', 'reflexions', 'chelsea'],
		created: '2025-06-05 09:13:50.372Z',
		updated: '2025-06-05 09:13:50.372Z',
		image_name: 'reflexions-chelsea',
		alt_text: 'Interior view of Reflexions Chelsea spa showing a massage table with rolled towels, purple walls, and a brick wall. There is a door leading to another room, and shelves with towels in the background. The space is well-lit and designed for relaxation.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-lg.webp',
				filesize: 321803,
				format: 'webp',
				height: 992,
				name: 'lg.webp',
				width: 1432
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-md.webp',
				filesize: 262431,
				format: 'webp',
				height: 887,
				name: 'md.webp',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-original.webp',
				filesize: 321803,
				format: 'webp',
				height: 992,
				name: 'original.webp',
				width: 1432
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-sm.webp',
				filesize: 110156,
				format: 'webp',
				height: 532,
				name: 'sm.webp',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-thumbnail.webp',
				filesize: 6452,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-webp.webp',
				filesize: 102052,
				format: 'webp',
				height: 992,
				name: 'webp.webp',
				width: 1432
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-chelsea-xs.webp',
				filesize: 49703,
				format: 'webp',
				height: 333,
				name: 'xs.webp',
				width: 480
			}
		}
	},
	reflexions_big_room_zoom: {
		id: '1t09hd1a52446sw',
		type: 'image',
		project: 'agi-reflexology',
		name: 'reflexions-big-room-zoom',
		slug: 'reflexions-big-room-zoom',
		folder: 'photographs',
		tags: ['location', 'reflexions'],
		created: '2025-06-05 09:13:40.630Z',
		updated: '2025-06-05 09:15:40.586Z',
		image_name: 'reflexions-big-room-zoom',
		alt_text: 'A cozy spa treatment room featuring a plush purple treatment chair with white towels draped over the arms. In the background, a large wall mural depicts a serene forest scene with sunlight filtering through trees. There are several potted plants, including a tall leafy plant in the foreground, and a small table with spa supplies like nail polish and a bottle. A partition stands to the left, and the flooring is light-colored wood.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-lg.webp',
				filesize: 1326590,
				format: 'webp',
				height: 1440,
				name: 'lg.webp',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-md.webp',
				filesize: 626987,
				format: 'webp',
				height: 960,
				name: 'md.webp',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-original.webp',
				filesize: 5114583,
				format: 'webp',
				height: 3024,
				name: 'original.webp',
				width: 4032
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-sm.webp',
				filesize: 247998,
				format: 'webp',
				height: 576,
				name: 'sm.webp',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-thumbnail.webp',
				filesize: 9000,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-webp.webp',
				filesize: 870580,
				format: 'webp',
				height: 3024,
				name: 'webp.webp',
				width: 4032
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/reflexions-big-room-zoom-xs.webp',
				filesize: 106050,
				format: 'webp',
				height: 360,
				name: 'xs.webp',
				width: 480
			}
		}
	},
	massage_therapy_room: {
		id: 'h038h459y95tb1f',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Massage Therapy Room',
		slug: 'massage-therapy-room',
		folder: 'photographs',
		tags: ['location', 'burnham', 'contact'],
		created: '2025-06-04 21:36:37.112Z',
		updated: '2025-06-05 09:26:30.166Z',
		image_name: 'Massage Therapy Room',
		alt_text: 'A serene massage therapy room featuring a massage table covered with a light-colored sheet. Two rolled towels, one gray and one beige, are neatly placed on the table. A small candle is lit on a round wooden side table, and another table holds a potted plant. The room has large windows with sheer curtains, allowing natural light to filter in, and a decorative folding screen is visible in the background.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-lg.jpeg',
				filesize: 2087092,
				format: 'jpeg',
				height: 2560,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-md.jpeg',
				filesize: 939167,
				format: 'jpeg',
				height: 1707,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-original.jpeg',
				filesize: 4794469,
				format: 'jpeg',
				height: 4032,
				name: 'original.jpeg',
				width: 3024
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-sm.jpeg',
				filesize: 345669,
				format: 'jpeg',
				height: 1024,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-thumbnail.webp',
				filesize: 5176,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-webp.webp',
				filesize: 654454,
				format: 'webp',
				height: 4032,
				name: 'webp.webp',
				width: 3024
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/massage-therapy-room-xs.jpeg',
				filesize: 141501,
				format: 'jpeg',
				height: 640,
				name: 'xs.jpeg',
				width: 480
			}
		}
	},
	relaxing_at_home: {
		id: 'di04569spz5p931',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Relaxing at Home',
		slug: 'relaxing-at-home',
		folder: 'photographs',
		tags: ['reflexology', 'location', 'burnham'],
		created: '2025-06-04 21:36:33.162Z',
		updated: '2025-06-05 09:16:44.239Z',
		image_name: 'Relaxing at Home',
		alt_text: 'A person resting in a reclining chair with a white blanket draped over them. They have a cold compress over their eyes and are lying in a cozy indoor setting. In the background, there are large windows with sheer curtains, allowing natural light to filter in. Outside the window, there are blooming white orchids in pots. The room is decorated with green plants, adding to the tranquil atmosphere.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-lg.jpeg',
				filesize: 2267403,
				format: 'jpeg',
				height: 2559,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-md.jpeg',
				filesize: 1058859,
				format: 'jpeg',
				height: 1706,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-original.jpeg',
				filesize: 2674776,
				format: 'jpeg',
				height: 2666,
				name: 'original.jpeg',
				width: 2000
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-sm.jpeg',
				filesize: 413280,
				format: 'jpeg',
				height: 1024,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-thumbnail.webp',
				filesize: 6134,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-webp.webp',
				filesize: 451064,
				format: 'webp',
				height: 2666,
				name: 'webp.webp',
				width: 2000
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/relaxing-at-home-xs.jpeg',
				filesize: 168695,
				format: 'jpeg',
				height: 640,
				name: 'xs.jpeg',
				width: 480
			}
		}
	},
	spa_setup_essentials: {
		id: 'n13lz1kz47rft0j',
		type: 'image',
		project: 'agi-reflexology',
		name: 'Spa Setup Essentials',
		slug: 'spa-setup-essentials',
		folder: 'photographs',
		tags: ['location'],
		created: '2025-06-04 21:36:30.045Z',
		updated: '2025-06-05 09:25:45.508Z',
		image_name: 'Spa Setup Essentials',
		alt_text: 'A neatly arranged spa setup featuring three rolled towels in soft green and lavender colors stacked on a white surface. A green fern leaf is placed on top of the towels. Below, there is a white paper napkin with a silver pen resting on it, alongside a small blue card partially visible.',
		variants: {
			lg: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-lg.jpeg',
				filesize: 2719548,
				format: 'jpeg',
				height: 2560,
				name: 'lg.jpeg',
				width: 1920
			},
			md: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-md.jpeg',
				filesize: 1272905,
				format: 'jpeg',
				height: 1707,
				name: 'md.jpeg',
				width: 1280
			},
			original: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-original.jpeg',
				filesize: 6189238,
				format: 'jpeg',
				height: 4032,
				name: 'original.jpeg',
				width: 3024
			},
			sm: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-sm.jpeg',
				filesize: 466964,
				format: 'jpeg',
				height: 1024,
				name: 'sm.jpeg',
				width: 768
			},
			thumbnail: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-thumbnail.webp',
				filesize: 5648,
				format: 'webp',
				height: 300,
				name: 'thumbnail.webp',
				width: 300
			},
			webp: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-webp.webp',
				filesize: 1058092,
				format: 'webp',
				height: 4032,
				name: 'webp.webp',
				width: 3024
			},
			xs: {
				bunny_url: 'https://seerstudio.b-cdn.net/projects/agi-reflexology/spa-setup-essentials-xs.jpeg',
				filesize: 180257,
				format: 'jpeg',
				height: 640,
				name: 'xs.jpeg',
				width: 480
			}
		}
	}
};

export const locations: locations.LocationsMap = {
	burnham: {
		location_card: {
			title: 'Burnham, Agi Studio',
			id: 'burnham',
			description: 'Best way & location to work with me in Burnham.',
			button_href: '/locations/agi-studio/burnham',
			badges: {
				location_badge: badge.getLocationBadges(['agi']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5977802822654!2d-0.662497086696884!3d51.53893677170293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487665ff26d86315%3A0x13a3816db920c66a!2sAgi%20Reflexology!5e0!3m2!1sen!2suk!4v1747309546278!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Burnham, Agi Studio',
				id: 'agi-location-hero',
				description: 'The easiest and optimal way to work with me is by booking a visit to my studio in Burnham, UK. I provide Reflexology & Massage treatments in my studio. Other locations will have a reduced number of treatments I can offer.',
				image: images.massage_therapy_room,
				badges: {
					location: badge.getLocationBadges(['agi']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-true'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology or Massage Treatment Awaits in Burnham',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the treatments I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Burnham” as the location</strong>.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'Arrive & Settle In',
						description: `<span>Arrive for your treatment and make sure you put aside the right amount of time for it. Please ensure that depending on your treatment your face, hands and feet are clean and free from any makeup. Read more below in the FAQ section.</span>`,
						image: images.massage_therapy_room
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.relaxing_at_home
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.burnham_faqs]
	},
	chelsea: {
		location_card: {
			title: 'Chelsea (London)',
			id: 'chelsea',
			description: 'On Tuesdays I work at the Reflexions studio in Chelsea, London. You can book an appointment there and request “Aga”.',
			button_href: '/locations/reflexions/chelsea',
			badges: {
				location_badge: badge.getLocationBadges(['chelsea']),
				day_badges: badge.getDayBadges(['tue'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.4025120309666!2d-0.17161598669870132!3d51.4874806716913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056c1688d807%3A0xe5a74fabbf00296c!2sReflexions!5e0!3m2!1sen!2suk!4v1747315440834!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Reflexions, Chelsea - London',
				id: 'reflexions-chelsea-location-hero',
				description: 'I work in the Reflexions Studio every Tuesday. Feel free to schedule a reflexology treatment through the Reflexions - Chelsea Fresha page and specifically request “Aga”.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['chelsea']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['tue'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology or Massage Treatment Awaits in Chelsea',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the treatments I offer">Reflexions Fresha</a> page and select the treatment that suits you best. Specify you wish to work with <strong>"Aga"</strong>.
						</span>`,
						image: images.reflexions_chelsea
					},
					{
						eyebrow: 'STEP 2',
						title: 'Arrive & Settle In',
						description: `<span>Arrive for your treatment and make sure you put aside the right amount of time for it. Please ensure that depending on your treatment your face, hands and feet are clean and free from any makeup. Read more below in the FAQ section.</span>`,
						image: images.reflexions_big_room_zoom
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.chelsea_faqs]
	},
	bayswater: {
		location_card: {
			title: 'Bayswater (London)',
			id: 'bayswater',
			description: 'On Saturdays I work at the Reflexia studio in Bayswater, London. You can book an appointment there and request “Aga”.',
			button_href: '/locations/reflexions/bayswater',
			badges: {
				location_badge: badge.getLocationBadges(['bayswater']),
				day_badges: badge.getDayBadges(['sat'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5280.338682730738!2d-0.19447721760800585!3d51.51606181946083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ffffb5864d9%3A0xa96eff1ab3cd63b3!2sReflexions%20-%20The%20Reflexology%20Shop!5e0!3m2!1sen!2suk!4v1747315600194!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Reflexions, Bayswater - London',
				id: 'reflexions-bayswater-location-hero',
				description: 'I work in the Reflexions Studio every Saturday. Feel free to schedule a reflexology treatment through the Reflexions - Bayswater Fresha page and specifically request “Aga”.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['bayswater']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['sat'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology or Massage Treatment Awaits in Bayswater',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the treatments I offer">Reflexions Fresha</a> page and select the treatment that suits you best. Specify you wish to work with <strong>"Aga"</strong>.
						</span>`,
						image: images.reflexions_chelsea
					},
					{
						eyebrow: 'STEP 2',
						title: 'Arrive & Settle In',
						description: `<span>Arrive for your treatment and make sure you put aside the right amount of time for it. Please ensure that depending on your treatment your face, hands and feet are clean and free from any makeup. Read more below in the FAQ section.</span>`,
						image: images.reflexions_big_room_zoom
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.bayswater_faqs]
	},
	beaconsfield: {
		location_card: {
			title: 'Beaconsfield',
			id: 'beaconsfield',
			description: 'Book your home-visit reflexology treatment in Beaconsfield.',
			button_href: '/locations/home-visit/beaconsfield',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'beaconsfield']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39646.298717596015!2d-0.6793049403454746!3d51.60683683991242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487661459c285999%3A0xad26386aea2fcd98!2sBeaconsfield!5e0!3m2!1sen!2suk!4v1747316855936!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Beaconsfield - Home Visit',
				id: 'beaconsfield-location-hero',
				description: 'I provide home-visit reflexology treatments in Beaconsfield.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'beaconsfield']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.beaconsfield]
	},
	bisham: {
		location_card: {
			title: 'Bisham',
			id: 'bisham',
			description: 'Book your home-visit reflexology treatment in Bisham.',
			button_href: '/locations/home-visit/bisham',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'bisham']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9921.546923814461!2d-0.7845591584004155!3d51.56114354920807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487689cb8f4a121b%3A0x34c71f85550c0791!2sBisham%2C%20Marlow!5e0!3m2!1sen!2suk!4v1747316980086!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Bisham - Home Visit',
				id: 'bisham-location-hero',
				description: 'I provide home-visit reflexology treatments in Bisham.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'bisham']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.bisham]
	},
	bourne_end: {
		location_card: {
			title: 'Bourne End',
			id: 'bourne_end',
			description: 'Book your home-visit reflexology treatment in Bourne End.',
			button_href: '/locations/home-visit/bourne-end',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'bourne End']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19836.3886901555!2d-0.7306688681462171!3d51.57650844704901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487663caae42b939%3A0xf3ca9f5bbd86272f!2sBourne%20End%2C%20Wooburn%20Green%2C%20Bourne%20End%20SL8%205FF!5e0!3m2!1sen!2suk!4v1747317259567!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Bourne End - Home Visit',
				id: 'bourne-end-location-hero',
				description: 'I provide home-visit reflexology treatments in Bourne End.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'bourne End']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.bourne_end]
	},
	cookham: {
		location_card: {
			title: 'Cookham',
			id: 'cookham',
			description: 'Book your home-visit reflexology treatment in Cookham.',
			button_href: '/locations/home-visit/cookham',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'cookham']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39688.56815796808!2d-0.7689114907944434!3d51.55841578706115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876624360227c07%3A0x657a1b6fe488197f!2sCookham!5e0!3m2!1sen!2suk!4v1747319255743!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Cookham - Home Visit',
				id: 'cookham-location-hero',
				description: 'I provide home-visit reflexology treatments in Cookham.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'cookham']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.cookham]
	},
	farnham_common: {
		location_card: {
			title: 'Farnham Common',
			id: 'farnham_common',
			description: 'Book your home-visit reflexology treatment in Farnham Common.',
			button_href: '/locations/home-visit/farnham-common',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'farnham Common']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9920.660719514663!2d-0.6236456583981493!3d51.565205349222964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766451f9eebb71%3A0x62b6b9d2577b14ab!2sFarnham%20Common%2C%20Slough!5e0!3m2!1sen!2suk!4v1747319363269!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Farnham Common - Home Visit',
				id: 'farnham-common-location-hero',
				description: 'I provide home-visit reflexology treatments in Farnham Common.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'farnham']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.farnham_common]
	},
	forty_green: {
		location_card: {
			title: 'Forty Green',
			id: 'forty_green',
			description: 'Book your home-visit reflexology treatment in Forty Green.',
			button_href: '/locations/home-visit/forty-green',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'forty Green']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5790.984818326895!2d-0.6639221344736147!3d51.61645101332409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766135c57271c3%3A0x7bda3c7b21e1715d!2sForty%20Green%2C%20Beaconsfield!5e0!3m2!1sen!2suk!4v1747319472112!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Forty Green - Home Visit',
				id: 'forty-green-location-hero',
				description: 'I provide home-visit reflexology treatments in Forty Green.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'forty Green']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.forty_green]
	},
	hedgerley: {
		location_card: {
			title: 'Hedgerley',
			id: 'hedgerley',
			description: 'Book your home-visit reflexology treatment in Hedgerley.',
			button_href: '/locations/home-visit/hedgerley',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'hedgerley']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4959.4916899897125!2d-0.6080619977585376!3d51.572892587313135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487665ba2e22d7a5%3A0x9dfac6e982297078!2sHedgerley%2C%20Slough!5e0!3m2!1sen!2suk!4v1747319593166!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Hedgerley- Home Visit',
				id: 'hedgerley-location-hero',
				description: 'I provide home-visit reflexology treatments in Hedgerley.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'hedgerley']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.hedgerley]
	},
	maidenhead: {
		location_card: {
			title: 'Maidenhead',
			id: 'maidenhead',
			description: 'Book your home-visit reflexology treatment in Maidenhead.',
			button_href: '/locations/home-visit/maidenhead',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'maidenhead']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39723.82121170287!2d-0.7698830911688935!3d51.51800738469749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487662409cc2c793%3A0xde54c6f43e749cf6!2sMaidenhead!5e0!3m2!1sen!2suk!4v1747319652849!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Maidenhead - Home Visit',
				id: 'maidenhead-location-hero',
				description: 'I provide home-visit reflexology treatments in Maidenhead.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'maidenhead']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.maidenhead]
	},
	marlow: {
		location_card: {
			title: 'Marlow',
			id: 'marlow',
			description: 'Book your home-visit reflexology treatment in Marlow.',
			button_href: '/locations/home-visit/marlow',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'marlow']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19838.163231008486!2d-0.7979506181555469!3d51.57244239698924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487661882e969811%3A0xb25284f05eccc5c2!2sMarlow!5e0!3m2!1sen!2suk!4v1747319703101!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Marlow - Home Visit',
				id: 'marlow-location-hero',
				description: 'I provide home-visit reflexology treatments in Marlow.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'marlow']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.marlow]
	},
	penn: {
		location_card: {
			title: 'Penn',
			id: 'penn',
			description: 'Book your home-visit reflexology treatment in Penn.',
			button_href: '/locations/home-visit/penn',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'penn']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39624.895223526095!2d-0.7246975901181345!3d51.63134289136328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876612b9aa55965%3A0xb1a584820be19462!2sPenn!5e0!3m2!1sen!2suk!4v1747319745173!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Penn - Home Visit',
				id: 'penn-location-hero',
				description: 'I provide home-visit reflexology treatments in Penn.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'penn']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.penn]
	},
	stoke_poges: {
		location_card: {
			title: 'Stokepoges',
			id: 'stoke-poges',
			description: 'Book your home-visit reflexology treatment in Stokepoges.',
			button_href: '/locations/home-visit/stoke-poges',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'stoke Poges']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19848.49061340883!2d-0.622797138308561!3d51.54877446096732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766572a7654c8d%3A0x53aa8f4c760a296c!2sStoke%20Poges%2C%20Slough!5e0!3m2!1sen!2suk!4v1747319840195!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Stoke Poges - Home Visit',
				id: 'stoke-poges-location-hero',
				description: 'I provide home-visit reflexology treatments in Stoke Poges.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'stoke poges']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.stoke_poges]
	},
	taplow: {
		location_card: {
			title: 'Taplow',
			id: 'taplow',
			description: 'Book your home-visit reflexology treatment in Taplow.',
			button_href: '/locations/home-visit/taplow',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'taplow']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39702.37204719479!2d-0.7197987409410987!3d51.54259593613406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876632555c7cf77%3A0xefcc11cd0f641c7d!2sTaplow!5e0!3m2!1sen!2suk!4v1747320360275!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Taplow - Home Visit',
				id: 'taplow-location-hero',
				description: 'I provide home-visit reflexology treatments in Taplow.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'taplow']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.taplow]
	},
	woodburn_green: {
		location_card: {
			title: 'Woodburn Green',
			id: 'woodburn-green',
			description: 'Book your home-visit reflexology treatment in Woodburn Green.',
			button_href: '/locations/home-visit/woodburn-green',
			badges: {
				location_badge: badge.getLocationBadges(['home_visit', 'Woodburn Green']),
				day_badges: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
			},
			mapIframeSource: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19832.585772464558!2d-0.7078473181262214!3d51.585221397177214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487663c29f368913%3A0x7a721fd27eb8fdfd!2sWooburn%20Green!5e0!3m2!1sen!2suk!4v1747320405456!5m2!1sen!2suk'
		},
		location_page: {
			hero_section: {
				title: 'Woodburn Green - Home Visit',
				id: 'woodburn-green-location-hero',
				description: 'I provide home-visit reflexology treatments in Woodburn Green.',
				image: null,
				badges: {
					location: badge.getLocationBadges(['home_visit', 'woodburn green']),
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
				},
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of the treatments I offer'
					},
					secondary: {
						content: 'How Reflexology Works',
						href: '/services/reflexology',
						aria_label: 'Go to my reflexology information page to learn about how it all works.'
					}
				}
			},
			how_it_works_section: {
				title: 'Your Reflexology Treatment, In The Comfort Of Your Home',
				eyebrow: 'How It Works',
				id: 'agi-how-it-works',
				steps: [
					{
						eyebrow: 'STEP 1',
						title: 'Book Your Session',
						description: `<span>
							Go to <a href="/treatments" aria-label="View all of the services I offer">My Treatments</a> and select the one that suits you best. You will be taken to the Fresha platform where you can purchase the session and book your slot in my calendar. <strong>Make sure to select “Home Visit” as the location.</strong> If this is your first time working with me, you will be asked to fill out a short form.
						</span>`,
						image: images.fresha_experience_screenshot
					},
					{
						eyebrow: 'STEP 2',
						title: 'I Arrive And Prepare A Space',
						description: `<span>I will arrive 5-10 minutes before the start of our session. Please make sure you have a space in your living room for our treatment. If you\’re unsure of this step, please <a href="/contact" aria-label="Go to my contact page to fill out the contact form.">contact me</a> before our session.</span>`,
						image: images.spa_setup_essentials
					},
					{
						eyebrow: 'STEP 3',
						title: 'The Treatment',
						description: `<span>The treatment will comprise of a focused reflexology massage (or normal massage) that will work through areas of high-benefit, uniquely to you and your body.</span>`,
						image: images.foot_massage_session
					}
				],
				buttons: {
					primary: {
						content: 'Explore My Treatments',
						href: '/treatments',
						aria_label: 'View all of my services'
					}
				}
			}
		},
		faqs: [...faqs.home_visit_faqs, faqs.specific_home_visit_faq.woodburn_green]
	}
};

export const locationSections: locations.LocationSections = [
	{
		locationNames: ['burnham'],
		title: 'Agi\s Studio',
		id: 'agi-studio-location',
		badges: {
			available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-true'),
			available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
		},
		description: 'The easiest and optimal way to work with me is by booking a visit to my studio in Burnham, UK. I provide Reflexology & Massage treatments in my studio. Other locations will have a reduced number of treatments I can offer.',
		location_button: {
			href: '/locations/agi-studio/burnham'
		},
		locations: [locations.burnham]
	},
	{
		locationNames: ['chelsea', 'bayswater'],
		title: 'Reflexions, London',
		id: 'reflexions-location',
		badges: {
			available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
			available_days: badge.getDayBadges(['tue', 'sat'])
		},
		description: 'I work in London on Tuesday, Friday and Saturday at the Reflexions studio. You can book an appointment with me via Fresha and ask for Aga.',
		location_button: null,
		locations: [locations.chelsea, locations.bayswater],
		location_specific_data: {
			chelsea: {
				title: 'Reflexions, Chelsea',
				id: 'reflexions-chelsea-location',
				badges: {
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['tue'])
				},
				description: 'I work in London on Tuesday at the Reflexions, Chelsea reflexology studio. You can book an appointment with me via Fresha and ask for Aga.',
				location_button: null,
				locations: [locations.chelsea]
			},
			bayswater: {
				title: 'Reflexions, Bayswater',
				id: 'reflexions-bayswater-location',
				badges: {
					available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
					available_days: badge.getDayBadges(['sat'])
				},
				description: 'I work in London on Saturday at the Reflexions, Bayswater reflexology studio. You can book an appointment with me via Fresha and ask for Aga.',
				location_button: null,
				locations: [locations.bayswater]
			}
		}
	},
	{
		locationNames: ['beaconsfield', 'bisham', 'bourne_end', 'cookham', 'farnham_common', 'forty_green', 'hedgerley', 'maidenhead', 'marlow', 'penn', 'stoke_poges', 'taplow', 'woodburn_green'],
		title: 'Home Visits',
		id: 'home-visit-locations',
		badges: {
			available_services: badge.getServiceAvailabilityBadges('reflexology-true,massage-false'),
			available_days: badge.getDayBadges(['mon', 'wed', 'thur', 'fri'])
		},
		description: 'I offer home visits for Reflexology treatments only. You will book through Fresha and will have to select the “Home Visit” option. If it’s your first time booking with me you will be asked for some personal information like name, surname, contact details and your address.',
		location_button: null,
		locations: [locations.beaconsfield, locations.bisham, locations.bourne_end, locations.cookham, locations.farnham_common, locations.forty_green, locations.hedgerley, locations.maidenhead, locations.marlow, locations.penn, locations.stoke_poges, locations.taplow, locations.woodburn_green]
	}
];
