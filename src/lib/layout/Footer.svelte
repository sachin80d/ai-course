<script>
	import DiscordSvg from '$lib/imgs/discord.svg';
	import TwitterSvg from '$lib/imgs/x.svg';
	import { ScanEye } from "lucide-svelte";
	import SignupForm from '$lib/components/ui/signupForm/signupForm.svelte';

	const footerNavs = [
		{
			label: 'Product',
			items: [
				{
					href: '/',
					name: 'Email Collection'
				},
				{
					href: '/pricing',
					name: 'Pricing'
				},
				{
					href: '/faq',
					name: 'FAQ'
				}
			]
		},

		{
			label: 'Community',
			items: [
				{
					href: '/',
					name: 'Discord'
				},
				{
					href: '/',
					name: 'Twitter'
				},
				{
					href: 'mailto:hello@chatcollect.com',
					name: 'Email'
				}
			]
		},
		{
			label: 'Legal',
			items: [
				{
					href: '/terms',
					name: 'Terms'
				},

				{
					href: '/privacy',
					name: 'Privacy'
				}
			]
		}
	];

	const footerSocials = [
		{
			href: '',
			name: 'Discord',
			icon: DiscordSvg
		},
		{
			href: '',
			name: 'Twitter',
			icon: TwitterSvg
		}
	];

	import { createEventDispatcher } from "svelte";
  let showModal = false;

</script>

<footer>
	<div class="mx-auto w-full max-w-screen-xl xl:pb-2">
		<div class="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
			<div class="mb-12 flex flex-col gap-4">
				<a href="/" class="flex items-center gap-2">
					<ScanEye class="size-8"/>
					<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
						NextQuant.AI
					</span>
				</a>
				<p class="max-w-xs">Algo Trading for Everyone</p>
			</div>
			<!-- <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
				{#each footerNavs as nav}
					<div>
						<h2
							class="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white"
						>
							{nav.label}
						</h2>
						<ul class="grid gap-2">
							{#each nav.items as item}
								<li>
									<a
										href={item.href}
										class="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
									>
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div> -->
		</div>

		<div
			class="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between"
		>
			<!-- <div class="flex items-center space-x-5 sm:mt-0 sm:justify-center">
				{#each footerSocials as social}
					<a
						href={social.href}
						class="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
					>
						<img src={social.icon} class="size-4" alt={social.name} />
						<span class="sr-only">{social.name}</span>
					</a>
				{/each}
			</div> -->
			<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
				Copyright ©
				{' '}
				{new Date().getFullYear()}
				{' '}
				<a href="/" class="cursor-pointer">NextQuant.AI</a>
				. All Rights Reserved.
			</span>
		</div>
	</div>
	<!-- Site Banner -->
</footer>

<!-- Trigger Button -->
<button 
	id="target-button"
	on:click={() => (showModal = true)}
	class="px-4 py-2 bg-blue-500 text-white rounded-md hidden"
>
	Open Signup
</button>

<!-- Modal Component -->
<SignupForm bind:showModal on:close={() => (showModal = false)} />
	<!-- <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
	  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
		<h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
		  Enter Your Details
		</h2>
  
		<input type="text" placeholder="Name" bind:value={name} class="w-full p-2 border rounded mb-2 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600" />
		<input type="email" placeholder="Email" bind:value={email} class="w-full p-2 border rounded mb-2 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600" />
		<input type="tel" placeholder="Phone" bind:value={phone} class="w-full p-2 border rounded mb-2 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600" />
  
		<div class="mt-4 flex justify-end space-x-2">
		  <button class="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-md" on:click={() => (showModal = false)}>
			Cancel
		  </button>
		  <button class="px-4 py-2 bg-blue-600 text-white rounded-md" on:click={submitForm}>
			Submit
		  </button>
		</div>
	  </div>
	</div> -->
