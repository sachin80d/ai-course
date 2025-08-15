<script lang="ts">
    import ShineBorder from '$lib/components/magic/ShineBorder/ShineBorder.svelte';
import { Motion } from 'svelte-motion';

    export let setActive: (item: string) => void;
    export let active: string | null;
    export let item: string;

    const transition = {
        type: "spring",
        mass: 0.5,
        damping: 11.5,
        stiffness: 100,
        restDelta: 0.001,
        restSpeed: 0.001
    };
</script>

<div on:mouseenter={() => setActive(item)} class="relative" role="button" tabindex="0">
    <Motion transition={{ duration: 0.3 }} let:motion>
        <p use:motion class="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
            {item}
        </p>
    </Motion>
    {#if active !== null && active === item}
        <Motion
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            {transition}
            let:motion
        >
            <div 
                use:motion
                class="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-1/2 pt-4"
            >
                <div class="min-w-[200px] bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.5] dark:border-white/[0.5] shadow-xl">
                        <div class="w-max h-full p-4">
                        <slot />
                    </div>
            </div>
            </div>
        </Motion>
    {/if}
</div> 