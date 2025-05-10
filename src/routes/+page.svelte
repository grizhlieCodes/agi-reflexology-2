<script lang="ts">

	import Button from '$lib/components/ui-interactive/Button.svelte';

	import Search from 'lucide-svelte/icons/search';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import AlarmClock from 'lucide-svelte/icons/alarm-clock';
	import MapPinHouse from 'lucide-svelte/icons/map-pin-house';

	import Text from '$lib/components/ui/Text.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import PriceCard from '$lib/components/ui/price-card/PriceCard.svelte';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';

	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';
	import SvgDivider from '$lib/components/ui/SvgDivider.svelte';
	import { Quote } from 'lucide-svelte';
	import Testimonial from '$lib/components/ui/Testimonial.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Home from '$lib/pages/Home.svelte';

	const doThis = () => {
		return console.log('hehe');
	};



	const priceCards: PriceCardTypes.PriceCard[] = [
		{
			cost: 65,
			title: 'Reflexology Session',
			duration: 60,
			description: 'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
			},
			badges: {
				location: [{ type: 'default', Icon: MapPinHouse, content: "Agi\'s Studio" }],
				time: [{ type: 'primary', Icon: AlarmClock, content: '60min' }],
				key_info: [
					{
						type: 'primary',
						content: 'Face',
						Icon: null
					},
					{
						type: 'default',
						content: 'or',
						Icon: null
					},
					{
						type: 'primary',
						content: 'Hands',
						Icon: null
					},
					{
						type: 'default',
						content: 'or',
						Icon: null
					},
					{
						type: 'primary',
						content: 'Feet',
						Icon: null
					}
				],
				additional_info: [
					{
						type: 'info',
						Icon: MapPinHouse,
						content: "Agi's Studio"
					},
					{
						type: 'default',
						content: 'Monday',
						Icon: null
					},
					{
						type: 'default',
						content: 'Wednesday',
						Icon: null
					},
					{
						type: 'default',
						content: 'Thursday',
						Icon: null
					},
					{
						type: 'default',
						content: 'Friday',
						Icon: null
					}
				]
			}
		}
	];

	const items = [
		{
			value: '1',
			title: 'What is the meaning of life?',
			content: 'To become a better person, to help others, and to leave the world a better place than you found it.'
		},
		{
			value: '2',
			title: 'How do I become a better person?',
			content: 'Read books, listen to podcasts, and surround yourself with people who inspire you.'
		},
		{
			value: '3',
			title: 'What is the best way to help others?',
			content: 'Give them your time, attention, and love.'
		}
	];
</script>



<Home></Home>

<!-- <div class="w-full max-w-[400px]">
	<PriceCard {...priceCards[0]}></PriceCard>
</div> -->