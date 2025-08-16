<script>
    import BlurFade from "$lib/components/magic/BlurFade.svelte";
    import AnimatedTooltip from "$lib/components/magic/AnimatedTooltip.svelte";
    import SpotLight from "$lib/components/magic/SpotLight.svelte";
    import { Button } from "$lib/components/ui/button";
    import { ChevronRightIcon } from "lucide-svelte";

        
</script>

<section class="horizontal-card relative flex flex-col w-[100vw] mt-40 pb-10">
    <SpotLight className="-top-40 right-50 md:left-60 md:-top-20" fill="white" />
    <div class="flex flex-col gap-4 text-center z-0">
        <BlurFade delay={0.25}>
          <h1
            class="font-extralight
      xl:text-[76px]      /* font-size: 89px at ≥1280px */
      sm:leading-none     /* line-height: 1 at ≥640px */
      sm:text-5xl         /* font-size: 4.5rem, line-height: 1.25 at ≥640px */
      tracking-[-0.89px]  /* letter-spacing: -0.89px */
    ">
    
          The Future of your <span class="text-gradient-2023">Career</span><br>
          starts here.
          <!-- <AnimatedGradientText class="overflow-visible inline border-none gradient-landing-title focus-visible:outline-none focus:outline-none outline-none"> -->
            <span class="p-1 overflow-visible text-[3rem] font-black tracking-tighter inline animate-gradient bg-gradient-to-r from-[#deff2d] to-[#deff2d] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              
            </span>
          <!-- </AnimatedGradientText> -->
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} class="mt-5">
          <div class="flex flex-row items-center justify-center gap-8">
            <div class="flex justify-center gap-5 mt-3 mb-3">
              <Button variant="secondary" class="text-[1] rounded-[50px] hover:bg-[#c3ff9e] bg-black text-white px-5 py-2">Subscribe</Button>
              <Button variant="secondary" class="group flex text-[1] bg-transparent border-1 border-black px-5 py-2 no-hover">
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
    
    </div>
</section>
