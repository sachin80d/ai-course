<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { AlignJustify, XIcon, AudioWaveformIcon, WaypointsIcon, RouteIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import NavbarMenu from '$lib/components/ui/navbar-menu/navbar-menu.svelte';
	import MenuItem from '$lib/components/ui/navbar-menu/MenuItem.svelte';
	import ProductItem from '$lib/components/ui/navbar-menu/ProductItem.svelte';
	import HoveredLink from '$lib/components/ui/navbar-menu/HoveredLink.svelte';
	import RetailerImg from '$lib/imgs/retailer.png';
	import HnisImg from '$lib/imgs/hnis.png';
	import BankImg from '$lib/imgs/bank.png';

	const menuItem = [
		{
			id: 1,
			label: 'Features',
			href: '#'
		},
		{
			id: 2,
			label: 'Pricing',
			href: '#'
		},
		{
			id: 3,
			label: 'Careers',
			href: '#'
		},
		{
			id: 4,
			label: 'Contact Us',
			href: '#'
		}
	];

	export let hamburgerMenuIsOpen = false;

	function toggleOverflowHidden(node: HTMLElement) {
		node.addEventListener('click', () => {
			hamburgerMenuIsOpen = !hamburgerMenuIsOpen;
			const html = document.querySelector('html');
			const navDiv = document.getElementById('nav-div');
			if (html) {
				if (hamburgerMenuIsOpen) {
					html.classList.add('overflow-hidden');	
					navDiv?.classList.add('small-height-full-width');
				} else {
					html.classList.remove('overflow-hidden');
					navDiv?.classList.remove('small-height-full-width');
				}
			}
		});
	}
	let innerWidth = 0;

	import { ScanEye } from "lucide-svelte";
	export const triggerButtonClick = () => {
		const targetButton = document.getElementById("target-button");
		if (targetButton) {
			console.log("Button clicked");
		targetButton.click();
		} else {
		console.warn("Button with ID 'target-button' not found!");
		}
	}

	let active: string | null = null;
	const setActive = (item: string | null) => {
		active = item;
	};

	import { onMount } from 'svelte';
	onMount(() => {
		console.log("Nav close click initiated registering");
		document.querySelectorAll('.nav-close-click').forEach(element => {
			console.log("Nav close click found");
			element.addEventListener('click', () => {
				const headerToggleButton = document.getElementById('header-toggle-button');
				if (headerToggleButton) {
					headerToggleButton.click();
				}
			});
		});
	});
	

</script>

<svelte:window bind:innerWidth />
<header
	class="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md"
>
<div id="nav-div" class="fixed flex left-0 top-0 z-50  w-full overflow-visible h-full">
	<nav
		class={cn(
			`overflow-auto `,
			`default`,
			{
				'pointer-events-none': !hamburgerMenuIsOpen
			},
			{
				'bg-background/70 backdrop-blur-md': hamburgerMenuIsOpen
			}
		)}
	>
		{#if hamburgerMenuIsOpen === true}
			<div class="container flex h-14 items-center justify-between">
				<!-- <a class="text-md flex items-center" href="/"> NextQuant </a> -->
	
				<button id="header-toggle-button" class="md:hidden" use:toggleOverflowHidden>
					<!-- <span class="sr-only">Toggle menu</span> -->
					{#if hamburgerMenuIsOpen}
						<!-- <XIcon strokeWidth={1.4} class='text-gray-300'/> -->
					{:else}
						<AlignJustify strokeWidth={1.4} class='text-gray-300'/>
					{/if}
				</button>
			</div>
		{/if}
	
		
			<!-- <ul
				in:fly={{ y: -30, duration: 400 }}
				class="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
			>
				{#each menuItem as item, i}
					<li class="border-grey-dark border-b py-0.5 pl-6 md:border-none">
						<a
							class="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors {hamburgerMenuIsOpen
								? '[&_a]:translate-y-0'
								: ''}"
							href={item.href}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul> -->
	
	</nav>
	{#if hamburgerMenuIsOpen === true || innerWidth >= 768}
				<NavbarMenu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} item="Services" >
				  <div class="  text-sm grid grid-rows-3 gap-6 p-4">
					<ProductItem
					class="nav-close-click pb-6 border-b border-white/30 max-h-[200px]"
					  title="Retailers"
					  href="/strategies"
					  src={RetailerImg}
					  description="<ul style='list-style-type: square;'><li>1-Click Algo Trading for Small Investors.</li><li>24/7 Smart Trading Assistance.</li><li>Agentic AI Wealth Management</li></ul>"
					/>
					<ProductItem
					class="nav-close-click pb-6  border-b border-white/30 max-h-[200px]"
					  title="HNIs"
					  href="/#"
					  src={HnisImg}
					  description="<ul style='list-style-type: square;'><li>Equity Participation.</li><li>High-Exposure & Hedged Strategies.</li><li>Strong Returns & Global Market Access.</li></ul>"
					/>
					<ProductItem
					class="nav-close-click max-h-[200px]"
					  title="Enterprises / Trading Firms"
					  href="/#"
					  src={BankImg}
					  description="<ul style='list-style-type: square;'><li>Trading Signals for Enterprises.</li><li>Customized Strategies for your Risk Profile.</li></ul>"
					/>
				  </div>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item="Team">
					<div class="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/#" class="nav-close-click font-bold text-lg pb-2 border-b border-white/30">Quant Trader (Stealth Mode)<p class="text-sm font-normal">Global Hedge Fund Trader, IIT/IIM Alumni<br>AI Researcher</p></HoveredLink>
						<HoveredLink href="/#" class="nav-close-click font-bold text-lg pb-2 border-b border-white/30">Sachin Dalal<span class="font-normal">&nbsp;(Founder/Investor)</span><p class="text-sm font-normal">Ex-VP Rakuten, Ex Amazon, Infibeam Cofounder</p></HoveredLink>
					  <HoveredLink href="/#" class="nav-close-click font-bold text-lg pb-2 border-b border-white/30">Priyank Choundary<span class="font-normal">&nbsp;(Cofounder)</span><p class="text-sm font-normal">SVP Paytm, SVP OYO, Amazon, Microsoft<br>AI Applications Expert</p></HoveredLink>
					  <HoveredLink href="/#" class="nav-close-click font-bold text-lg pb-2 border-b border-white/30">Jatin Dabas<span class="font-normal">&nbsp;(Certified Analyst)</span><p class="text-sm font-normal">Trader, Canada-based<br>NISM - 202200181379</p></HoveredLink>
					  <HoveredLink href="/#" class="nav-close-click font-bold text-lg">Mayank Singh<span class="font-normal">&nbsp;(Certified Analyst)</span><p class="text-sm font-normal">Trader & Techie<br>NISM - 202300018822</p></HoveredLink>
					</div>
				</MenuItem>  
				<MenuItem setActive={setActive} active={active} item="Pricing">
				  <div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="/#pricing" class="nav-close-click">Retailers</HoveredLink>
					<HoveredLink href="/#pricing" class="nav-close-click">HNIs</HoveredLink>
				  </div>
				</MenuItem>
			  </NavbarMenu>
	
		{/if}
	</div>
	
	<!-- {#if innerWidth < 768} -->
		<div class="container flex h-14 items-center justify-between">
			<a class="text-md flex items-center z-60" href="/"><WaypointsIcon class="h-5" />&nbsp;&nbsp;<img src="/solveai-logo.png" alt="NextQuant.AI" class="h-6" /> </a>

			<div class="flex h-full items-center">
				<!-- <a class="mr-6 text-sm" href="/signin"> Log in </a> -->
				<Button variant="secondary" class="mr-6 text-sm z-60" on:click={triggerButtonClick}>Sign up</Button>
			</div>
			<button class="ml-6 md:hidden z-60" use:toggleOverflowHidden>
				<!-- <span class="sr-only">Toggle menu</span> -->
				{#if hamburgerMenuIsOpen}
					<XIcon  strokeWidth={1.4} class='text-gray-300'/>
				{:else}
					<AlignJustify strokeWidth={1.4} class='text-gray-300' />
				{/if}
			</button>
		</div>
	<!-- {/if} -->

</header>
