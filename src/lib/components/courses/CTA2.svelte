<script lang="ts">
    import { ArrowRight, Clock } from "lucide-svelte";
  </script>
  
  <section class="horizontal-card max-w-6xl mx-auto">
    <div class="container">
      <!-- Card -->
      <div class="flex flex-col justify-between rounded-xl border border-muted bg-background pb-0 md:flex-row md:py-6" style="
      background: linear-gradient(45deg, #ffcaee, #fff6b3);">
        <!-- Left content -->
        <div class="p-6 md:max-w-[60%]">
          <div class="mb-2 flex items-start gap-2">
            <Clock class="w-[40px] h-[40px] dark:text-black" stroke-width={1.5} />
            <div class="flex flex-col px-5">
              <h4 class="text-4xl font-bold dark:text-black">Become AI Confident!</h4>
              <p class="text-muted-foreground text-lg dark:text-gray-800">
                Secure your seats now
              </p>
              <button class="mt-8 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg"></div>
                <div class="px-4 py-4 font-extrabold text-xs sm:text-md md:text-lg bg-[var(--electric-blue)] rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex justify-center items-center">
                  JOIN BATCH 4&nbsp;-&nbsp;
                  <span>Register Now!</span>
                  <ArrowRight class="ml-2 size-4" />
                </div>
                
              </button>
            </div>
          </div>
  

  

          <!-- Button -->
          <!-- <button
            class="mt-8 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Join Batch 4 - Register Now!
            <ArrowRight class="ml-2 size-4" />
          </button> -->
        </div>
  
        <!-- Right image -->
        <img
          src="/ai_asset_5.webp"
          alt="placeholder"
          class="aspect-video object-cover md:max-w-96"
        />
      </div>
    </div>
  </section>
  