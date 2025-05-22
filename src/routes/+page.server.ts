import type { Actions } from './$types';
import nodemailer from 'nodemailer';

export const actions: Actions = {
	sendErrorReport: async ({ request }) => {
		const formData = await request.formData();
		const reportDataString = formData.get('reportData') as string;

		if (!reportDataString) {
			return { success: false, error: 'No report data received.' };
		}

		try {
			const report = JSON.parse(reportDataString);

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'rafal.potasz@gmail.com',
					pass: 'vbil nvwg taoc zfcc' // Consider using environment variables for security
				}
			});

			let htmlBody = `
                <h1>Bug Report</h1>
                <p><strong>URL:</strong> ${report.url || 'N/A'}</p>
                <p><strong>Timestamp:</strong> ${report.timestamp || 'N/A'}</p>
                <p><strong>Browser:</strong> ${report.browser?.name || 'N/A'} ${report.browser?.version || ''}</p>
                <p><strong>User Agent:</strong> ${report.browser?.userAgent || 'N/A'}</p>
                <h2>User Description:</h2>
                <pre>${report.userDescription || 'No description provided.'}</pre>
                <h2>Console Errors:</h2>
                <pre>${JSON.stringify(report.errors, null, 2)}</pre>
            `;

			const mailOptions: nodemailer.SendMailOptions = {
				from: '"Agi Reflexology Bug Reporter" <rafal.potasz@gmail.com>',
				to: 'rafal.potasz+agi@gmail.com',
				subject: 'New Bug Report from Agi Reflexology Website',
				html: htmlBody,
				attachments: []
			};

			if (report.screenshot && mailOptions.attachments) {
                const screenshotDataUrl = report.screenshot as string;
				mailOptions.attachments.push({
					filename: 'screenshot.jpg',
					path: screenshotDataUrl,
					cid: 'screenshot@agireflexology.com'
				});
                htmlBody += `<h2>Screenshot:</h2><img src="cid:screenshot@agireflexology.com" alt="Screenshot" style="max-width: 100%; height: auto;"/>`;
                mailOptions.html = htmlBody; 
			}

			await transporter.sendMail(mailOptions);

			console.log('Error report email sent successfully.');
			return { success: true };
		} catch (error) {
			console.error('Failed to send error report email:', error);
			const errorMessage = error instanceof Error ? error.message : 'Unknown error';
			return { success: false, error: `Failed to send report: ${errorMessage}` };
		}
	}
};
