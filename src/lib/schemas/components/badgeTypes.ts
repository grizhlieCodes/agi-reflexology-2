export interface Badge {
    children: any;
    type: BadgeTypes;
    restProps?: any;
    class?: string;
}


export type BadgeTypes = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';


// First, define the union of the specific class names
export type BadgeClassNames =
    | 'badgeDefault'
    | 'badgePrimary'
    | 'badgeSecondary'
    | 'badgeSuccess'
    | 'badgeWarning'
    | 'badgeDanger'
    | 'badgeInfo';

// Then, use a mapped type based on your existing BadgeTypes
// This ensures that the keys of the object match your BadgeTypes union
export type BadgeTypeMap = {
    [K in BadgeTypes]: BadgeClassNames; // Maps each BadgeTypes key to a BadgeClassNames value
};