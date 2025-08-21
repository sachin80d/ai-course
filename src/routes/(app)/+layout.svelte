<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header2.svelte';
</script>


<div class="min-h-screen bg-background antialiased">
	<Header />
	<div class="mx-auto flex-1">
		<slot></slot>
	</div>
	<!-- <Footer /> -->
</div>

