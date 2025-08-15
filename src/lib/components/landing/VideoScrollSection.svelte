<script lang="ts">
	import { Motion, useViewportScroll, useTransform } from 'svelte-motion';
	import { onMount } from 'svelte';
  
	export let src: string | undefined = undefined;
  
	const { scrollYProgress } = useViewportScroll();
  
	let isMobile = false;
	onMount(() => {
	  if (typeof window !== 'undefined' && window.innerWidth < 768) isMobile = true;
	});
  
	// Compress the range so the effect finishes sooner (0 → 0.18 instead of 0.30)
	const fast = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // drives the “stand-up” phase
  
	// Scales: finish by 18%
	const scaleX   = useTransform(fast, [0, 1], [1.2, isMobile ? 1 : 1.5]);
	const scaleY   = useTransform(fast, [0, 1], [0.5, isMobile ? 1 : 1.5]); // slightly less squashed start
	// RotateX: small top-hinged tilt (~9.33° → 0°) and finish by 18%
	const rotate   = useTransform(fast, [0, 1], [9.33, 0]);
  
	// Slide down a bit while standing up (finish by 18%)
	const translate = useTransform(fast, [0, 1], [-40, 200]);
  
	// Make perspective drop to 0 quickly so it looks flat early
	const perspectivePx = useTransform(fast, [0, 1], [800, 0]);
  </script>
  
  <section class="video-section horizontal-card relative flex flex-col w-[100vw] gap-8 px-4 m-0 pb-10 top-[-150px]">
	<div
	  class="flex min-h-[60vh] min-w-[42rem] flex-shrink-0 scale-[0.35] transform flex-col items-center justify-center
			 py-0 sm:scale-50 md:scale-100 md:pb-60 md:pt-28"
	  style="perspective: {$perspectivePx}px;"
	>
	  <div class="relative w-full flex justify-center" style="perspective: {$perspectivePx}px;">
		<Motion
		  let:motion
		  style={{
			scaleX,
			scaleY,
			rotateX: rotate,
			translateY: translate,
			transformStyle: 'preserve-3d',
			transformOrigin: 'top'
		  }}
		>
		  <div use:motion class="w-[32rem] rounded-2xl bg-[#010101] p-2">
			<div class="absolute inset-0 rounded-lg bg-[#272729]" />
			{#if src}
			  <div class="flex justify-center relative">
				<video
				  class="rounded-xl shadow-[inset_0_0_50px_rgba(0,0,0,1)]"
				  autoplay muted loop playsinline
				  poster="/deepcraft_vid_placeholder.jpg"
				>
				  <source src="/deepcraft_vid_3.webm" type="video/webm" />
				  Your browser does not support the video tag.
				</video>
			  </div>
			{/if}
		  </div>
		</Motion>
	  </div>
	</div>
  </section>
  