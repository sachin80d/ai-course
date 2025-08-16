<script>
    import BlurFade from "$lib/components/magic/BlurFade.svelte";
    import { Button } from "$lib/components/ui/button";
    import { Banknote, EqualIcon, LucideEqual } from "lucide-svelte";
    import AnimatedGradientText from "$lib/components/magic/AnimatedGradientText/AnimatedGradientText.svelte";  
    import AnimatedSubscribeButton from "$lib/components/magic/AnimatedButton.svelte";
    import { ChevronRightIcon, CheckIcon, BookOpenText, Award } from "lucide-svelte";
    import AnimatedTooltip from "$lib/components/magic/AnimatedTooltip.svelte";
    const people = [
		{
			id: 1,
			name: 'John Doe',
			designation: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
		},
		{
			id: 2,
			name: 'Robert Johnson',
			designation: 'Product Manager',
			image:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 3,
			name: 'Jane Smith',
			designation: 'Data Scientist',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 4,
			name: 'Emily Davis',
			designation: 'UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 5,
			name: 'Tyler Durden',
			designation: 'Soap Developer',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
		},
		{
			id: 6,
			name: 'Dora',
			designation: 'The Explorer',
			image:
				'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80'
		}
	];
  </script>
  
<div class="flex flex-col gap-4 text-left z-0">
    <BlurFade delay={0.25}>
      <button class="no-hover flex flex-row text-[#ff0075] border border-[#ff0075] rounded-2xl p-4 py-2 relative">
        <div class="pulse relative">
        </div>
        <span class="pl-5 font-black text-lg">LIVE Expert-Led Masterclasses</span>
      </button>
    </BlurFade>
    <BlurFade delay={0.25}>
      <h1
        class="font-extralight font-black
  xl:text-[67px]      /* font-size: 89px at ≥1280px */
  sm:leading-none     /* line-height: 1 at ≥640px */
  sm:text-5xl         /* font-size: 4.5rem, line-height: 1.25 at ≥640px */
  tracking-[-0.89px]  /* letter-spacing: -0.89px */
">
      <span class="font-black font-black ">Master AI</span>. Transform Business. <span class="highlight-color font-black">Advance your Career</span>.

      <!-- <span class="text-gradient-2023">AI / ML&nbsp;&nbsp;Course</span><img src="/copyright.png" class="inline relative top-[-25px]" width="20px" alt="copyright">that&nbsp;&nbsp;matters!<br>
      Get Hired. Get Skilled. -->
      <!-- <AnimatedGradientText class="overflow-visible inline border-none gradient-landing-title focus-visible:outline-none focus:outline-none outline-none"> -->
        <span class="p-1 overflow-visible text-[3rem] font-black tracking-tighter inline animate-gradient bg-gradient-to-r from-[#deff2d] to-[#deff2d] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
          
        </span>
      <!-- </AnimatedGradientText> -->
      </h1>
    </BlurFade>
    <BlurFade delay={0.25 * 2} class="mt-5 items-top flex">
      <div class="flex flex-row items-top justify-left gap-8">
        <div class="flex flex-col items-left justify-left">
          <AnimatedTooltip items={people} />
          <span class=" font-light text-sm mt-2">Over 1 Lakh Students Subscribed</span>
        </div>
        <div class="flex items-top justify-center gap-5">
          <Button variant="secondary" class="text-[1] rounded-[50px] bg-black hover:bg-[#c3ff9e] text-white px-5 py-2 np-hover">Subscribe</Button>
          <Button variant="secondary" class="group flex text-[1] rounded-[50px] border bg-transparent text-black px-5 py-2 no-hover">
            Courses           
            <ChevronRightIcon
            class="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          /></Button>
        </div>        
      </div>

      <!-- <span
        class="landing-subtitle"
      >
      Don't get left behind in the AI revolution!
      </span> -->
    </BlurFade>
    <BlurFade class="flex flex-col gap-2">
      <div class="flex flex-row items-center justify-left gap-2">
        <BookOpenText class="w-4 h-4 text-gray-700" />
        <span class="font-light text-sm ">No Prior Coding Knowlegde Required.</span>
      </div>
      <div class="flex flex-row items-center justify-left gap-2">
        <Award class="w-4 h-4 text-gray-700" />
        <span class="font-light text-sm ">Be A Certified AI Professional.</span>
      </div>
      <div class="flex flex-row items-center justify-left gap-2">
        <Banknote class="w-4 h-4 text-gray-700" />
        <span class="font-light text-sm ">7-Day Risk Free Refund Policy.</span>
      </div>
    </BlurFade>

    
</div>