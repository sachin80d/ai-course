<script>
	// From Shadcn Svelte UI Library
	import { DollarSignIcon, MessageSquareIcon, ScrollIcon, WrenchIcon, LockKeyholeIcon, ChartCandlestickIcon, UserRoundSearchIcon, InstagramIcon, TruckIcon } from 'lucide-svelte';
	import LandingTitle from "./LandingTitle.svelte";
  import AdvantagesMarquee from "./AdvantagesMarquee.svelte";
  import GridPattern from "$lib/components/magic/GridPattern.svelte";
  import { cn } from "$lib/utils";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import DotPattern from "$lib/components/magic/DotPattern.svelte";
  import Particles from "$lib/components/magic/Particles/Particles.svelte";

	function triggerButtonClick() {
		const targetButton = document.getElementById("target-button");
		if (targetButton) {
			console.log("Button clicked");
		targetButton.click();
		} else {
		console.warn("Button with ID 'target-button' not found!");
		}
	}
  
	const reviews = [
  {
    title: "Dynamic Pricing",
    name: "Ashutosh",
    username: "@ashutosh.bizdev",
    designation: "Marketing Manager",
    body: "Smart pricing engine boosted conversions without hurting margins. 🤩 🥳",
    img: "/profile-pics/male/dp-1.jpeg",
    icon: DollarSignIcon,
    icon_bg_color: "#D6E4FF"  // pastel blue
  },
  {
    title: "Intelligent Labor Mgmt",
    name: "Shaily",
    username: "@shaily.opslead",
    designation: "Operations Lead",
    body: "Shift planning became accurate and effortless with AI.💥 👌",
    img: "/profile-pics/female/dp-1.jpeg",
    icon: WrenchIcon,
    icon_bg_color: "#FFE0E0"  // pastel pink
  },
  {
    title: "Fraud Prevention",
    name: "Hitesh",
    username: "@hitesh.finsec",
    designation: "Finance Manager",
    body: "AI caught fraud early. Reduced false positives significantly.🤯 ⛳",
    img: "/profile-pics/male/dp-2.jpeg",
    icon: LockKeyholeIcon,
    icon_bg_color: "#E0F7D6"  // pastel green
  },
  {
    title: "Credit Underwriting",
    name: "Mike",
    username: "@mike.lendingops",
    designation: "Lending Operations",
    body: "Loan approvals are faster, smarter, and fairer now.🏅",
    img: "/profile-pics/male/dp-3.jpeg",
    icon: ScrollIcon,
    icon_bg_color: "#FFF5D6"  // pastel yellow
  },
  {
    title: "Portfolio Monitoring",
    name: "Mithali",
    username: "@mithali.pmtools",
    designation: "Portfolio Manager",
    body: "Real-time alerts helped us stay proactive, not reactive. 🎉",
    img: "/profile-pics/female/dp-2.jpeg",
    icon: ChartCandlestickIcon,
    icon_bg_color: "#F1E0FF"  // pastel purple
  },
  {
    title: "KYC Processing",
    name: "Neha",
    username: "@neha.compliance",
    designation: "Compliance Officer",
    body: "KYC checks became smoother and faster with automation.🎊 💸",
    img: "/profile-pics/female/dp-3.jpeg",
    icon: UserRoundSearchIcon,
    icon_bg_color: "#D6FCFF"  // pastel cyan
  },
  {
    title: "Conversational AI CS",
    name: "Mike",
    username: "@mike.cxmanager",
    designation: "Customer Service",
    body: "Support load reduced. Customers love instant smart replies. 🤩 🤩",
    img: "/profile-pics/male/dp-4.jpeg",
    icon: MessageSquareIcon,
    icon_bg_color: "#FFE4D6"  // pastel coral
  },
  {
    title: "Campaign Management",
    name: "Mrinal",
    username: "@mrinal.growth",
    designation: "Digital Marketing",
    body: "Campaign performance improved with AI suggestions and insights. 🎯 💡",
    img: "/profile-pics/male/dp-5.jpeg",
    icon: InstagramIcon,
    icon_bg_color: "#D6FFFA"  // pastel mint
  },
  {
    title: "Procurement Management",
    name: "Sheeba",
    username: "@sheeba.supplychain",
    designation: "Supply Chain",
    body: "Procurement became leaner and more predictive with AI. 💰",
    img:"/profile-pics/female/dp-4.jpeg",
    icon: TruckIcon,
    icon_bg_color: "#FDE6FF"  // pastel magenta
  },
];



	let firstRow = reviews.slice(0, reviews.length);
  
	// let firstRow = reviews.slice(0, reviews.length / 3);
	// let secondRow = reviews.slice(1, reviews.length / 3);
	// let thirdRow = reviews.slice(reviews.length / 3);
  </script>	
  
  <section
	class="hero-section horizontal-card relative flex flex-col w-[100vw] gap-8 m-0 max-h-[100vh] justify-center items-center mx-auto px-0"
  >
  <DotPattern
  class="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
  />
    
  <!-- <div class="absolute top-0 left-0 w-full h-full z-0">
    <img src="/background_gradient_light_neon_3.jpg" alt="background_gradient_light_neon" class="absolute top-0 left-0 w-full h-full object-cover z-0" style="filter: opacity(0.1);" />
  </div> -->
  <div class="max-w-[1140px] flex flex-col gap-8">
  <div class="flex flex-row items-center">
  <!-- <div class="pointer-events-none fixed inset-0 flex items-center justify-center absolute">
    <div
      class="
        w-[60vw] h-[50vw] max-w-[100vw] max-h-[100vh]
        rounded-full
        bg-white/5            /* slight tint over blur */
        backdrop-blur-2xl      /* <-- blurs the background behind */
        shadow-2xl/30
        [mask-image:radial-gradient(ellipse_at_center,black_80%,transparent_100%)]
        [-webkit-mask-image:radial-gradient(ellipse_at_center,black_80%,transparent_100%)]
      "
    />
  </div> -->


    <!-- <div class="absolute left-0 top-0 w-[33vw] flex justify-center items-center h-full max-h-full">
      <LoginForm  />
    </div> -->

    <!-- <div
        class="absolute top-10 right-0 w-[49%] flex h-full m-auto flex flex-col items-center justify-center overflow-hidden md:shadow-xl"
    >
      <CoursesMarquee/>
      <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
          class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div> -->

    <div class="flex justify-center items-center h-full w-[49%]">
      <!-- <WavyBackground containerClassName="absolute top-0 bottom-0 left-0 right-0 w-full h-full" className="relative" speed="slow" waveWidth={10} waveOpacity={0}> -->
        <LandingTitle />

      <!-- </WavyBackground> -->
    </div>

    
    <div class="flex justify-center w-[49%] h-full z-1" style="z-index: 1;">
      <video
        class="rounded-xl shadow-[inset_0_0_50px_rgba(0,0,0,1)] border-4 z-1"
        autoplay muted loop playsinline
        poster="/deepcraft_vid_placeholder.jpg"
      >
        <source src="/deepcraft_vid_3.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- <div class="flex justify-center absolute right-0 left-0 w-full h-full top-80">
      <video
        class=" rounded-xl shadow-[inset_0_0_50px_rgba(0,0,0,1)] "
        autoplay
        muted
        loop
        playsinline
        poster="/deepcraft_vid_placeholder.jpg"
      >
        <source src="/deepcraft_vid_2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <Bot />
    </div> -->
  </div>
  <div class="flex flex-row flex-start w-full gap-4 items-center">
    <div class="text-sm font-light">In Association With:</div>
    <div class="flex flex-row gap-6">
      <img src="ai_company_logos/perplexity.png" alt="Perplexity" class="h-6" style="filter: opacity(0.8);" />
      <img src="ai_company_logos/gemini.png" alt="Gemini" class="h-5" style="filter: opacity(0.7);" />
      <img src="ai_company_logos/claude.png" alt="Claude" class="h-5" style="filter: opacity(0.7);" />
      <img src="ai_company_logos/openai.png" alt="OpenAi" class="h-5" style="filter: opacity(0.7);" />
    </div>
  </div>
  <AdvantagesMarquee/>

  <button class="p-[3px] relative w-auto mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg" />
    <div class="px-8 py-4 font-extrabold text-xl bg-[var(--electric-blue)] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
      BOOK YOUR SEAT&nbsp;&nbsp;&nbsp;@ <span class="font-light" style="text-decoration: line-through">Rs 3000</span>&nbsp;&nbsp;&nbsp;<span> FREE</span>
    </div>
  </button>
</div>


</section>

  