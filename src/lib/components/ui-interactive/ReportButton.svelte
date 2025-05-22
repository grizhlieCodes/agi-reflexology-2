<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';

	type BrowserInfo = {
		name: string;
		version: string;
		userAgent: string;
	};

	// For navigator.userAgentData (experimental)
	interface NavigatorUAData extends Navigator {
		readonly userAgentData?: {
			readonly brands: Array<{ brand: string; version: string }>;
			readonly mobile: boolean;
			getHighEntropyValues(hints: string[]): Promise<any>;
		};
	}

	type ReportData = {
		screenshot?: string | null;
		url?: string;
		errors?: any[];
		timestamp?: string;
		browser?: BrowserInfo;
		userDescription?: string;
	};

	let formEl: HTMLFormElement | undefined;
	let isCapturing = $state(false);
	let reportData = $state<ReportData>({});
	let userDescription = $state('');
	let screenshotPreview = $state<string | null>(null);
	let modalVisible = $state(false);

	async function captureScreenshot(): Promise<string | null> {
		if (!browser) return null;
		try {
			const stream = await navigator.mediaDevices.getDisplayMedia({ 
				video: { mediaSource: "screen", cursor: "always" } as any,
				audio: false,
				preferCurrentTab: true 
			});
			const video = document.createElement('video');
			video.srcObject = stream;
			await video.play();

			const canvas = document.createElement('canvas');
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;

			const ctx = canvas.getContext('2d');
			if (!ctx) {
				console.error('Could not get 2D context from canvas');
				stream.getTracks().forEach((track) => track.stop());
				return null;
			}
			ctx.drawImage(video, 0, 0);

			stream.getTracks().forEach((track) => track.stop());
			return canvas.toDataURL('image/jpeg', 0.8);
		} catch (error) {
			console.error('Failed to capture screenshot with mediaDevices:', error);
			if ((error as Error).name === 'NotAllowedError' || (error as Error).name === 'AbortError') {
				alert('Screenshot capture was cancelled or not allowed.');
			} else {
				alert('Could not capture screenshot. See console for details.');
			}
			return null;
		}
	}

	async function gatherConsoleErrors(): Promise<any[]> {
		if (!browser) return [];
		return (window as any).__errorLog || [];
	}

	async function getBrowserInfo(): Promise<BrowserInfo> {
		if (!browser) return { name: '', version: '', userAgent: '' };

		try {
			const nav = navigator as NavigatorUAData;
			if (nav.userAgentData && typeof nav.userAgentData.getHighEntropyValues === 'function') {
				const uaData = nav.userAgentData;
				const browserData = await uaData.getHighEntropyValues(['browserVersion', 'platform', 'model']);
				const brands = uaData.brands;
				const significantBrand = brands.find((b: any) => b.brand !== "Chromium" && b.brand !== "Google Chrome") || brands.find(b => b.brand);
				return {
					name: significantBrand?.brand || 'Unknown',
					version: browserData?.browserVersion || significantBrand?.version || 'Unknown',
					userAgent: navigator.userAgent
				};
			}
		} catch (error) {
			console.warn('Failed to get detailed browser info via userAgentData:', error);
		}

		const userAgent = navigator.userAgent;
		let match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		let name = match[1] || '';
		let version = match[2] || '';

		if (/trident/i.test(name)) {
			match = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
			return { name: 'IE', version: match[1] || '', userAgent };
		}
		if (name === 'Chrome') {
			const edgeMatch = userAgent.match(/\b(Edg|Edge)\/(\d+)/);
			if (edgeMatch) return { name: 'Edge', version: edgeMatch[2], userAgent };
			const operaMatch = userAgent.match(/\bOPR\/(\d+)/);
			if (operaMatch) return { name: 'Opera', version: operaMatch[1], userAgent };
		}

		return { name: name || 'Unknown', version: version || 'Unknown', userAgent };
	}

	async function handleReportButtonClick() {
		isCapturing = true;
		try {
			const screenshot = await captureScreenshot();
			screenshotPreview = screenshot;
			const errors = await gatherConsoleErrors();
			const currentPath = browser ? window.location.href : '';
			const browserInfo = await getBrowserInfo();

			reportData = {
				screenshot,
				url: currentPath,
				errors,
				timestamp: new Date().toISOString(),
				browser: browserInfo
			};
			modalVisible = true;
		} catch (error) {
			console.error('Error preparing report data for modal:', error);
			alert('Failed to prepare report. Please check console.');
		} finally {
			isCapturing = false;
		}
	}

	function submitReportHandler() {
		if (!formEl) {
			console.error('Form element not found for submission.');
			alert('Could not submit report. Form element missing.');
			return;
		}
		reportData = { ...reportData, userDescription: userDescription };
		
		const reportDataInput = formEl.elements.namedItem('reportData') as HTMLInputElement;
		if (reportDataInput) {
			reportDataInput.value = JSON.stringify(reportData);
		} else {
			console.error('reportData input field not found in the form.');
			alert('Critical error: reportData input field missing.');
			return;
		}

		formEl.requestSubmit();
		modalVisible = false;
	}

	function cancelReport() {
		modalVisible = false;
		screenshotPreview = null;
		userDescription = '';
	}

	$effect(() => {
		if (!modalVisible) {
			// User description is reset via cancelReport or when modal is closed by other means
		}
	});

