<script lang="ts">
    import Badge from "$lib/components/ui/Badge.svelte";
	import type * as PriceCardTypes from '$lib/schemas/components/priceCard';
	import Text from "$lib/components/ui/Text.svelte";

    interface PriceCardBody {
        badges: PriceCardTypes.Badge[];
        divider?: boolean;
        description: string;
    }

    let {badges, divider, description}: PriceCardBody = $props()
</script>

<div class="flex flex-row flex-wrap justify-between gap-1">
    {#each badges.time as badge}
        <!-- content here -->
        <Badge type={badge.type}>
            <badge.Icon />
            <span>
                {badge.content}
            </span>
        </Badge>
    {/each}
    <div class="flex gap-1">
        {#each badges.massage_areas as infoBadge}
            <Badge type={infoBadge.type}>
                {#if infoBadge.Icon}
                    <infoBadge.Icon />
                {/if}
                <span>
                    {infoBadge.content}
                </span>
            </Badge>
        {/each}
    </div>
</div>

{#if divider}
    <span class="block h-[1px] w-full bg-neutral-300 dark:bg-neutral-700"></span>
{/if}

<Text type="p" style="para5" class="w-full text-neutral-500 dark:text-neutral-400">
    {description}
</Text>