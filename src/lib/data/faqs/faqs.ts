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

export const about_faqs: FAQ[] = [
	{
		value: '0',
		title: 'How do I know you\'re the right person to help me?',
		content: `
            <p>The most important thing is that you feel safe, listened to, and not rushed. My approach is gentle and grounded — I take time to understand what your body\’s holding onto and work with it, not against it. Many clients say they felt a deep shift simply from being in a calm, attentive space.</p>
        `
	},
	{
		value: '1',
		title: 'What makes this different from other treatments I\’ve tried?',
		content: `
            <p>This isn\’t just a massage or pressure-point routine. My work focuses on reconnecting you with how your body actually feels, beneath the noise. I work slowly, intuitively, and always adapt to what your nervous system is ready for — no pushing, no ticking boxes.</p>
        `
	},
	{
		value: '2',
		title: 'Is this approach evidence-based or just \‘alternative\’?',
		content: `
            <p>Reflexology and massage have both been used for centuries across different cultures, and today, many aspects of these practices are supported by modern research — especially around relaxation, circulation, and nervous system regulation. I don\’t make medical claims — I support your body\’s natural capacity to heal and settle. The results my clients get are the evidence I seek to create.</p>
        `
	},
	{
		value: '3',
		title: 'What if I’ve never done anything like this before?',
		content: `
            <p>That\’s completely fine. You don\’t need to prepare or have any prior experience. My work is simple, grounding, and respectful — most clients say they felt at ease within the first few minutes of arriving.</p>
        `
	},
	{
		value: '4',
		title: 'Will I be expected to talk about personal issues?',
		content: `
            <p>Not at all. You\’re welcome to share whatever feels comfortable, but there\’s no pressure to open up. Some people speak the whole way through. Others say nothing and simply rest. Both are welcome.</p>
        `
	},
];
