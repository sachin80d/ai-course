<script lang="ts">
    export let value: string;
    export let label: string;
    export let type: string = 'text';
    const inputId = `input-${Math.random().toString(36).slice(2)}`;


    function typeAction(node: HTMLInputElement) {
        node.type = type;
    }
</script>

<p class="form-control">
	{#if label}
		<label class="label text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white" for={inputId}>{label}:</label>
	{/if}
	<input class="input 
    dark:placeholder-text-neutral-600 duration-400 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input  transition file:border-0 
        file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 disabled:cursor-not-allowed
         disabled:opacity-50 group-hover/input:shadow-none
         dark:bg-zinc-800
         dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600
    "
    use:typeAction bind:value={value}/>
</p>