<script lang="ts">
    type Item = { src: string; text: string; className?: string };
  
    const list1: Item[] = [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
        text: "Brave",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/facebook-icon.svg",
        text: "Facebook",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
        text: "Figma",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
        text: "Gatsby",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
        text: "Astro",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/linkedin-icon.svg",
        text: "Linkedin",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
        text: "Notion",
      },
      {
        src: "",
        text: "",
        // NOTE: Tailwind uses bg-gradient-to-br (not bg-linear-to-br)
        className: "bg-gradient-to-br from-yellow-500 to-yellow-300",
      },
    ];
  
    const list2: Item[] = [
      {
        src: "",
        text: "",
        className: "bg-gradient-to-br from-green-500 to-green-300",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
        text: "Spotify",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
        text: "Google",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
        text: "Sketch",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/producthunt-icon.svg",
        text: "Product Hunt",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
        text: "Slack",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/x.svg",
        text: "X / Twitter",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/netflix-icon.svg",
        text: "Netflix",
      },
    ];
  </script>
  
  <section class="py-32">
    <div class="container">
      <div class="grid w-full grid-cols-1 items-start justify-between overflow-hidden rounded-3xl border border-muted bg-background pr-0 md:grid-cols-[minmax(18.75rem,25rem)_1fr] md:p-8">
        <!-- Left text column -->
        <div class="order-2 flex flex-col gap-2 p-6 pt-10 md:order-1 md:p-0">
          <h3 class="text-lg leading-relaxed font-medium tracking-tight">
            Seamlessly integrates with your tools!
          </h3>
          <p class="text-sm leading-relaxed tracking-tight">
            Connect diverse data sources to enhance your agent's intelligence
            and performance.
          </p>
        </div>
  
        <!-- Right logos column -->
        <div class="relative order-1 p-4 pb-0 md:order-2 md:p-0">
          <!-- List 1 -->
          <div class="flex gap-3">
            {#each list1 as item, i (i)}
              {#if item.src}
                <div class="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                  <div class="flex h-8 w-8 overflow-hidden rounded-full bg-background p-2">
                    <img
                      src={item.src}
                      alt={item.text}
                      class="m-auto block h-full w-full object-contain object-center"
                    />
                  </div>
                  <p class="pr-2 text-sm font-medium">{item.text}</p>
                </div>
              {:else}
                <div class={`h-10 w-[6.25rem] shrink-0 rounded-full ${item.className ?? ''}`}></div>
              {/if}
            {/each}
          </div>
  
          <!-- List 2 -->
          <div class="ml-8 pt-3">
            <div class="flex gap-3">
              {#each list2 as item, i (i)}
                {#if item.src}
                  <div class="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                    <div class="flex h-8 w-8 overflow-hidden rounded-full bg-background p-2">
                      <img
                        src={item.src}
                        alt={item.text}
                        class="m-auto block h-full w-full object-contain object-center"
                      />
                    </div>
                    <p class="pr-2 text-sm font-medium">{item.text}</p>
                  </div>
                {:else}
                  <div class={`h-10 w-[6.25rem] shrink-0 rounded-full ${item.className ?? ''}`}></div>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  