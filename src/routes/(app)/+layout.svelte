<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header2.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
	  document.documentElement.classList.remove('light');
	  document.documentElement.classList.add('dark');
	});
</script>


<div class="min-h-screen bg-background antialiased">
	<Header />
	<div class="mx-auto flex-1">
		<slot></slot>
	</div>
	<!-- <Footer /> -->
</div>

