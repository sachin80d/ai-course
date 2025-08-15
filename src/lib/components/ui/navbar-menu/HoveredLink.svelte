<script lang="ts">
    export let href: string;
</script>

<a
    {href}
    class="{$$props.class} text-neutral-700 dark:text-neutral-200 hover:text-black"
>
    <slot />
</a> 