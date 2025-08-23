<script>
	// From Shadcn Svelte UI Library
	import Button from "$lib/components/ui/button/button.svelte";
	import BoxReveal from "../magic/BoxReveal.svelte";
	import Marquee from "$lib/components/magic/marquee/Marquee.svelte";
	import Reviewcard from "$lib/components/magic/Reviewcard/Reviewcard.svelte";
	import { DollarSignIcon, MessageSquareIcon, ScrollIcon, WrenchIcon, LockKeyholeIcon, ChartCandlestickIcon, UserRoundSearchIcon, InstagramIcon, TruckIcon, ArrowRight, UserPlus } from 'lucide-svelte';
	import LandingTitle from "./LandingTitle.svelte";
	import WavyBackground from "$lib/components/magic/WavyBackground.svelte";
	import LoginForm from "$lib/components/LoginForm.svelte";
	import Bot from "$lib/components/bot.svelte";
  import CoursesMarquee from "./CoursesMarquee.svelte";
  import AdvantagesMarquee from "$lib/components/AdvantagesMarquee.svelte";
  import AuroraBackground from "$lib/components/magic/AuroraBackground.svelte";
    import AnimatedProfilePicsList from "../AnimatedProfilePicsList.svelte";
    import TypeWriter from "./TypeWriter.svelte";

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
	class="hero-section horizontal-card relative flex flex-col w-[100vw] gap-8 m-0 pb-10 min-h-[100vh] max-h-[100vh] justify-center items-center mx-auto px-0"
  >
  <div class="container relative z-20 w-full">
    <div class="flex flex-col items-center">
      <!-- Headline + subhead -->
      <div class="flex flex-col items-center gap-8 px-4 pt-10 md:pb-10">
        <div class="w-[800px] max-w-[800px] h-[145px]">
          <h1 class="text-center text-6xl font-black leading-tight text-foreground [text-shadow:0_7px_20px_rgba(0,0,0,0.3)] sm:text-5xl md:text-7xl">
            AI Courses that<br>
            <TypeWriter phrases={["gets you a Job.", "advances Career.", "grows Business."]}/>
          </h1>
        </div>
        <!-- <div class="max-w-[22.5rem] md:max-w-full">
          <p class="text-balance text-center text-sm leading-normal tracking-tight text-muted-foreground [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] md:text-lg">
            A suite of robust productivity tools packed into an adaptable launcher—quick,
            intuitive, and dependable.
          </p>
        </div> -->
      </div>

      <!-- CTA buttons + meta -->
      <div class="flex flex-col items-center gap-4 relative">
        <div class="flex flex-col items-left justify-left">
            <AnimatedProfilePicsList />
            <span class=" font-light text-sm mt-2">Over 1 Lakh Students Subscribed</span>
        </div>
        

        <div class="flex flex-wrap items-center justify-center gap-4">
          <!-- Primary button -->
          <!-- <a
            href="#"
            class="inline-flex h-fit w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium leading-snug tracking-tight sm:w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="h-5 w-5 fill-gray-900"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <p>Download for Mac</p>
          </a> -->

          
          <!-- Outline / glassy button -->
          <a
            href="/courses"
            class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-gradient-to-b from-white/5 to-white/15 px-3 py-2 text-sm font-medium leading-snug tracking-tight text-white transition-colors hover:border-white/40 sm:w-fit"
          >
            <!-- Windows icon (inline SVG placeholder) -->
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-5 w-5 fill-white"
              aria-hidden="true"
            >
              <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/>
            </svg> -->
            <UserPlus class="w-4"/>
            <p>Subscribe To Courses</p>
          </a>

        </div>

        <!-- Meta line -->
        <!-- <div class="font-geist flex gap-6 text-xs text-muted-foreground">
          <span>v1.87.5</span>
          <span class="relative before:absolute before:-left-3 before:content-['|']">macOS 12+</span>
          <span class="relative before:absolute before:-left-3 before:content-['|']">
            <button type="button">Install via homebrew</button>
          </span>
        </div> -->
      </div>

      <!-- Conic-gradient pill CTA -->
      <!-- <div
        class="group relative mt-10 h-8 overflow-hidden rounded-full p-px shadow-[0_0_25px_0_var(--color-gray-900)] transition-all
               after:absolute after:left-1/2 after:top-1/2 after:aspect-square after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:animate-[gradient-spin_2.5s_ease-in-out_infinite]
               after:content-[''] after:[background:conic-gradient(transparent_0%,var(--color-red-400)_20%,transparent_10%),var(--color-red-950)]
               hover:shadow-[0_0_25px_0_var(--color-red-950)]
               hover:after:[background:conic-gradient(transparent_0%,var(--color-red-400)_20%,transparent_10%),var(--color-red-900)]"
      >
        <a
          href="#"
          class="relative z-10 flex h-full w-full items-center gap-3 rounded-full bg-background px-3 py-1 text-sm font-medium text-white"
        >
          <div>Download on iOS</div>
          <div class="flex items-center gap-1 text-muted-foreground">
            <div>Join waitlist</div>
            <ArrowRight class="h-4 w-4" />
          </div>
        </a>
      </div> -->
    </div>

  </div>

  <!-- Background video + radial mask -->
  <div class="absolute -top-24 z-10 h-full w-full before:absolute before:inset-0 before:size-full before:bg-[radial-gradient(circle_at_center,rgba(10,10,10,.6)_15%,rgba(10,10,10,1)_90%)] before:content-['']">
    <video
      src="/home_page_vid.webm"
      autoplay
      muted
      loop
      playsinline
      class="block size-full bg-blend-saturation object-cover object-center"
    />
    <div class="flex flex-col flex-start w-full gap-4 items-center text-sm absolute bottom-5 w-full">
        <div>In Association With:</div>
        <div class="flex flex-row gap-6">
          <img src="ai_company_logos/perplexity.png" alt="Perplexity" class="h-5" style="filter: invert(1);" />
          <img src="ai_company_logos/gemini.png" alt="Gemini" class="h-4" style="filter: invert(1)" />
          <img src="ai_company_logos/claude.png" alt="Claude" class="h-4" style="filter: invert(1)" />
          <img src="ai_company_logos/openai.png" alt="OpenAi" class="h-4" style="filter: invert(1)" />
        </div>
      </div>
  </div>



  <AdvantagesMarquee className="absolute bottom-0 w-full"/>

</section>

<style>
    /* custom keyframes used by animate-[gradient-spin...] */
    @keyframes gradient-spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
  </style>

  