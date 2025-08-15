<script lang="ts">
    import { cn } from "$lib/utils";
    let _class: string = "";
    export { _class as class };
    export let onClick: (() => void) | undefined;
    export let from_color: string = "#c2c2c2";
    export let via_color: string = "#505050";
    export let to_color: string = "#bebebe";
  </script>
  
<button class={cn(
    "relative inline-flex overflow-hidden rounded-xl p-px",
    _class
)}
on:click={onClick}
{...$$restProps}
>
    <span
      class="absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite]"
      style="background-image: conic-gradient(from 314deg at 50% 50%, {from_color} 0%, {from_color} 50%, {via_color} 70%, {to_color} 90%, {to_color} 100%);"
    />
    <span
      class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] px-4 py-2 text-sm font-medium backdrop-blur-3xl"
    >
    <slot>Default</slot>
    </span>
  </button>
  