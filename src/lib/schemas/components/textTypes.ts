export type TextTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'blockquote' | 'cite';
export type TextStyles = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9' | 'h10' | 'h11' | 'h12' | 'para1' | 'para2' | 'para3' | 'para4' | 'para5' | 'paraBase' | 'para6' | 'para7' | 'para8' | 'para9' | 'para10' | 'eyebrow' | 'quote' | 'sr' | 'internal_error' | 'navLink';


// Text style options (same as TextTypeValue)
export type TextStyleValue = TextStyles;
export type TextStyleOptions = Record<TextStyleValue, string>;