</script>

<!-- Report Button -->
<button
	type="button"
	on:click={handleReportButtonClick}
	disabled={isCapturing}
	class="fixed bottom-10 left-10 z-[998] group flex h-min cursor-pointer flex-row items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-red-700 transition-all duration-300 hover:bg-red-300 hover:text-red-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-red-700 dark:text-red-100 dark:hover:bg-red-600 dark:hover:text-red-50"
>
	{#if isCapturing}
		<svg
			class="mr-1 h-5 w-5 animate-spin text-red-700 dark:text-red-100"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		Capturing...
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-5 w-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 3v1.5M3 21v-1.5M21 3v1.5M21 21v-1.5M12 3v1.5M12 21v-1.5M3 12h1.5M21 12h-1.5M12 12a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Z"
			/>
			<path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5-3.75 3.75-3.75-3.75" />
		</svg>
		Report Bug
	{/if}
</button>

<!-- Modal -->
{#if modalVisible}
	<div class="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm" on:click|self={cancelReport}>
		<div class="w-[90vw] max-w-lg transform rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800" role="dialog" aria-modal="true" aria-labelledby="modal-title">
			<div class="mb-4">
				<h2 id="modal-title" class="text-xl font-semibold text-gray-900 dark:text-gray-100">Submit Bug Report</h2>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
					Please review the captured information and add any relevant details below.
				</p>
			</div>

			{#if screenshotPreview}
				<div class="mb-4">
					<h3 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Screenshot Preview:</h3>
					<img src={screenshotPreview} alt="Screenshot Preview" class="max-h-60 w-full rounded-md border border-gray-300 object-contain dark:border-gray-600" />
				</div>
			{:else if isCapturing}
				<p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Generating screenshot...</p>
			{:else}
				<p class="mb-4 text-sm text-red-500 dark:text-red-400">Could not capture screenshot. You can still submit the report with other details.</p>
			{/if}

			<div class="mb-4">
				<label for="userDescription" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Optional Details:</label>
				<textarea
					id="userDescription"
					bind:value={userDescription}
					rows="4"
					placeholder="Describe what you were doing, what happened, or any other relevant information..."
					class="w-full rounded-md border-gray-300 p-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-400"
				></textarea>
			</div>

			<div class="mt-6 flex justify-end gap-3">
				<button
					type="button"
					on:click={cancelReport}
					class="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"
				>
					Cancel
				</button>
				<button
					type="button"
					on:click={submitReportHandler}
					class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800"
				>
					Submit Report
				</button>
			</div>
		</div>
	</div>
{/if}

<!-- Hidden Form for SvelteKit Action -->
<form
	method="POST"
	action="?/sendErrorReport"
	bind:this={formEl}
	use:enhance={() => {
		return async ({ result }) => {
			console.log('Form submission result:', result);
			if (result.type === 'success') {
				// Assuming the server action returns { success: boolean, error?: string } in result.data
				if (result.data?.success) {
					alert('Bug report sent successfully!');
				} else {
					alert(`Failed to send bug report: ${result.data?.error || 'Unknown server issue.'}`);
				}
			} else if (result.type === 'error') {
				// This handles network errors or unhandled exceptions on the server side caught by SvelteKit
				const errorMessage = typeof result.error === 'string' ? result.error : (result.error as Error)?.message || JSON.stringify(result.error);
				alert(`Failed to send bug report: ${errorMessage || 'A network or server error occurred.'}`);
			} else if (result.type === 'failure') {
				// This handles actions that explicitly use fail() from @sveltejs/kit
				// result.data would contain the payload from fail()
				const errorData = result.data as any;
				alert(`Failed to send bug report: ${errorData?.message || errorData?.error || 'Server validation failed or action failed explicitly.'}`);
			} else {
				alert('Failed to send bug report. An unexpected outcome occurred.');
			}
		};
	}}
	class="hidden"
>
	<input type="hidden" name="reportData" value={JSON.stringify(reportData)} />
</form>
