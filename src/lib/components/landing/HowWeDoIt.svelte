<script lang="ts">
	import Lens from "$lib/components/magic/Lens/Lens.svelte";
	let hovering = true;

	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import { cn } from "$lib/utils";
	let inView = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		// console.log(detail);
		inView = detail.inView;
	};

	// Images
	import StrategyDarkImg from '$lib/imgs/strategy-2-dark.png';
	import StrategyLightImg from '$lib/imgs/strategy-2-light.png';
	import HeroDarkImg from '$lib/imgs/hero-dark.png';
	import HeroLightImg from '$lib/imgs/hero-light.png';
</script>

<section class="flex flex-col items-center justify-center relative mx-auto mt-8 max-w-7xl px-6 text-center md:px-8">
    <!-- <h2 class="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center mb-8">
        AI Co-Pilots Trading
      </h2>
      <p
      class="-translate-y-4 animate-fade-in text-balance text-2xl tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-2xl"
  >
AI explains what trades it took and why. Learn on the go.
</p>
<Lens {hovering}>
    <div
        use:inview={{
            unobserveOnEnter: true,
            rootMargin: '-100px'
        }}
        on:inview_change={handleChange}
        class="max-w-4xl flex items-center justify-center relative mt-6 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background)/0.4)_2%,transparent)]"
    >
        <div
            class="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_10%)] before:[filter:blur(180px)] {inView
                ? 'before:animate-image-glow'
                : ''}"
        >
            <BorderBeam
                size={200}
                duration={12}
                delay={0}
                colorFrom="var(--color-one)"
                colorTo="var(--color-two)"
            />

            <img
                src={StrategyDarkImg}
                alt="StrategyDarkImg"
                class="relative hidden size-full rounded-[inherit] border object-contain dark:block"
            />
            <img
                src={StrategyLightImg}
                alt="StrategyLightImg"
                class="relative block size-full rounded-[inherit] border object-contain dark:hidden"
            />
        </div>
    </div>
</Lens> -->

<h2 class="text-5xl mt-8 font-bold tracking-tight text-black dark:text-white sm:text-6xl">
    Auto-Executed Algo Strategies
</h2>

<div
    use:inview={{
        unobserveOnEnter: true,
        rootMargin: '-100px'
    }}
    on:inview_change={handleChange}
    class="relative mt-8 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_5%,transparent)]"
>
    <div
        class="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] {inView
            ? 'before:animate-image-glow'
            : ''}"
    >
        <BorderBeam
            size={200}
            duration={12}
            delay={0}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
        />

        <img
            src={HeroDarkImg}
            alt="HeroDarkImage"
            class="relative hidden size-full rounded-[inherit] border object-contain dark:block"
        />
        <img
            src={HeroLightImg}
            alt="HeroLightImage"
            class="relative block size-full rounded-[inherit] border object-contain dark:hidden"
        />
    </div>
</div>

</section>