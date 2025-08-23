<script lang="ts">
    import { ChevronUp, ChevronDown } from 'lucide-svelte';
import { onMount } from 'svelte';
  
    export let className: string = '';
    export let video: string;
    export let Icon: any;              // optional
    export let title: string;
    export let link: string = '#';     // unused now, but keep if needed later
    export let detail_description: string;        // HTML string containing a <ul>...</ul>
    export let short_summary: string;        // HTML string containing a <ul>...</ul>


    // Optional: if you prefer to pass an array instead of HTML, support both:
    export let summaryItems: string[] | null = null;
  
    let videoRef: HTMLVideoElement | null = null;
    let items: string[] = [];          // extracted <li> text/HTML
    let expanded = false;
  
    const play = () => videoRef?.play();
    const reset = () => { if (!videoRef) return; videoRef.pause(); videoRef.currentTime = 0; };
  
    onMount(() => {
      if (summaryItems && summaryItems.length) {
        items = summaryItems;
        return;
      }
      // Parse the summary HTML to extract <li> as strings (keeps inner markup)
      try {
        const doc = new DOMParser().parseFromString(detail_description, 'text/html');
        items = Array.from(doc.querySelectorAll('li')).map(li => li.innerHTML.trim());
        // Fallback: if no <li> found, keep whole summary as one item
        if (items.length === 0) items = [detail_description];
      } catch {
        items = [detail_description];
      }
    });
  </script>
  
  <div
  role="button"
  tabindex="0"
  class="group flex flex-col gap-6 border-b border-border py-2 last:border-b-0 md:flex-row items-start {className}"
  on:mouseenter={play}
  on:mouseleave={reset}
  on:keydown={(e) => e.key === 'Enter' && play()}

  >
    <div class="md:w-1/2">
      <div class="aspect-video overflow-hidden rounded-lg">
        <video bind:this={videoRef} src={video} class="block h-full w-full object-cover" muted playsinline loop autoplay />
      </div>
    </div>
  
    <div class="flex flex-1 flex-col gap-2">
      <div class="flex items-center gap-3">
        {#if Icon}
          <div class="bg-primary flex size-8 rounded-md">
            <svelte:component this={Icon} class="m-auto size-4 text-primary-foreground" />
          </div>
        {/if}
        <h3 class="text-xl !font-black">{title}</h3>
      </div>
      <h4 class="text-normal">{short_summary}</h4>

  
      <!-- Collapsible summary -->
      <ul class="list-disc list-outside pl-5 space-y-1">
        {#each (expanded ? items : items.slice(0, 2)) as it, i (i)}
          <li class="text-sm">{@html it}</li>
        {/each}
      </ul>
  
      {#if items.length > 2}
        <button
          class="self-end inline-flex items-center text-sm text-primary hover:underline"
          on:click={() => (expanded = !expanded)}
          aria-expanded={expanded}
          aria-controls="card-summary"
        >
          {#if expanded}
            show less <ChevronUp class="ml-2 size-4" />
          {:else}
            show more <ChevronDown class="ml-2 size-4" />
          {/if}
        </button>
      {/if}
    </div>
  </div>
  