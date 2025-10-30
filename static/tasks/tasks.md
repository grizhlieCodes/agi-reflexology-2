# Massage Service Removal Tasks

This document tracks all instances of massage services in the codebase that need to be removed or updated.

---

## 1. PAGES TO REMOVE

### Route Files
- [ ] `/src/routes/services/massage/+page.svelte` - Main massage service page

---

## 2. COMPONENTS TO REMOVE

### Massage-Specific Components Directory
Entire directory: `/src/lib/pages/services/massage/`

- [ ] `MassageCommonReasons.svelte`
- [ ] `MassageExpectations.svelte`
- [ ] `MassageFaq.svelte`
- [ ] `MassageHero.svelte`
- [ ] `MassageLocation.svelte`
- [ ] `MassageTestimonial.svelte`

---

## 3. NAVIGATION TO UPDATE

### `/src/lib/data/navigation/navigation.ts`

#### Header Links (lines 82-83)
- [ ] Remove massage link from Services dropdown:
  ```typescript
  {
    content: 'Massage',
    href: '/services/massage'
  }
  ```

#### Footer Links (line 136)
- [ ] Fix incorrect footer link that points to `/services/massage` but should probably point elsewhere
  - Current: `getLink('Locations', '/services/massage')`
  - This appears to be a typo - should likely be `/locations` instead

---

## 4. DATA FILES TO UPDATE

### `/src/lib/data/price_cards.ts`

Remove all price cards with `treatment_type: 'massage'`:

- [ ] Lines 67-85: **Head, Neck & Face Massage** (£40, 30min)
- [ ] Lines 86-104: **Back Tension Release** (£65, 45min)
- [ ] Lines 105-123: **Front of Legs Massage** (£40, 30min)
- [ ] Lines 124-142: **Back of Legs Massage** (£40, 30min)
- [ ] Lines 143-161: **Arms & Hands Massage** (£40, 30min)
- [ ] Lines 162-180: **Aithein Full Body Massage** (£110, 150min)

**Total: 6 massage treatment cards to remove**

### `/src/lib/data/faqs/faqs.ts`

#### FAQ Entries to Remove/Update

**General FAQs (to update/revise):**
- [ ] Line 12: "...within the scope of the service you've booked (either Reflexology or Massage)" - remove massage reference
- [ ] Lines 17-25: "Do I need to choose Reflexology or Massage in advance?" - entire FAQ needs revision or removal
- [ ] Line 57: "This isn't just a massage or pressure-point routine..." - revise wording
- [ ] Line 64: "Reflexology and massage have both been used..." - revise to focus on reflexology only
- [ ] Line 88: "...select a specific treatment when booking (Reflexology or Massage)..." - remove massage reference
- [ ] Lines 93-95: "Can I switch between Reflexology and Massage on the day?" - entire FAQ to remove
- [ ] Lines 107-109: "How do I know if Reflexology or Massage is better for me?" - entire FAQ to remove
- [ ] Line 123: "Is reflexology just a fancy foot massage?" - keep but possibly revise
- [ ] Lines 172-174: "When should I choose a massage instead of reflexology?" - entire FAQ to remove

**Massage-Specific FAQs Section (lines 178+):**
- [ ] Remove entire `massage_faqs` export and all massage FAQs:
  - "What's the difference between Aithein Healing Massage and a regular massage?"
  - "Is this a deep tissue massage?"
  - "What's the difference between massage and reflexology?"
  - Plus ~5 more massage-specific FAQs

**Location FAQs to Update:**
- [ ] Line 271: "If you require Reflexology or Massage..." - remove massage reference
- [ ] Line 278: "I offer all of my services, Reflexology and Massage treatments..." - remove massage reference
- [ ] Line 308: "Massage equipment would be too heavy to carry..." - entire sentence needs revision or removal
- [ ] Line 347: "...fully set up for reflexology and massage..." - remove massage reference
- [ ] Line 354: "...Reflexology (Face, Hands, Feet), as well as all massage treatments..." - remove massage reference
- [ ] Line 375: "However, only at the Burnham studio can I offer my full massage menu..." - revise or remove
- [ ] Line 396: "...reflexology or massage session..." - remove massage references (multiple instances)
- [ ] Lines 410-412: "Can I book a massage with you at Reflexions Chelsea?" - entire FAQ to remove
- [ ] Lines 462-464: "Can I book a massage with you at Reflexions Bayswater?" - entire FAQ to remove
- [ ] Lines 521-523: "Can I book a massage as a home visit?" - entire FAQ to remove

### `/src/lib/data/head_data.ts` (SEO/Meta Data)

