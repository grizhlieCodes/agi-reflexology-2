<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/section/Section.svelte';
	import Text from '$lib/components/ui/Text.svelte';
</script>

<Section section_id="terms-and-conditions" vertical_padding={12} horizontal_padding={4} grid_span="fullSpan">
	<Container class="max-w-3xl items-start text-left gap-6">
		<Text type="h1" style="h3" id="terms-heading">Terms and Conditions</Text>
		<Text type="p" style="paraBase">
			<strong>Last Updated:</strong> 22 May 2024 <!-- Or current date -->
		</Text>

		<Text type="p" style="paraBase">
			Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the agireflexology.com website (the "Website") and the reflexology and massage services (the "Services") offered by Agi Reflexology ("I", "my", "me"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
		</Text>

		<Text type="h2" style="h5" class="mt-4">1. Definitions</Text>
		<Text type="p" style="paraBase">
			- <strong>"Practitioner", "I", "my", "me":</strong> Refers to Agi Reflexology, operated by Agnieszka Maksimowicz.
			<br />
			- <strong>"Client", "you", "your":</strong> Refers to any individual booking or receiving Services, or using the Website.
			<br />
			- <strong>"Services":</strong> Refers to reflexology, massage, and any other treatments or consultations offered by Agi Reflexology.
			<br />
			- <strong>"Website":</strong> Refers to agireflexology.com.
		</Text>

		<Text type="h2" style="h5" class="mt-4">2. Services Offered</Text>
		<Text type="p" style="paraBase">
			I offer reflexology (including face, hands, and feet) and various massage therapies aimed at promoting general wellness, relaxation, and supporting the body's natural balance. My approach is holistic and client-centered.
		</Text>
		<Text type="p" style="paraBase">
			The Services provided are not intended to diagnose, treat, cure, or prevent any medical condition. They are not a substitute for professional medical advice, diagnosis, or treatment from a qualified healthcare provider. Please consult my <a href="/disclaimer" class="text-primary-600 dark:text-primary-400 hover:underline">Disclaimer</a> page for more information.
		</Text>

		<Text type="h2" style="h5" class="mt-4">3. Bookings and Confirmation</Text>
		<Text type="p" style="paraBase">
			Appointments for Services can be booked through the online booking system Fresha, or by contacting me directly via email or phone. 
		</Text>
		<Text type="p" style="paraBase">
			All bookings are subject to availability. Confirmation of your booking will typically be sent via email. If booking through Fresha, their confirmation system will apply. For direct bookings, I will confirm via email.
		</Text>

		<Text type="h2" style="h5" class="mt-4">4. Payment Policy</Text>
		<Text type="p" style="paraBase">
			Payment for Services is due before the session commences.
		</Text>
		<Text type="p" style="paraBase">
			Accepted payment methods include:
		</Text>
		<ul class="list-disc pl-6">
			<li><Text type="p" style="paraBase">Online payment via Fresha at the time of booking.</Text></li>
			<li><Text type="p" style="paraBase">Card payment (details for pre-payment will be provided if booking directly).</Text></li>
			<li><Text type="p" style="paraBase">Cash payment at the time of the appointment (please have the correct amount as change may not always be available).</Text></li>
		</ul>

		<Text type="h2" style="h5" class="mt-4">5. Cancellation, Rescheduling, and No-Show Policy</Text>
		<Text type="p" style="paraBase">
			I understand that sometimes adjustments to appointments are necessary. I request at least 24 hours' notice if you need to cancel or reschedule your appointment.
		</Text>
		<ul class="list-disc pl-6">
			<li><Text type="p" style="paraBase"><strong>Cancellations/Rescheduling with 24+ hours notice:</strong> No charge will apply. You can reschedule via Fresha, or by contacting me directly via email or phone.</Text></li>
			<li><Text type="p" style="paraBase"><strong>Cancellations/Rescheduling with less than 24 hours notice:</strong> The full session fee may be charged. This is at my discretion and depends on the circumstances.</Text></li>
			<li><Text type="p" style="paraBase"><strong>No-Shows:</strong> If you do not attend your appointment without any prior notification, the full session fee will be charged.</Text></li>
		</ul>

		<Text type="h2" style="h5" class="mt-4">6. Late Arrival Policy</Text>
		<Text type="p" style="paraBase">
			I strive to start all sessions on time. If you arrive late for your appointment, your session may be shortened to ensure I am on time for my subsequent clients. The full session fee will still apply for the originally booked duration.
		</Text>
		<Text type="p" style="paraBase">
			If you are only a few minutes late, I will do my best to accommodate the full session if my schedule permits, but this cannot be guaranteed.
		</Text>

		<Text type="h2" style="h5" class="mt-4">7. Client Responsibilities</Text>
		<Text type="p" style="paraBase">
			To ensure a safe and effective session, you agree to:
		</Text>
		<ul class="list-disc pl-6">
			<li><Text type="p" style="paraBase">Ensure good personal hygiene, including clean feet if receiving foot reflexology, or ensuring the area to be massaged is clean. Any areas with makeup (e.g., for face reflexology) should be clear of makeup prior to the session.</Text></li>
			<li><Text type="p" style="paraBase">Avoid consuming heavy meals, alcohol, or other intoxicating substances immediately before your session.</Text></li>
			<li><Text type="p" style="paraBase">Provide accurate and up-to-date health information on any consultation forms and verbally discuss any health concerns or changes with me prior to each session. This is crucial for tailoring the treatment safely and effectively.</Text></li>
		</ul>

		<Text type="h2" style="h5" class="mt-4">8. Practitioner's Rights</Text>
		<Text type="p" style="paraBase">
			I reserve the right to refuse or terminate a session at any time if:
		</Text>
		<ul class="list-disc pl-6">
			<li><Text type="p" style="paraBase">The client is under the influence of alcohol or non-prescribed drugs.</Text></li>
			<li><Text type="p" style="paraBase">The client exhibits inappropriate, disrespectful, or sexual behavior or makes inappropriate requests.</Text></li>
			<li><Text type="p" style="paraBase">The client has an undisclosed health condition that contraindicates the booked treatment or poses a risk to their health or mine.</Text></li>
		</ul>
		<Text type="p" style="paraBase">
			If a session is terminated due to the client's inappropriate behavior, the full session fee may still be payable.
		</Text>

		<Text type="h2" style="h5" class="mt-4">9. Services for Minors</Text>
		<Text type="p" style="paraBase">
			My services are primarily intended for adults. Currently, I do not have a specific policy against treating minors (individuals under the age of 18). However, should I agree to provide services to a minor, explicit written consent from a parent or legal guardian will be required prior to the first session. The parent or legal guardian may also be required to be present during the session, depending on the age of the minor and the nature of the treatment.
		</Text>

		<Text type="h2" style="h5" class="mt-4">10. Privacy and Data Protection</Text>
		<Text type="p" style="paraBase">
			I am committed to protecting your privacy. Your personal and health information will be collected, used, and stored in accordance with my <a href="/privacy-policy" class="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a>. Please review this policy to understand my data handling practices.
		</Text>

		<Text type="h2" style="h5" class="mt-4">11. Disclaimer of Liability</Text>
		<Text type="p" style="paraBase">
			The information provided on this Website and during consultations is for general wellness purposes only. For full details on the limitations of liability, please refer to my <a href="/disclaimer" class="text-primary-600 dark:text-primary-400 hover:underline">Disclaimer</a> page.
		</Text>

		<Text type="h2" style="h5" class="mt-4">12. Intellectual Property</Text>
		<Text type="p" style="paraBase">
			All content on this Website, including text, graphics, logos, images, and audiovisual content, is the property of Agi Reflexology or its content suppliers and is protected by United Kingdom and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Website without my express prior written permission.
		</Text>

		<Text type="h2" style="h5" class="mt-4">13. Changes to Terms and Conditions</Text>
		<Text type="p" style="paraBase">
			I reserve the right to modify or replace these Terms at any time at my sole discretion. If a revision is material, I will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at my sole discretion. By continuing to access or use my Service after those revisions become effective, you agree to be bound by the revised terms.
		</Text>

		<Text type="h2" style="h5" class="mt-4">14. Governing Law</Text>
		<Text type="p" style="paraBase">
			These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. My failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
		</Text>

		<Text type="h2" style="h5" class="mt-4">15. Contact Information</Text>
		<Text type="p" style="paraBase">
			If you have any questions about these Terms and Conditions, please contact me:
		</Text>
		<Text type="p" style="paraBase">
			Agi Reflexology<br />
			Agnieszka Maksimowicz<br />
			Email: <a href="mailto:info@agireflexology.com" class="text-primary-600 dark:text-primary-400 hover:underline">info@agireflexology.com</a>
		</Text>

	</Container>
</Section> 