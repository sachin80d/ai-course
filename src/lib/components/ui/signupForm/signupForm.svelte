<script lang="ts">
	import { cn } from '$lib/utils';
	import { Github, Instagram, Twitter, PhoneIncoming } from "lucide-svelte";
	import Input from './Input.svelte';
	import Label from './Label.svelte';
	import { createEventDispatcher } from 'svelte';
	import BackgroundGradient from '$lib/components/magic/BackgroundGradient/BackgroundGradient.svelte';

	export let showModal = false;
    export let showToast = false;
    export let toastTitle = "";
    export let toastMessage = "";
	export let loading = false;
	const dispatch = createEventDispatcher();

    async function handleSubmit(e: SubmitEvent) {
        loading = true;
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement).value.replace(/\+/g, '')
    };
    const webhookUrl = "https://script.google.com/macros/s/AKfycbw8LpL1WBp3ORr7wTm_XTROHtgauAQW6_3UJgHJusq1uG2o-L1v2j0kdw3vIniCPzcMRg/exec";
        try {
        const response = await fetch(webhookUrl, {
            redirect: "follow",
            method: "POST",
            headers: {
               "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(data)
        });

        // Handle response
        const result = await response.json();
        if (result.status == "success") {
            loading = false;
            toastTitle = "Thanks for signing up!";
            toastMessage = "We will call you back within 12 hours and help you get started.";
            showToast = true
            showModal = false;
        } else {
            loading = false;
            toastTitle = "Oops! Something went wrong.";
            toastMessage = "Please retry later or whatsapp us directly on +91 9910810909";
            showToast = true
            showModal = false;
        }
        console.log("Response:", result);
    } catch (error) {
        console.error("Error submitting form:", error);
    }
}

    import { Jumper } from 'svelte-loading-spinners';

</script>

{#if showModal}

<div 
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
    on:click|self={() => showModal = false}
    on:keydown|self={(e) => e.key === 'Escape' && (showModal = false)}
    role="button"
    tabindex="0"
>
	<BackgroundGradient containerClassName="signup-form-modal  max-w-[90%] mx-auto" className="rounded-[22px] p-1 bg-white dark:bg-zinc-900">

<div
	class=" mx-auto w-full max-w-md border rounded-[22px] border-gray-300 bg-white shadow dark:border-gray-800 dark:bg-black md:rounded-2xl p-4 md:p-8"
>
<h2
			class="relative z-10 pb-5 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans font-bold text-transparent text-6xl md:text-7xl"
		>
			Sign Up
		</h2>
	<p class="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
		Receive a callback within 12 hours once you signup.
	</p>

	<form class="my-8" on:submit={handleSubmit}>
		<div class="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
			<div class={'flex w-full flex-col space-y-2'}>
				<Label htmlFor="name">Name</Label>
				<Input 
					id="name" 
					placeholder="Tyler" 
					type="text"
					required
					minlength="2"
					maxlength="50"
					pattern="[A-Za-z\s]+"
					title="Please enter a valid name (letters and spaces only)"
				/>
			</div>
		</div>
		<div class={'mb-4 flex w-full flex-col space-y-2'}>
			<Label htmlFor="email">Email Address</Label>
			<Input id="email" placeholder="projectmayhem@gmail.com" type="email" required />
		</div>
		<div class={'mb-4 flex w-full flex-col space-y-2'}>
			<Label htmlFor="phone">Phone</Label>
			<Input 
				id="phone" 
				placeholder="+91 9102121012" 
				type="tel"
				required
                minlength="10"
                pattern="[+]?[0-9]+[ ]?[0-9]*"
				title="Please enter a valid phone number"
				maxlength="15"
			/>
		</div>
		<!-- <div class={cn('mb-4 flex w-full flex-col space-y-2')}>
			<Label htmlFor="password">Password</Label>
			<Input id="password" placeholder="••••••••" type="password" />
		</div> -->
		<!-- <div class={cn('mb-8 flex w-full flex-col space-y-2')}>
			<Label htmlFor="twitterpassword">Your twitter password</Label>
			<Input id="twitterpassword" placeholder="••••••••" type="twitterpassword" />
		</div> -->

        <button
        class="group/btn relative flex items-center justify-center h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
    >
            <span>Receive a Callback &nbsp;&nbsp;</span><PhoneIncoming class="w-4 h-4" />
        
			<span
				class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
			/>
			<span
				class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
			/>
		</button>

		<div
			class="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
		/>

		<div class="flex flex-col space-y-4 hidden">
			<button
				class=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
				type="submit"
			>
				<Github class="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
				<span class="text-sm text-neutral-700 dark:text-neutral-300"> GitHub </span>
				<span
					class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
				/>
				<span
					class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
				/>
			</button>
			<button
				class=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
				type="submit"
			>
				<Twitter class="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
				<span class="text-sm text-neutral-700 dark:text-neutral-300"> Google </span>
				<span
					class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
				/>
				<span
					class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
				/>
			</button>
			<button
				class=" group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
				type="submit"
			>
				<Instagram class="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
				<span class="text-sm text-neutral-700 dark:text-neutral-300"> OnlyFans </span>
				<span
					class="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"
				/>
				<span
					class="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"
				/>
			</button>
		</div>
	</form>
</div>
</BackgroundGradient>
</div>
{#if loading}
	<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
		<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
	</div>
{/if}

{/if}

{#if showToast}
<div 
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
    on:click|self={() => showToast = false}
    on:keydown|self={(e) => e.key === 'Escape' && (showToast = false)}
    role="button"
    tabindex="0"
>
	<BackgroundGradient className="rounded-[22px] max-w-sm p-1 bg-white dark:bg-zinc-900 ">

<div
	class=" mx-auto w-full p-5 max-w-md rounded-[22px] border border-gray-300 bg-white shadow dark:border-gray-800 dark:bg-black md:rounded-2xl md:p-8"
>
<h3
			class="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-3xl font-bold text-transparent md:text-3xl"
		>
			Thanks for signing up!
		</h3>
	<p class="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 text-center">
		We will call you back within 12 hours and help you get started.
	</p>
    </div>
    </BackgroundGradient>
    </div>
{/if}