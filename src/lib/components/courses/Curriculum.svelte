<script lang="ts">
    import { AudioLines, Eye, Languages, ListMinus, ScanFace, TextQuote,  Table } from 'lucide-svelte';
    import HorizontalCard from '$lib/components/shadcn/HorizontalCard.svelte';

  
    type Card = {
      video: string;
      Icon: any;
      title: string;
      link: string;
      summary: string;
    };

    type Card2 = {
      id: string;
      video: string;
      name: string;
      curriculum: string;
      goal: string;
      durationMinutes: number;
      sequence: number;
    };

    export let listofitems: Card2[] = [];
  
    const List: Card[] = [
      {
        video: '/courses/AIForEveryone/course_vid_1.webm',
        Icon: Eye,
        title: 'Visual Design System',
        link: '#',
        summary:
          'Consistent, beautiful components built with a cohesive design language that scales across your entire application.',
      },
      {
        video: '/courses/AIForEveryone/course_vid_2.webm',
        Icon: Languages,
        title: 'Framework Agnostic',
        link: '#',
        summary:
          'Use with React, Vue, Angular, or vanilla JavaScript. One library that works everywhere you need it.',
      },
      {
        video: '/courses/AIForEveryone/course_vid_3.webm',
        Icon: AudioLines,
        title: 'Interactive Components',
        link: '#',
        summary:
          'Rich interactions and smooth animations built-in. From subtle hover effects to complex state transitions.',
      },
      {
        video: '/courses/AIForEveryone/course_vid_4.webm',
        Icon: ListMinus,
        title: 'Minimal Setup',
        link: '#',
        summary:
          "Get started in minutes with zero configuration. Clean, semantic code that doesn't bloat your bundle size.",
      },
      {
        video: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-5.mp4',
        Icon: ScanFace,
        title: 'Accessibility First',
        link: '#',
        summary:
          'WCAG compliant components with full keyboard navigation, screen reader support, and focus management.',
      },
      {
        video: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-6.mp4',
        Icon: TextQuote,
        title: 'Complete Documentation',
        link: '#',
        summary:
          'Comprehensive guides, live examples, and API references. Everything you need to build with confidence.',
      },
    ];

  
  </script>
  
  <section class="horizontal-card max-w-6xl mx-auto">
    <div class="container">
      <div class="mx-auto mb-12 max-w-3xl text-center flex flex-col justify-center">
        <Table class="start-heading text-center mx-auto mb-5"/>
        <h2 class="main-heading">Course Content</h2>
        <p class="subheading text-center mt-5">
          A complete toolkit for modern web development. Clean, performant, and ready to use.
        </p>
      </div>
  
      <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {#each listofitems as item, index (index)}
          <HorizontalCard
          video={item.video}
          title={item.name}
          Icon={null}
          link={'#'}
          short_summary={item.goal}
          detail_description={item.curriculum}
           />
        {/each}
      </div>
    </div>
  </section>
  