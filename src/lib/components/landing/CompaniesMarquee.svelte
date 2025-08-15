<script>
    import Marquee from "$lib/components/magic/marquee/Marquee.svelte";
  
  </script>
  
  <section class="mt-0">
    <p class="max-w-max mb-10 md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px]">COMPANIES WE PARTNER&nbsp;WITH:</p>
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
  >
    <Marquee pauseOnHover class="[--duration:40s]">
      {#each Array(9).fill(0).map((_, i) => i + 1) as num}
        <img src="/company_logos/white/{num}.png" alt="{num}.png" class="max-h-8 mr-10" />
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
  