import { z } from 'zod';
const e164 = /^\+?[1-9]\d{1,14}$/;

export const formSchema = z.object({
	first_name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be text only'
		})
		.min(1, { message: 'Name is required' }) // Good to have min(1) for required strings
		.max(40, { message: 'Cannot be more than 40 characters.' }),

	second_name: z
		.string({
			required_error: 'Second Name is required',
			invalid_type_error: 'Second Name must be text only'
		})
		.min(1, { message: 'Second Name is required' })
		.max(40, { message: 'Cannot be more than 40 characters.' }),

	email: z
		.string({
			required_error: 'Email is required'
			// invalid_type_error: 'Email must be alphanumeric' // .email() handles format
		})
		.min(1, { message: 'Email is required' })
		.email({ message: 'Must be a valid email address' }),

	phone_number: z
		.string()
		.regex(e164, {
			message: 'Invalid phone number (must be in E.164 format, e.g., +11234567890)'
		})
		.optional() // Use optional if it can be undefined
		.or(z.literal('')), // Or if an empty string is also acceptable when not provided

	subject: z
		.string({
			required_error: 'Subject is required',
			invalid_type_error: 'Subject must be text only'
		})
		.min(1, { message: 'Subject is required' })
		.max(100, { message: 'Subject cannot exceed 100 characters.' }),

	message: z
		.string({
			required_error: 'Message is required',
			invalid_type_error: 'Message must be text only'
		})
		.min(10, { message: 'Message must be at least 10 characters.' })
		.max(2000, { message: 'Message cannot exceed 2000 characters.' })
});
