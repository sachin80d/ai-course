<script lang="ts">
    import { cn } from "$lib/utils";
    import { AnimatePresence, Motion } from "svelte-motion";
    import { onMount } from 'svelte';
  
    let className: any = "";
    export { className as class };
  
    export let words = "Fade In";
    export let delay = 0.08;
    export let variants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: any) => ({
        y: 0,
        opacity: 1,
        transition: { 
          delay: i * delay,
          duration: 0.5
        },
      }),
    };

    let isVisible = true;
    let wordsspilit = words.split(" ");

    function restartAnimation() {
      isVisible = false;
      setTimeout(() => {
        isVisible = true;
      }, 100);
    }

    onMount(() => {
      setInterval(restartAnimation, wordsspilit.length * delay * 1000 + 2000); // Restart every 5 seconds
    });
  </script>
  
  {#if isVisible}
    <Motion {variants} initial="hidden" animate="visible" let:motion>
      <span
        style="line-height: normal;"
        class={cn(
          "text-black",
          className
        )}
        use:motion
      >
        {#each wordsspilit as word, i}
          <Motion {variants} custom={i} let:motion>
            <span use:motion> {@html word}</span>
          </Motion>
        {/each}
      </span>
    </Motion>
  {/if}