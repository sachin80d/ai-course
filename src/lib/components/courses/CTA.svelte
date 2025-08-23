<script lang="ts">
    import { ArrowRight, Clock, MoveRight } from "lucide-svelte";
  </script>
  
  <section class="horizontal-card max-w-6xl mx-auto">
    <div class="container">
      <!-- Card -->
      <div class="flex flex-col justify-between rounded-xl border border-muted bg-background pb-0 md:flex-row md:py-6 light:bg-[#050051] dark:bg-white" > <!-- linear-gradient(45deg, #caebff, #fff6b3);-->
        <!-- Left content -->
        <div class="p-6 md:max-w-[60%]">
          <div class="mb-2 flex items-start gap-2">
            <!-- <Clock class="w-[40px] h-[40px] dark:text-black" stroke-width={1.5} /> -->
            <div class="flex flex-col px-5">
              <h4 class="text-4xl font-bold dark:text-black light:text-white">Don't Miss the AI Revolution!</h4>
              <p class="text-muted-foreground text-lg light:text-gray-300">
                Secure your seats now
              </p>
              <button class="mt-8 relative bg-transparent w-fit rounded-2xl shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3),inset_-1px_-1px_0px_rgba(0,0,0,0.3)]
         active:shadow-[inset_1px_1px_0px_rgba(0,0,0,0.3),inset_-1px_-1px_0px_rgba(255,255,255,0.3)]
         transition-shadow">
                <!-- <div class="absolute inset-0 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg"></div> -->
                <div class="px-6 py-2 font-normal text-xs sm:text-md md:text-lg bg-white rounded-2xl relative group transition duration-200 text-black hover:bg-transparent flex justify-center items-center w-auto">
                  JOIN BATCH 4&nbsp;-&nbsp;
                  <span>Register Now!</span>
                  <MoveRight class="ml-2 size-6" />
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
          src="/ai_asset_4.webp"
          alt="placeholder"
          class="aspect-video object-cover md:max-w-96"
        />
      </div>
    </div>
  </section>
  