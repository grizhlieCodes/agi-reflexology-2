interface FAQ {
	value: string;
	title: string;
	content: string;
}

export const homepage_faqs: FAQ[] = [
	{
		value: '0',
		title: 'What does a typical session involve?',
		content: `
            <p>Each session begins with a short check-in to understand how you\’re feeling that day. From there, I\’ll tailor the treatment to your needs — working gently and intentionally within the scope of the service you\’ve booked (either Reflexology or Massage).</p>
        `
	},
	{
		value: '1',
		title: 'Do I need to choose Reflexology or Massage in advance?',
		content: `
            <p>Yes, you\’ll need to select your treatment type when you book. If you're unsure, here\’s a simple guide:</p>
            <ul>
                <li>Reflexology helps the body rebalance itself from within, especially when there\’s stress, pain, or hormonal shifts.</li>
                <li>Massage works more directly with muscle tension, physical tightness, or the need for deep relaxation.</li>
            </ul>
            <br/>
            <p> You can learn more about both on the <a href="/services/reflexology" aria-label="Read about how reflexology works by going to this page.">Reflexology</a> and <a href="/services/massage" aria-label="Find out how I can help you with my massage offerings.">Massage</a> pages.</p>
        `
	},
	{
		value: '2',
		title: 'Will one session be enough to feel a difference?',
		content: '<p>Many people feel a shift after their first session — less pain, more calm, deeper sleep. But long-term patterns often need a few sessions to unravel fully.</p>'
	},
	{
		value: '3',
		title: 'Is this right for me if I\’ve already tried lots of other treatments?',
		content: '<p>Yes. I often work with people who\’ve seen specialists, tried medications, or done years of physio. This approach focuses on helping your body return to balance — not just treating the surface symptoms.</p>'
	},
	{
		value: '4',
		title: 'What if I\’m dealing with several issues at once?',
		content: '<p>That\’s common. Stress, fatigue, hormonal imbalance, and chronic pain often show up together. I\’ll work holistically, supporting the whole system, not just one part.</p>'
	}
];
