<script>
    import BlurFade from "$lib/components/magic/BlurFade.svelte";
    import { Button } from "$lib/components/ui/button";
    import { AirVent, Banknote, EqualIcon, LucideEqual } from "lucide-svelte";
    import { Motion } from "svelte-motion";
    import AnimatedGradientText from "$lib/components/magic/AnimatedGradientText/AnimatedGradientText.svelte";  
    import AnimatedSubscribeButton from "$lib/components/magic/AnimatedButton.svelte";
    import { ChevronRightIcon, CheckIcon, BookOpenText, Award } from "lucide-svelte";
    import AnimatedTooltip from "$lib/components/magic/AnimatedTooltip.svelte";
    import AnimatedProfilePicsList from "../AnimatedProfilePicsList.svelte";

  </script>
  
<div class="flex flex-col gap-4 text-left z-0">
    <BlurFade delay={0.25}>
      <button class="no-hover flex flex-row text-[#ff0075] border border-[#ff0075] rounded-2xl p-4 py-2 relative">
        <div class="pulse relative">
        </div>
        <span class="pl-5 font-black text-lg text-[red]">LIVE Expert-Led Masterclasses</span>
      </button>
    </BlurFade>
    <BlurFade delay={0.25}>
      <h1
        class="font-extralight font-black
  xl:text-[21px]      /* font-size: 89px at ≥1280px */
  sm:leading-none     /* line-height: 1 at ≥640px */
  sm:text-5xl         /* font-size: 4.5rem, line-height: 1.25 at ≥640px */
  tracking-[-0.89px]  /* letter-spacing: -0.89px */
">
      <span class="font-black ">For Engineers / Executives / Entrepreneurs.</span>
    </BlurFade>
    <BlurFade delay={0.25}>
      <h1
        class="font-extralight font-black
  xl:text-[48px]      /* font-size: 89px at ≥1280px */
  sm:leading-none     /* line-height: 1 at ≥640px */
  sm:text-5xl         /* font-size: 4.5rem, line-height: 1.25 at ≥640px */
  tracking-[-0.89px]  /* letter-spacing: -0.89px */
">
<Motion
  let:motion
  initial={{ backgroundPosition: "200% 0" }}
  animate={{ backgroundPosition: "-200% 0" }}
  transition={{
    repeat: Infinity,
    duration: 7,       // fast sweep
    repeatDelay: 5,    // pause for 4s → total 5s cycle
    ease: "linear",
  }}
>
  <h1
    use:motion
    class="inline-flex bg-[linear-gradient(110deg,#000_46%,#444_47%,#666_49%,#444_51%,#000_52%)] bg-[length:200%_200%] bg-clip-text text-transparent font-black"
  >
    <slot>Master AI</slot>.
  </h1>
</Motion>
      <span class="font-black ">Transform Business.</span> <span class="highlight-color font-black">Advance your Career</span>.

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
          <AnimatedProfilePicsList />
          <span class=" font-light text-sm mt-2">Over 1 Lakh Students Subscribed</span>
        </div>
        <div class="flex items-top justify-center gap-5 inline-flex ">
          <Button variant="secondary" class="text-[1] rounded-[50px] animate-shine bg-[linear-gradient(110deg,var(--electric-blue),45%,#383affc4,55%,var(--electric-blue))] bg-[length:200%_100%] px-4 py-5 transition-colors text-white hover:text-white px-5 py-2 ">Book Your Seat</Button>
          <!-- <Button variant="secondary" class="group flex text-[1] rounded-[50px] border bg-transparent text-black px-5 py-2 no-hover">
            Courses           
            <ChevronRightIcon
            class="ml-1 mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          /></Button> -->
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
        <BookOpenText class="w-4 h-4 text-[var(--electric-blue)]" />
        <span class="font-light text-sm ">No Prior Coding Knowlegde Required.</span>
      </div>
      <div class="flex flex-row items-center justify-left gap-2">
        <Award class="w-4 h-4 text-[var(--electric-blue)]" />
        <span class="font-light text-sm ">Be A Certified AI Professional.</span>
      </div>
      <div class="flex flex-row items-center justify-left gap-2">
        <Banknote class="w-4 h-4 text-[var(--electric-blue)]" />
        <span class="font-light text-sm ">7-Day Risk Free Refund Policy.</span>
      </div>
    </BlurFade>

    
</div>