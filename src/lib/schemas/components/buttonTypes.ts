// Assuming these unions are defined in this file or can be exported/imported
export type ButtonTypes = 'default' | 'default_light' | 'primary' | 'outline' | 'plain' | 'secondary' | 'warning' | 'danger' | 'info';
export type ButtonSizes = 1 | 2 | 3 | 4 | 5;

// Import standard HTML attributes type from svelte/elements
import type { HTMLAttributes } from 'svelte/elements';
import type { snippet } from 'svelte'; // Import snippet type if children is dynamic

// Define the specific props declared in $props()
interface ButtonSpecificProps {
	// children can be static content or a dynamic snippet
	// Using 'any' mirrors your current code, but 'snippet' is more specific for dynamic child content in Svelte 5
	children: any; // Or type as `snippet` if the parent passes via {@render children()}

	href?: string; // Optional string for anchor behavior
	onclick?: () => void; // Optional function for click handler
	ariaLabel: string; // Required string (based on your $props() not marking it optional)
	disabled?: boolean; // Optional boolean, defaults to false
	iconOnly?: boolean; // Optional boolean, defaults to false
	type: ButtonTypes; // Required prop using the ButtonTypes union
	size: ButtonSizes; // Required prop using the ButtonSizes union
	class?: string; // Optional string for additional CSS classes
}

// Combine the specific props with standard HTML attributes to cover ...restProps
// We use HTMLAttributes<HTMLElement> as a general way to include attributes
// like id, style, data-*, etc., that are spread onto the root element (Button.Root)
export type ButtonProps = ButtonSpecificProps & HTMLAttributes<HTMLElement>;
