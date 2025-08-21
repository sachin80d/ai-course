<script>
    import Marquee from "$lib/components/magic/marquee/Marquee.svelte";
  
  </script>
  
  <section class="horizontal-card flex flex-col gap-4 items-center justify-center mt-30">
		<div class="start-heading text-center">Companies we partner with</div>

  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-bottom bg-background py-10 md:shadow-xl"
  >
    <Marquee pauseOnHover class="[--duration:40s]">
      {#each Array(9).fill(0).map((_, i) => i + 1) as num}
        <img src="/company_logos/black/{num}.png" alt="{num}.png" class="max-h-8 mr-10" />
      {/each}
    </Marquee>

    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
    ></div>
  </div>
</section>
  