<script lang="ts">
    export let title: string;
    export let description: string;
    export let href: string;
    export let src: string;
</script>

<a {href} class="{$$props.class} flex space-x-6">
    <img
        style="object-fit: contain; object-position: top center;"
        {src}
        width="100"
        height="70"
        alt={title}
        class="flex-shrink-0 rounded-md shadow-2xl"
    />
    <div >
        <h4 class="text-xl font-bold mb-1 text-black dark:text-white">
            {title}
        </h4>
        <p class="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
            {@html description}
        </p>
    </div>
</a> 