<script lang="ts">
	import Text from './Text.svelte';

	type Testimonial = {
		children: any;
		quotationMark?: boolean;
		authorName: string;
		authorTitle?: string;
	};
	let { children, quotationMark = true, authorName, authorTitle }: Testimonial = $props();
</script>

<div class="flex w-full flex-col gap-4">
	<img
		src="https://seerstudio.b-cdn.net/image-tests/quotation-marks-icon.webp"
		alt="illustration of a quotation mark"
		role="presentation"
		class="size-10
	-translate-x-3 -scale-x-100 rotate-180 text-inherit md:size-12 lg:size-16"
	/>
	<div class="flex flex-col gap-4">
		<Text type="p" style="h6" class="text-primary-800 dark:text-primary-200 font-normal">
			{@render children()}
		</Text>
		<div>
			{#if authorName}
				<!-- content here -->
				<Text type="p" style="para4" class="font-bold text-neutral-700 dark:text-neutral-300">
					{authorName}
				</Text>
			{/if}
			{#if authorTitle}
				<!-- content here -->
				<Text type="p" style="para4" class="text-neutral-400 dark:text-neutral-400">
					{authorTitle}
				</Text>
			{/if}
		</div>
	</div>
</div>
