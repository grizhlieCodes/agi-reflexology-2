<script lang="ts">
	import Button from '$lib/components/ui-interactive/Button.svelte';
	import InlineLink from '$lib/components/ui-interactive/InlineLink.svelte';
	import Text from '$lib/components/ui/Text.svelte';
	import type { FooterData } from '$lib/data/navigation/navigation';
	import Logo from '../Logo.svelte';

	let { footer_links, footer_logo, footer_business_name }: FooterData = $props();
</script>

<footer
	class="footer flex w-full items-center justify-center border
border-t border-neutral-100 bg-neutral-50 py-8 sm:py-12
dark:border-neutral-800 dark:bg-black/80"
>
	<div
		class="flex w-full max-w-5xl flex-col items-center justify-center
	gap-12 px-6 sm:px-8 lg:px-12 xl:gap-16 2xl:px-0"
	>
		<!-- ! LOGO (symbol only) -->
		<div class="[&_svg]:!size-14">
			<Logo {...footer_logo} linkClass="flex-col"></Logo>
		</div>
		<!-- ! LINKS ROW -->
		<div
			class="flex w-full max-w-3xl flex-col items-start gap-7
		text-center supports-[display:grid]:grid supports-[display:grid]:grid-cols-1 supports-[display:grid]:justify-items-center sm:flex-row sm:text-left
		supports-[display:grid]:sm:grid-cols-3"
		>
			{#each footer_links as column}
				<div class="flex flex-col items-center gap-0 sm:items-start">
					<Text type="span" style="h8">{column.column_title}</Text>
					{#each column.links as column_link}
						<Button
							href={column_link.href}
							type="plain"
							size={4}
							ariaLabel={`Navigate to the ${column_link.content} page.`}
							class="justify-start"
						>
							{column_link.content}
						</Button>
					{/each}
				</div>
			{/each}
		</div>
		<!-- ! Website Disclaimer  -->
		<div class="flex max-w-2xl flex-col items-center gap-1 text-center">
			<Text type="p" style="paraBase">
				© {new Date().getFullYear()}
				{footer_business_name} All rights reserved. Website design and content are property of {footer_business_name}.
				Unauthorised use or reproduction is prohibited.
			</Text>
			<Text type="span" style="eyebrow" class="text-base text-neutral-400 dark:text-neutral-400">
				Website design & development by <InlineLink
					href="https://seerstudio.co.uk"
					class="font-semibold
                text-neutral-400 underline dark:text-neutral-400">Seer Studio</InlineLink
				>
			</Text>
		</div>
	</div>
</footer>

<style>
	@reference "../../../../app.css";

	*:global(.footer) {
		--header-logo: var(--color-primary-600);
		--header-logo-dark: var(--color-primary-300);
	}
</style>
