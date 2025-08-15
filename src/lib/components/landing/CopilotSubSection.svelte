<script lang="ts">
    export let title: string;
    export let content: string;
    import Iphone from "$lib/components/magic/Iphone.svelte";
    import Ipad from "$lib/components/magic/Ipad.svelte";
    import { Motion } from "svelte-motion";
    import Separator from "$lib/components/magic/Seperator.svelte";
</script>

<div class="horizontal-card relative flex flex-col sm:flex-col md:flex-row w-full max-w-[1000px] gap-8 px-4 h-[80vh] m-0 mx-auto" {title} {content}>
    <div class="description flex-1 space-y-4 w-full lg:w-1/2 flex flex-col justify-center items-end md:relative">
      <div class="max-w-[500px] ">
        <h2 class="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p class="mt-5 text-base md:text-lg text-gray-600 dark:text-gray-300">
          {@html content}
        </p>
      </div>
    </div>
    <div class="illustration flex-1 relative flex min-h-[75vh]">

      <div class="h-full w-full max-w-[500px] relative overflow-hidden flex items-center justify-center my-auto">

        <slot>here</slot>
        </div>

    </div>
  </div>
  <Separator gradient={true} />
