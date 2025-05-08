<script lang="ts">
	import Text from './Text.svelte';

	type Testimonial = {
		children: any;
		quotationMark?: boolean;
		authorName: string;
		authorTitle: string;
	};
	let { children, quotationMark = true, authorName, authorTitle }: Testimonial = $props();
</script>

<div class="flex w-full flex-col gap-4">
	<img
		src="https://seerstudio.b-cdn.net/image-tests/quotation-marks-icon.webp"
		alt="illustration of a quotation mark"
		role="presentation"
		class="size-12
	-scale-x-100 rotate-180 md:size-16 lg:size-20 -translate-x-3"
	/>
	<div class="flex flex-col gap-4">
		<Text type="p" style="h6" class="text-primary-800 dark:text-primary-300 font-normal">
			{@render children()}
		</Text>
        <div>
            <Text type="p" style="para4" class="font-bold text-neutral-700 dark:text-neutral-300">
                {authorName}
            </Text>
            <Text type="p" style="para4" class="text-neutral-400 dark:text-neutral-500">
                {authorTitle}
            </Text>
        </div>
	</div>
</div>
