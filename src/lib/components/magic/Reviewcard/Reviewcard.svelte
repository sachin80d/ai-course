<script lang="ts">
    import { cn } from "$lib/utils";
  
    export let img: string;
    export let name: string;
    export let username: string;
    export let body: string;
    export let title: string;
    export let icon: any;
    export let icon_bg_color: string;
    export let designation: string;
  </script>
  
  <figure
    class={cn(
      "review-card relative w-64 cursor-pointer overflow-x-hidden overflow-y-hidden rounded-2xl border p-4",
      // light styles
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      // dark styles
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div class="avatar flex flex-row items-center gap-2">
      <img class="rounded-full" width="32" height="32" alt="" src={img} />
      <div class="text-details flex flex-col">
        <!-- svelte-ignore a11y-structure -->
        <figcaption class="name text-sm font-medium dark:text-white">
          {name}
        </figcaption>
        <p class="username text-xs font-medium dark:text-white/40">{username}</p>
        <div class="designation text-xs font-medium dark:text-white/40">{designation}</div>
      </div>
    </div>
    <div class="icon-container" style="background-color: {icon_bg_color}; display: none;">
        <svelte:component this={icon} class="icon" />
    </div>
    <div class="title" style="display: none;">{title}</div>
    <blockquote class="mt-2 text-sm">{body}</blockquote>
  </figure>
  