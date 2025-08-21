<script lang="ts">
    import { Megaphone, Workflow, MessagesSquare, FileSignature, Instagram, Box } from "lucide-svelte";
  
    // type CardItem = {
    //   icon: any;
    //   title: string;
    //   description: string;
    //   image: string;
    // };
  
    // const cards: CardItem[] = [
    //   { icon: Code,        title: "Card Title", description: "Lorem ipsum dolor sit amet consectetur.", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" },
    //   { icon: Play,        title: "Card Title", description: "Lorem ipsum dolor sit amet consectetur.", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" },
    //   { icon: GitBranch,   title: "Card Title", description: "Lorem ipsum dolor sit amet consectetur.", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" },
    //   { icon: List,        title: "Card Title", description: "Lorem ipsum dolor sit amet consectetur.", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" },
    //   { icon: WandSparkles,title: "Card Title", description: "Lorem ipsum dolor sit amet consectetur.", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" },
    //   { icon: Sparkles,    title: "Card Title", description: "Lorem ipsum dolor sit amet consectetur.", image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" },
    // ];

    const cards = [
		{
			start_title: 'Marketing',
			title: 'Generate & Automate Marketing & Campaign Assets with AI',
			description: `
            <ul class="list-disc list-outside pl-4">
                <li>Develop high-converting copy, email campaigns, and ads in minutes.</li> 
                <li>Test and iterate messaging faster across platforms. </li>
                <li>Drive better engagement while lowering creative bottlenecks.</li>
            </ul>`,
			icon: Megaphone
		},
		{
			start_title: 'Business Operations',
			title: 'Automate Business Workflows to Boost Productivity',
			description: `
            <ul class="list-disc list-outside pl-4">
                <li>Connect apps and trigger tasks with no-code AI automations.</li> 
                <li>Streamline operations like outreach, CRM updates, and follow-ups.</li>
                <li>Scale processes with less effort and more consistency.</li>
            </ul>`,
			icon: Workflow
		},
		{
			start_title: 'Customer Service',
			title: 'Automate Conversations with AI Chatbots & Voice Assistants',
			description: `
			<ul class="list-disc list-outside pl-4">
                <li>Free up human bandwidth by automating customer support and internal queries.</li> 
                <li>Ensure faster, 24/7 responses with consistent messaging.</li>
                <li>Reduce manual effort while enhancing engagement and resolution time.</li>
            </ul>`,
			icon: MessagesSquare
		},
		{
			start_title: 'Content Creation',
			title: 'Accelerate Business Research & Document Creation',
			description: `
			<ul class="list-disc list-outside pl-4">
                <li>Cut hours from research, summarization, and report writing tasks.</li> 
                <li>Use AI to extract insights, spot trends, and structure documentation.</li>
                <li>Improve decision-making speed and content accuracy.</li>
            </ul>`,		
			icon: FileSignature
		},
		{
			start_title: 'Social Media Marketing',
			title: 'Create AI Avatars & Video Content for Social & Brand Storytelling',
			description: `
			<ul class="list-disc list-outside pl-4">
                <li>Produce professional-grade videos and avatars without production teams.</li> 
                <li>Enable rapid storytelling across channels with consistent visual identity.</li>
                <li>Scale branded content creation while keeping costs low.</li>
            </ul>`,
			icon: Instagram
		},
		{
			start_title: 'Application Development',
			title: 'Build No-Code Websites, Apps, Tools & Games Using AI',
			description: `
			<ul class="list-disc list-outside pl-4">
                <li>Launch functional digital products without needing developers.</li> 
                <li>Prototype quickly, iterate faster, and reduce time-to-market.</li>
                <li>Empower teams to ship ideas into live experiences independently.</li>
            </ul>`,
			icon: Box
		}
	];
  </script>
  
  <section class="courses-use-cases horizontal-card flex flex-col gap-4 items-center justify-center mt-30">
    <div class="container">
      <div class="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div class="flex flex-col gap-4 items-center justify-center mb-[10px]">
            <div class="start-heading"><span class="italic lowercase">for</span><br>Engineers / Executives / Entrepreneurs / Freelancers</div>
            <div class="main-heading">Value this Course Offers</div>
            <div class="subheading text-center">Apply AI across business-first use cases<br>from 'automation & content' to 'research & decision-making'.</div>
        </div>
  
        <div class="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {#each cards as c, i (i)}
            <!-- Card -->
            <div class="relative h-[545px] w-full rounded-xl border border-1 bg-card text-card-foreground shadow-sm  lg:px-8 lg:h-[550px]">
              <!-- CardHeader -->
              <div class="p-6 pb-1">
                <svelte:component this={c.icon} class="size-4" stroke-width={1} />
              </div>
  
              <!-- CardContent -->
              <div class="p-6 pt-2 text-left">
                <h2 class="mb-1 text-2xl font-semibold">{c.title}</h2>
                <p class="leading-snug mt-5">
                  {@html c.description}
                </p>
              </div>
  
              <!-- CardFooter -->
              <div class="flex justify-end p-6 pt-0 pr-0 pb-0 absolute bottom-0 right-0 w-[90%]">
                <video src="/use_case_vid_{i+1}.mp4" autoplay muted loop playsinline class="h-40 lg:h-60 w-full object-cover" />
                <!-- <img
                  class="h-40 w-full rounded-tl-md object-cover object-center"
                  src={c.image}
                  alt="placeholder"
                  loading="lazy"
                  decoding="async"
                /> -->
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  