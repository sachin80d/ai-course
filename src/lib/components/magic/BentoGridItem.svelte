<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
  export let start_title: string | HTMLElement | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export let icon: HTMLElement | undefined = undefined;

    export let titleClassName: string | undefined = undefined;
    export let descriptionClassName: string | undefined = undefined;

</script>

<div
  class={cn(
    'group/bento row-span-1 flex flex-col space-y-4 rounded-xl border border-transparent bg-white px-12 py-6 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
    className
  )}
>
  <!-- header comes first; leave as-is -->
  <slot name="header" />

  <!-- let content grow to fill the rest -->
  <div class="flex-1 min-h-0 transition duration-200 group-hover/bento:translate-x-2">
    <div class="flex flex-row gap-2 items-center">
      <slot name="icon" />
      <div class="bento-grid-item-start-title">
        {start_title}
      </div>
    </div>
    <div class={cn("mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200", titleClassName)}>
      {title}
    </div>
    <div class={cn("font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300", descriptionClassName)}>
      {@html description}
    </div>
  </div>
</div>
