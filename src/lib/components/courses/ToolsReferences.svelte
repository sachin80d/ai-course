<script lang="ts">
    import { CloudLightning, Compass, Gift, Shield, Star, Zap } from "lucide-svelte";
  
    const features = [
      {
        icon: Star,
        title: "Feature 1",
        description: "Brief description of feature 1",
      },
      {
        icon: Zap,
        title: "Feature 2",
        description: "Brief description of feature 2",
      },
      {
        icon: Shield,
        title: "Feature 3",
        description: "Brief description of feature 3",
      },
      {
        icon: Compass,
        title: "Feature 4",
        description: "Brief description of feature 4",
      },
      {
        icon: CloudLightning,
        title: "Feature 5",
        description: "Brief description of feature 5",
      },
      {
        icon: Gift,
        title: "Feature 6",
        description: "Brief description of feature 6",
      },
    ];
  </script>
  
  <section class="bg-background py-32">
    <div class="container">
      <!-- Section header -->
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          Features
        </h2>
        <p class="max-w-prose text-base text-muted-foreground md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
        </p>
      </div>
  
      <!-- Feature list -->
      <div class="mt-8 rounded-xl border border-border bg-card/50 px-6 py-8 md:px-10 md:py-12">
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {#each features as feature, index}
            <li class="flex items-start gap-3" >
              <div class="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 p-2">
                <svelte:component this={feature.icon} class="size-6 text-primary" />
              </div>
              <div>
                <p class="font-medium">{feature.title}</p>
                <p class="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
  