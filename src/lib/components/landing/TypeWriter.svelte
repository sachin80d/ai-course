<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    // Customize these
    export let phrases: string[] = [
      'Generate content with AI',
      'Automate your workflow',
      'Analyze data in seconds',
      'Make smarter decisions'
    ];
    export let typeSpeed = 60;    // ms per typed character
    export let deleteSpeed = 25;  // ms per deleted character (faster)
    export let holdTime = 1200;   // ms to hold full phrase before deleting
    export let startDelay = 250;  // initial delay before starting
  
    let text = '';
    let i = 0;         // phrase index
    let j = 0;         // char index within phrase
    let deleting = false;
    let running = true;
  
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
  
    async function run() {
      await sleep(startDelay);
  
      while (running) {
        const current = phrases[i] ?? '';
        if (!deleting) {
          // typing forward
          if (j < current.length) {
            text += current[j];
            j++;
            await sleep(typeSpeed);
          } else {
            await sleep(holdTime);
            deleting = true;
          }
        } else {
          // deleting backwards
          if (j > 0) {
            text = text.slice(0, -1);
            j--;
            await sleep(deleteSpeed);
          } else {
            deleting = false;
            i = (i + 1) % phrases.length;
            await sleep(200); // tiny pause before next phrase
          }
        }
      }
    }
  
    onMount(run);
    onDestroy(() => (running = false));
  </script>
  
  <!-- Wrapper: keep baseline stable, announce changes for a11y -->
  <div class="inline-flex items-center font-semibold text-balance">
    <span
      class="font-mono tabular-nums"
      aria-live="polite"
      aria-atomic="true"
    >
      {text}
    </span>
    <!-- caret -->
    <span class="ml-0.5 inline-block h-[1em] w-[1px] bg-current animate-caret"></span>
  </div>
  
  <style>
    @keyframes caret-blink {
      0%, 49%   { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .animate-caret {
      animation: caret-blink 1s step-start infinite;
    }
  </style>
  