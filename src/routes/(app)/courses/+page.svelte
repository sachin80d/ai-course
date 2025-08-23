<script lang="ts">
	import { seo } from '$lib';
	import CoursesHeroSection from '$lib/components/courses/CoursesHeroSection.svelte';
	import CompaniesMarquee from '$lib/components/landing/CompaniesMarquee.svelte';
	import FooterSection from '$lib/components/landing/FooterSection.svelte';
	import { onMount } from 'svelte';
	import UseCases from '$lib/components/courses/UseCases.svelte';
    import SoftwaresUsed from '$lib/components/courses/SoftwaresUsed.svelte';
	import FAQs from '$lib/components/courses/FAQs.svelte';
	import CTA from '$lib/components/courses/CTA.svelte';
	import ToolsReferences from '$lib/components/courses/ToolsReferences.svelte';
	import SmallToolReference from '$lib/components/courses/SmallToolReference.svelte';
	import WhoIsTheCourseFor from '$lib/components/courses/WhoIsTheCourseFor.svelte';
	import WhatThisCourseOffers from '$lib/components/courses/WhatThisCourseOffers.svelte';
	import CTA2 from '$lib/components/courses/CTA2.svelte';
    import Curriculum from '$lib/components/courses/Curriculum.svelte';


	import ai_course_content from "$lib/components/courses/course-content/AIForEveryone.json"; // Import JSON
    import { LogIn } from 'lucide-svelte';
	  // Convert curriculum array to <ul> HTML before passing to Feature215b
	function convertCurriculum(arr: string[]) {
		return `<ul class="list-disc list-inside space-y-1">` +
		arr.map(item => `<li>${item}</li>`).join('') +
		`</ul>`;
	}

	// Map cards and convert curriculum -> summary HTML
	const formattedCards = ai_course_content.modules.map((card, i) => ({
		...card,
		video: `/courses/AIForEveryone/course_vid_${i+1}.webm`,
		curriculum: convertCurriculum(card.curriculum)
	}));
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={seo.title} />
	<meta property="og:url" content={seo.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:site" content="@Sachin_Dalal" />
</svelte:head>
<CoursesHeroSection />
<WhatThisCourseOffers />
<CTA />
<!-- <VideoScrollSection src="/blue_purple_bg_1.jpg" /> -->
<CompaniesMarquee />
<WhoIsTheCourseFor />
<Curriculum listofitems={formattedCards}/>
<SmallToolReference />
<CTA2 />
<FAQs />
<FooterSection />
<!-- <Section2 /> -->
<!-- <ActionsSection /> -->
<!-- <CopilotSection />
<HowWeDoIt /> -->
<!-- <ClientSection /> -->
<!-- <SphereMask />
<PricingSection /> -->
<!-- <CtaSection /> -->
<div>
 <script>
    // Apply dark theme on load
	console.log("in Course page");
    if (typeof window !== 'undefined') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
    // onMount(() => {
	//   document.documentElement.classList.remove('dark');
	//   document.documentElement.classList.add('light');
	// });
 </script>
</div>