- [ ] Lines 7-8: Update `/services` page meta to remove massage mentions:
  ```typescript
  title: 'Reflexology & Healing Massage Services | Agi Reflexology'
  description: "...reflexology and massage treatments..."
  ```

- [ ] Lines 14-17: Remove entire `/services/massage` page meta entry

- [ ] Lines 20-21: Update `/contact` page description - remove "or massage"

- [ ] Lines 24-25: Update `/faq` page description - remove "massage" reference

- [ ] Lines 44-45: Update `/locations/agi-studio/burnham` description - remove "& Massage"

### `/src/routes/+layout.ts`

- [ ] Lines 13-14: Update default description to remove "reflexology-massage techniques" phrase

### `/src/routes/sitemap.xml/+server.ts`

- [ ] Line 5: Remove `/services/massage` from staticPages array

---

## 5. CONTENT TO EDIT (References in Other Pages)

### Home Page Components

#### `/src/lib/pages/home/HomeHero.svelte`
- [ ] Line 100: Change "Reflexology & Massage Treatments" to just "Reflexology Treatments"
- [ ] Line 106: Change "reflexology-massage techniques" to "reflexology techniques"

#### Other Home Components
- [ ] `/src/lib/pages/home/HomeMyApproach.svelte` - check for massage mentions
- [ ] `/src/lib/pages/home/HomepageProblem.svelte` - check for massage mentions

### Services Components

#### `/src/lib/pages/services/ServicesHero.svelte`
- [ ] Check and update any massage references

#### `/src/lib/pages/services/ServicesDirections.svelte`
- [ ] Check and update any massage references

### About Page Components
- [ ] `/src/lib/pages/about/AboutHero.svelte` - check for massage mentions
- [ ] `/src/lib/pages/about/AboutPath.svelte` - check for massage mentions
- [ ] `/src/lib/pages/about/AboutExperienceTraining.svelte` - check for massage mentions

### Reflexology Page Components
- [ ] `/src/lib/pages/services/reflexology/ReflexologyHero.svelte` - check for massage comparisons
- [ ] `/src/lib/pages/services/reflexology/ReflexologyStepByStep.svelte` - check for massage mentions
- [ ] `/src/lib/pages/services/reflexology/ReflexologyHelpfulClarification.svelte` - check for massage mentions

### Contact & Legal Pages
- [ ] `/src/routes/contact/+page.svelte` - check for massage service references
- [ ] `/src/routes/faq/+page.svelte` - ensure massage FAQs are properly excluded
- [ ] `/src/routes/terms-and-conditions/+page.svelte` - check for massage mentions
- [ ] `/src/routes/disclaimer/+page.svelte` - check for massage mentions

---

## 6. SCHEMAS & SCRIPTS TO REVIEW

### `/src/lib/schemas/components/priceCard.ts`
- [ ] Check if `treatment_type` enum needs updating to remove 'massage'
- [ ] Review if massage-related type definitions can be removed

### `/src/lib/scripts/badges.ts`
- [ ] Lines 69-71: Review `getBodyPartAreaBadges()` function - uses "massageAreaNames" parameter
  - Rename parameter to generic "bodyPartNames" or "areaNames"

### `/src/lib/stores/treatments.svelte.js`
- [ ] Lines 12-13: Remove commented out massage area variables:
  ```javascript
  // aval_massage_areas = [""]
  // sel_massage_areas = [""]
  ```

---

## 7. LOCATION DATA

### `/src/lib/data/locations.ts`
- [ ] Review location data to ensure no massage badges or references exist
- [ ] Update location descriptions if they mention massage services

---

## 8. ADDITIONAL FILES TO REVIEW

### Documentation
- [ ] `CLAUDE.md` - Update to remove massage references from project description
- [ ] `does-not-support-grid.md` - Check for massage mentions

### Test/Example Files
- [ ] `/src/lib/data/test.js` - Check for massage test data
- [ ] `/src/lib/data/example-image.js` - Check for massage-related images

---

## Summary Statistics

**Total Items to Address:**
- Pages to remove: 1
- Component files to remove: 6
- Navigation links to remove: 2
- Price cards to remove: 6
- FAQs to remove/update: ~20
- Content edits needed: ~15 files
- Meta/SEO entries to update: 5

---

## Notes

- Do NOT remove anything until all items are reviewed and confirmed
- Some content may need rewriting rather than simple deletion (e.g., FAQs that compare reflexology to massage)
- Check for any booking links or CTAs that specifically point to massage services
- After removal, test the treatments filter page to ensure it still works without massage options
- Review any images that might be massage-specific and remove if necessary
