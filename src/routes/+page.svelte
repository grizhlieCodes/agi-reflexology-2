<script lang="ts">
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import Search from 'lucide-svelte/icons/search';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import AlarmClock from 'lucide-svelte/icons/alarm-clock';

	import Text from '$lib/components/ui/Text.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Image from '$lib/components/ui/Image.svelte';
	import PriceCard from '$lib/components/ui/PriceCard.svelte';
	import MapPinHouse from 'lucide-svelte/icons/map-pin-house';
	import Accordion from '$lib/components/ui-interactive/accordion/Accordion.svelte';

	const doThis = () => {
		return console.log('hehe');
	};

	const darkToggle = () => {
		const htmlElement = document.documentElement;
		htmlElement.classList.toggle('dark');
	};

	const priceCards: any[] = [
		{
			cost: 65,
			title: 'Reflexology Session',
			duration: 60,
			locationBadge: { type: 'default', Icon: MapPinHouse, content: "Agi\'s Studio" },
			visibleBadges: {
				timeBadge: {
					type: 'primary',
					Icon: AlarmClock,
					content: '60min'
				},
				otherBadges: [
					{
						type: 'primary',
						content: 'Face'
					},
					{
						type: 'default',
						content: 'or'
					},
					{
						type: 'primary',
						content: 'Hands'
					},
					{
						type: 'default',
						content: 'or'
					},
					{
						type: 'primary',
						content: 'Feet'
					}
				]
			},
			additionalInfoBadges: [
				{
					type: 'info',
					icon: MapPinHouse,
					content: "Agi's Studio"
				},
				{
					type: 'default',
					content: 'Monday'
				},
				{
					type: 'default',
					content: 'Wednesday'
				},
				{
					type: 'default',
					content: 'Thursday'
				},
				{
					type: 'default',
					content: 'Friday'
				}
			],
			description: 'Gentle, grounding pressure to support whole-body balance. Choose between Face, Hands or Feet.',
			button: {
				content: 'Book Treatment',
				icon: null,
				href: 'https://google.com'
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

<Button type="outline" ariaLabel="Hehe" iconOnly size={3} func={darkToggle} class="fixed top-0 right-0 -translate-x-2 translate-y-2">
	<div class="grid place-items-center *:col-start-1 *:row-start-1">
		<div class="hidden dark:block">
			<Moon class="!size-4.5"></Moon>
		</div>
		<div class="block dark:hidden">
			<Sun class="!size-4.5"></Sun>
		</div>
	</div>
</Button>

<!-- <Image src="https://seerstudio.b-cdn.net/image-tests/IMG_2128.webp" alt="" loading="eager"></Image> -->

<div
	class="flex min-h-screen w-full flex-col items-center
justify-center gap-10 bg-white dark:bg-neutral-950"
>
	<!-- {#each priceCards as priceCard}
		<PriceCard {...priceCard}></PriceCard>
	{/each} -->

	<div class="max-w-1/2 w-full">
		<Accordion {items} type="single" styleType="level-2-primary"></Accordion>
	</div>
</div>
<!--
	{#each ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'] as type}
		<Badge {type}>
			<Search></Search>
			<span> Badge here </span>
		</Badge>
	{/each}

	{#each ['default', 'primary', 'secondary', 'plain', 'outline', 'warning', 'danger', 'info'] as type}
	<div class="flex flex-row items-end gap-2">
		<Button ariaLabel="Nice" {type} size={1} func={doThis}>
			<Search></Search>
			<span>Find Me</span>
		</Button>
		<Button ariaLabel="Nice" {type} size={2}>
			<Search></Search>
			<span>Find Me</span>
		</Button>
		<Button ariaLabel="Nice" {type} size={3}>
			<Search></Search>
			<span>Find Me</span>
		</Button>
		<Button ariaLabel="Nice" {type} size={4}>
			<Search></Search>
			<span>Find Me</span>
		</Button>
		<Button ariaLabel="Nice" {type} size={5}>
			<Search></Search>
			<span>Find Me</span>
		</Button>
		<Button ariaLabel="Nice" {type} size={5} disabled>
			<Search></Search>
			<span>Find Me</span>
		</Button>
	</div>
	{/each}
</div> -->
