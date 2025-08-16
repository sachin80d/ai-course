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
    import ButtonRotateBorder from '$lib/components/magic/ButtonRotateBorder.svelte';
    import { Motion, AnimatePresence } from "svelte-motion";
    import ClientSection from "$lib/components/landing/ClientSection.svelte";
    import CtaCard from "$lib/components/landing/CtaCard.svelte";
    import CtaSection from "$lib/components/landing/CtaSection.svelte";
    import ResourcesHeaderTab from "$lib/components/landing/ResourcesHeaderTab.svelte";
    import ProductsHeaderTab from '$lib/components/landing/ProductsHeaderTab.svelte';

    let selected = 0;
    let dir: any;
    let handleSetSelected = (val: any) => {
      // console.log({ val, selected });
      if (typeof selected === "number" && typeof val === "number") {
        dir = selected > val ? "r" : "l";
      } else if (val === null) {
        dir = null;
      }
      selected = val;
      moveNub();
    };
    let TABS = [
      {
        id: 1,
        title: "Products",
        component: ProductsHeaderTab,
      },
      {
        id: 2,
        title: "Pricing",
        component: CtaCard,
      },
      {
        id: 3,
        title: "Resources",
        component: ResourcesHeaderTab,
      },
    ];
  
    let left: any;
    let moveNub = (node: HTMLElement) => {
      // console.log(selected, "Selected ID");
      if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");
  
        if (!hoveredTab || !overlayContent) return;
        console.log(hoveredTab, overlayContent, "Hovered Tab");
  
        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();
  
        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
  
        //   setLeft(tabCenter);
        left = tabCenter;
      }
    };

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
	class="fixed left-0 top-0 z-50 w-[100vw] -translate-y-4 animate-fade-in border-b opacity-0 bg-transparent backdrop-blur-md"
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
			<div class="container header-body">
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
    <div
    class="flex max-h-full w-full justify-start md:justify-center items-center"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:mouseleave={() => handleSetSelected(null)}
      class="relative flex h-fit gap-2"
    >
      {#each TABS as item (item)}
        <button
          id="shift-tab-{item.id}"
          on:click={() => handleSetSelected(item.id)}
          on:mouseenter={() => handleSetSelected(item.id)}
          class={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
            selected === item.id
              ? " selected-tab-button"
              : " text-black dark:text-white"
          }`}
        >
          <span class="font-normal">
            {item.title}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={`transition-transform ${selected === item.id ? "rotate-180" : ""}`}
            ><path d="m6 9 6 6 6-6" /></svg
          >
        </button>
      {/each}
      <AnimatePresence
        let:item
        list={[
          { key: 1, component: ProductsHeaderTab, id: 1 },
          { key: 2, component: CtaCard, id: 2 },
          { key: 3, component: ResourcesHeaderTab, id: 3 },
        ]}
      >
        {#if selected}
          <Motion
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            let:motion
          >
            <div
              id="overlay-content"
              class="absolute left-0 right-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 border border-gray-200 border-[0.5px] rounded p-4 z-40"
              use:motion
            >
              <div class="absolute -top-[24px] left-0 right-0 h-[80px]" />
              <Motion
                animate={{ left }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                let:motion
              >
                <span
                  style="clip-path: polygon(0 0, 100% 0, 50% 50%, 0% 100%);"
                  class="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
                  use:motion
                  use:moveNub
                >
                </span>
              </Motion>
              {#each TABS as item}
                <div class="overflow-hidden">
                  {#if selected === item.id}
                    <Motion
                      initial={{
                        opacity: 0,
                        x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      let:motion
                    >
                      <div use:motion>
                        <svelte:component this={item.component} />
                      </div>
                    </Motion>
                  {/if}
                </div>
              {/each}
            </div>
          </Motion>
        {/if}
      </AnimatePresence>
    </div>
  </div>
	
		{/if}
	</div>
	
	<!-- {#if innerWidth < 768} -->
		<div class="container header-body">
			<a class="text-md flex items-center z-60" href="/"><WaypointsIcon class="h-5" />&nbsp;&nbsp;<img src="/solveai-logo.png" alt="NextQuant.AI" class="h-6" style="filter: invert(0)" /> </a>

			<div class="flex h-full items-center" id="show-demo-wrapper">
				<!-- <a class="mr-6 text-sm" href="/signin"> Log in </a> -->
                <!-- <ButtonRotateBorder onClick={triggerButtonClick} class="show-demo text-white" from_color="#343bed" via_color="#00e1ff" to_color="#343bed">
                    <span>Show Demo</span>
                  </ButtonRotateBorder> -->
				<Button variant="secondary" class="" on:click={triggerButtonClick}>Consult With Us</Button>
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
