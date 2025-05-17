// /contact/+page.server.ts
import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit'; // Add fail
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters'; // You have this
import { formSchema } from '$lib/schemas/contactFormSchema';
import nodemailer from 'nodemailer';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(formSchema));
    // console.log(form)
	return { form };
};

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'info@agireflexology.com',
		pass: 'ljwy wwdj nblj xuqv'
	}
});

const sendInternalEmail = async (data) => {
	const mailOptions = {
		from: 'info@agireflexology.com',
		to: 'info@agireflexology.com',
		subject: `New Form Submission from: ${data.first_name}`,
		html: `<!doctype html>
        <html>
        <body>
            <div
            style='background-color:#ffffff;color:#242424;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
            >
            <table
                align="center"
                width="100%"
                style="margin:0 auto;max-width:600px;background-color:#f2fbff"
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
            >
                <tbody>
                <tr style="width:100%">
                    <td>
                    <div style="border-radius:0;padding:16px 24px 16px 24px">
                        <h2
                        style="color:#191919;font-weight:bold;text-align:left;margin:0;font-size:24px;padding:16px 24px 28px 24px"
                        >
                        New Submission from: ${data.first_name}
                        </h2>
                    </div>
                    <div style="font-size:16px;padding:16px 24px 16px 24px">
                        <table
                        style="width: 100%; border-collapse: collapse; font-size: 16px; font-family: Arial, sans-serif; margin: 20px 0;"
                        >
                        <tbody>
                            <tr>
                            <th
                                style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;"
                            >
                                Name
                            </th>
                            <td style="border: 1px solid #ddd; padding: 8px;">
                                ${data.first_name} ${data.second_name}
                            </td>
                            </tr>
                            <tr>
                            <th
                                style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;"
                            >
                                Email
                            </th>
                            <td style="border: 1px solid #ddd; padding: 8px;">
                                ${data.email}
                            </td>
                            </tr>
                            <tr>
                            <th
                                style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;"
                            >
                                Tel Number
                            </th>
                            <td style="border: 1px solid #ddd; padding: 8px;">
                                ${data.phone_number}
                            </td>
                            </tr>
                            <tr>
                            <th
                                style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2; text-align: left;"
                            >
                                Message
                            </th>
                            <td style="border: 1px solid #ddd; padding: 8px;">
                            ${data.message}
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </body>
        </html>` // I need to create this template
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error) {
		console.log('fucked up', error);
		throw error;
	}
};

export const actions = {
	default: async (event) => {
		console.log('Action fired');
		const form = await superValidate(event.request, zod(formSchema)); // Pass the adapter here
		if (!form.valid) {
			console.log('Form invalid:', form.errors);
			return fail(400, { form });
		}

		console.log('Form valid. Data:', form.data);
		// TODO: Do something with the validated form.data
		// Example: await sendEmail(form.data);

		// Return the form with a status message

		if (form.valid) {
			await sendInternalEmail(form.data);
		}

		return message(form, 'Form posted successfully!');
	}
} satisfies Actions;
