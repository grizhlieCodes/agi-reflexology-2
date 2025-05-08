import type * as Type from './sectionTypes';

export const gridSpanOptions: Type.GridSpanOptions = {
	centeredSpan1: 'max-w-[50rem]',
	centeredSpan2: 'max-w-[60rem]',
	centeredSpan3: 'max-w-[70rem]',
	centeredSpan4: 'max-w-[80rem]',
	centeredSpan5: 'max-w-[90rem]',
	centeredSpan6: 'max-w-[100rem]',
	fullSpan: 'max-w-none'
};
export const justifyContentOptions: Type.JustifyContentOptions = {
	normal: 'justify-normal',
	start: 'justify-start',
	end: 'justify-end',
	center: 'justify-center',
	stretch: 'justify-stretch',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
};
export const alignItemsOptions: Type.AlignItemsOptions = {
	start: 'items-start',
	end: 'items-end',
	center: 'items-center',
	baseline: 'items-baseline',
	stretch: 'items-stretch'
};

export const yPaddingOptions: Type.YPaddingOptions = {
	'20': 'py-36 md:py-48 lg:py-60',
	'19': 'py-34 md:py-46 lg:py-58',
	'18': 'py-32 md:py-44 lg:py-56',
	'17': 'py-30 md:py-42 lg:py-54',
	'16': 'py-28 md:py-40 lg:py-52',
	'15': 'py-26 md:py-38 lg:py-48',
	'14': 'py-24 md:py-36 lg:py-44',
	'13': 'py-22 md:py-32 lg:py-40',
	'12': 'py-20 md:py-28 lg:py-36',
	'11': 'py-18 md:py-24 lg:py-32',
	'10': 'py-16 md:py-20 lg:py-28',
	'9': 'py-14 md:py-18 lg:py-24',
	'8': 'py-12 md:py-16 lg:py-20',
	'7': 'py-10 md:py-14 lg:py-16',
	'6': 'py-8 md:py-12 lg:py-14',
	'5': 'py-6 md:py-10 lg:py-12',
	'4': 'py-7 md:py-10 lg:py-12',
	'3': 'py-5 md:py-7 lg:py-9',
	'2': 'py-3 md:py-5 lg:py-7',
	'1': 'py-1 md:py-3 lg:py-5',
	'0': ''
};

export const xPaddingOptions: Type.XPaddingOptions = {
	'20': 'px-36 md:px-48 lg:px-60 xl:px-0',
	'19': 'px-34 md:px-46 lg:px-58 xl:px-0',
	'18': 'px-32 md:px-44 lg:px-56 xl:px-0',
	'17': 'px-30 md:px-42 lg:px-54 xl:px-0',
	'16': 'px-28 md:px-40 lg:px-52 xl:px-0',
	'15': 'px-26 md:px-38 lg:px-48 xl:px-0',
	'14': 'px-24 md:px-36 lg:px-44 xl:px-0',
	'13': 'px-22 md:px-32 lg:px-40 xl:px-0',
	'12': 'px-20 md:px-28 lg:px-36 xl:px-0',
	'11': 'px-18 md:px-24 lg:px-32 xl:px-0',
	'10': 'px-16 md:px-20 lg:px-28 xl:px-0',
	'9': 'px-14 md:px-18 lg:px-24 xl:px-0',
	'8': 'px-12 md:px-16 lg:px-20 xl:px-0',
	'7': 'px-10 md:px-14 lg:px-16 xl:px-0',
	'6': 'px-8 md:px-12 lg:px-14 xl:px-0',
	'5': 'px-6 md:px-10 lg:px-12 xl:px-0',
	'4': 'px-7 md:px-10 lg:px-12 xl:px-0',
	'3': 'px-5 md:px-7 lg:px-9 xl:px-0',
	'2': 'px-3 md:px-5 lg:px-7 xl:px-0',
	'1': 'px-1 md:px-3 lg:px-5 xl:px-0',
	'0': ''
};

export const gapOptions: Type.GapOptions = {
	'20': 'gap-60 md:gap-60 lg:gap-60',
	'19': 'gap-56 md:gap-58 lg:gap-60',
	'18': 'gap-52 md:gap-54 lg:gap-56',
	'17': 'gap-48 md:gap-50 lg:gap-52',
	'16': 'gap-44 md:gap-46 lg:gap-48',
	'15': 'gap-40 md:gap-42 lg:gap-44',
	'14': 'gap-36 md:gap-38 lg:gap-40',
	'13': 'gap-32 md:gap-34 lg:gap-36',
	'12': 'gap-28 md:gap-30 lg:gap-32',
	'11': 'gap-24 md:gap-26 lg:gap-28',
	'10': 'gap-20 md:gap-22 lg:gap-24',
	'9': 'gap-16 md:gap-18 lg:gap-20',
	'8': 'gap-14 md:gap-16 lg:gap-18',
	'7': 'gap-12 md:gap-14 lg:gap-16',
	'6': 'gap-10 md:gap-12 lg:gap-14',
	'5': 'gap-8 md:gap-10 lg:gap-12',
	'4': 'gap-6 md:gap-8 lg:gap-10',
	'3': 'gap-4 md:gap-6 lg:gap-8',
	'2': 'gap-3 md:gap-4 lg:gap-6',
	'1': 'gap-2 md:gap-3 lg:gap-4',
	'0': 'gap-0'
};

export const overflowOptions: Type.OverflowOptions = {
	hidden: 'overflow-hidden',
	scroll: 'overflow-scroll',
	auto: 'overflow-auto',
	visible: 'overflow-visible'
};

export const backgroundOptions: Type.BackgroundOptions = {
	none: 'bg-surface-none',
	default: 'bg-white dark:bg-neutral-950',
	'primary-50': 'bg-primary-50',
	'primary-100': 'bg-primary-100',
	'primary-200': 'bg-primary-200',
	'primary-300': 'bg-primary-300',
	'primary-400': 'bg-primary-400',
	'primary-500': 'bg-primary-500',
	'primary-600': 'bg-primary-600',
	'primary-700': 'bg-primary-700',
	'primary-800': 'bg-primary-800',
	'primary-900': 'bg-primary-900',
	'primary-950': 'bg-primary-950'
};