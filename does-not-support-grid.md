# Files Using CSS Grid - Backward Compatibility Review

This document lists all files in the codebase that currently use CSS Grid and may need to be updated for backward compatibility with older browsers (Safari 2015 and similar).

## Files to Review for Grid → Flexbox Conversion

The following files contain CSS grid classes and should be reviewed for backward compatibility:

### Layout Components
- `/src/routes/+layout.svelte`
- `/src/lib/components/navigation/header/Header.svelte`
- `/src/lib/components/navigation/footer/Footer.svelte`

### Form Components
- `/src/lib/components/form/Form.svelte`

### Page Components

#### Home Pages
- `/src/lib/pages/home/HomeFaq.svelte`
- `/src/lib/pages/home/HomepageSolution.svelte`
- `/src/lib/pages/home/HomepageProblem.svelte`

#### About Pages
- `/src/lib/pages/about/AboutFaq.svelte`

#### Services Pages
- `/src/lib/pages/services/ServicesFaq.svelte`
- `/src/lib/pages/services/reflexology/ReflexologyFlowSteps.svelte`
- `/src/lib/pages/services/reflexology/ReflexologyFaq.svelte`
- `/src/lib/pages/services/massage/MassageFaq.svelte`
- `/src/lib/pages/services/massage/MassageLocation.svelte`

#### Location Pages
- `/src/lib/pages/locations/location_name/LocationFaq.svelte`
- `/src/lib/pages/locations/location_name/LocationHowItWorks.svelte` ✅ **COMPLETED**

#### Shared Components
- `/src/lib/pages/shared/PageCta.svelte`

### UI Components
- `/src/lib/components/ui/price-card/PriceCardHeader.svelte`
- `/src/lib/components/ui/price-card/PriceCardFooter.svelte`

### Route Pages
- `/src/routes/treatments/+page.svelte`

## Implementation Strategy

Use the pattern implemented in `LocationHowItWorks.svelte`:

1. **Default to Flexbox**: Use flexbox classes as the base layout for older browser support
2. **Conditional Grid**: Add `supports-[display:grid]:` prefix to all grid classes
3. **Equivalent Layouts**: Ensure flexbox behavior closely matches the original grid layout

### Example Pattern:
```html
<!-- Before -->
<div class="grid grid-cols-2 gap-4">

<!-- After -->
<div class="flex flex-row gap-4 supports-[display:grid]:grid supports-[display:grid]:grid-cols-2">
```

## Priority Order

Suggested order for updating components:
1. **High Priority**: Layout components (Header, Footer, main layout)
2. **Medium Priority**: Frequently used page components (FAQ sections, CTA)
3. **Low Priority**: Less critical UI components

## Notes

- Test with Safari 9.0 or similar older browser versions
- Verify layout behavior on mobile and desktop
- Check for any grid-specific features that don't have direct flexbox equivalents