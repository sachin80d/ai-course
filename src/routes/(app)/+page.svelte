<script>
	import { seo } from '$lib';
	import ActionsSection from '$lib/components/landing/ActionsSection.svelte';
	import ClientSection from '$lib/components/landing/ClientSection.svelte';
	import CtaSection from '$lib/components/landing/CtaSection.svelte';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import PricingSection from '$lib/components/landing/PricingSection.svelte';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
	import HowWeDoIt from '$lib/components/landing/HowWeDoIt.svelte';
	import CopilotSection from '$lib/components/landing/CopilotSection.svelte';
	import Section2 from '$lib/components/landing/Section2.svelte';
	import CompaniesMarquee from '$lib/components/landing/CompaniesMarquee.svelte';
	import CoursesSection from '$lib/components/landing/CoursesSection.svelte';
    import VideoScrollSection from '$lib/components/landing/VideoScrollSection.svelte';
	import SessionCarousel from '$lib/components/landing/SessionCarousel.svelte';
	import SignOffNoteSection from '$lib/components/landing/SignOffNoteSection.svelte';
	import FooterSection from '$lib/components/landing/FooterSection.svelte';

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
<HeroSection />
<!-- <VideoScrollSection src="/blue_purple_bg_1.jpg" /> -->
<CompaniesMarquee />
<CoursesSection />
<SessionCarousel />
<SignOffNoteSection />
<FooterSection />
<!-- <Section2 /> -->
<!-- <ActionsSection /> -->
<!-- <CopilotSection />
<HowWeDoIt /> -->
<!-- <ClientSection /> -->
<!-- <SphereMask />
<PricingSection /> -->
<!-- <CtaSection /> -->
