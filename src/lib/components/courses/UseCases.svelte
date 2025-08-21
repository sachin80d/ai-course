<script lang="ts">
	import BentoGrid from '$lib/components/magic/BentoGrid.svelte';
	import BentoGridItem from '$lib/components/magic/BentoGridItem.svelte';
	import { Megaphone, ClipboardCopy, File, FileSignature, Table, Waves, Box, Boxes, MessagesSquare, Workflow, Instagram } from 'lucide-svelte';

	let isSkeleton = true;

	const items = [
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
    <!-- Grid: fixed 500px tracks -->
	<div class="flex flex-col gap-4 items-center justify-center mb-[50px]">
		<div class="start-heading">For Engineers / Executives / Entrepreneurs</div>
		<div class="main-heading">Value this Course Offers</div>
		<div class="subheading text-center">Apply AI across business-first use cases<br>from 'automation & content' to 'research & decision-making'.</div>
	</div>
<BentoGrid className="bento-grid max-w-7xl mx-auto grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[575px] max-w-6xl">
    {#each items as item, i (i)}
      <BentoGridItem
	  	start_title={item.start_title}
        title={item.title}
        description={item.description}
        className="{`${i === -1 ? 'md:col-span-2 md:row-span-2' : 'md:row-span-1'}`}  border-r border-gray-300 border-[0.5px] relative overflow-hidden "
        titleClassName="bento-grid-item-title text-4xl font-black"
        descriptionClassName="bento-grid-item-description text-[16px] font-bold"
      >
	  <svelte:component this={item.icon} slot="icon" class="h-6 w-6 text-neutral-500" />
      <div
      slot="header"
      class="absolute bottom-0 right-0 flex-none max-w-[80%] max-h-[50%] mx-auto bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 overflow-hidden"
        >
        <video src="/use_case_vid_{i+1}.mp4" autoplay muted loop playsinline class="h-full w-full object-cover" />
        </div>        
      </BentoGridItem>
    {/each}
  </BentoGrid>
  
</section>
