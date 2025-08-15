<script lang="ts">
    import { Motion } from 'svelte-motion';

    const transition = {
        type: "spring",
        mass: 0.5,
        damping: 11.5,
        stiffness: 100,
        restDelta: 0.001,
        restSpeed: 0.001
    };

    export let setActive: (item: string | null) => void;
</script>

<nav
    on:mouseleave={() => setActive(null)}
    class="special relative shadow-input flex justify-center items-center space-x-4 px-8 py-auto h-full mx-auto [&:has(a,button,div[role='button'])]:pointer-events-auto"
>
    <slot />
</nav>

<!-- MenuItem.svelte -->
<script context="module" lang="ts">
    export const MenuItem = {
        render: (props: {
            setActive: (item: string) => void;
            active: string | null;
            item: string;
        }) => {
            const { setActive, active, item } = props;
            return `
                <div class="relative" on:mouseenter={() => setActive(item)}>
                    <Motion
                        transition={{ duration: 0.3 }}
                        let:motion
                    >
                        <p 
                            use:motion
                            class="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
                        >
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
                                class="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
                            >
                                <div class="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                                    <div class="w-max h-full p-4">
                                        <slot />
                                    </div>
                                </div>
                            </div>
                        </Motion>
                    {/if}
                </div>
            `;
        }
    };

    export const ProductItem = {
        render: (props: {
            title: string;
            description: string;
            href: string;
            src: string;
        }) => {
            const { title, description, href, src } = props;
            return `
                <a {href} class="flex space-x-2">
                    <img
                        {src}
                        width="140"
                        height="70"
                        alt={title}
                        class="flex-shrink-0 rounded-md shadow-2xl"
                    />
                    <div>
                        <h4 class="text-xl font-bold mb-1 text-black dark:text-white">
                            {title}
                        </h4>
                        <p class="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                            {description}
                        </p>
                    </div>
                </a>
            `;
        }
    };

    export const HoveredLink = {
        render: (props: { href: string }) => {
            const { href } = props;
            return `
                <a
                    {href}
                    class="text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                    <slot />
                </a>
            `;
        }
    };
</script> 