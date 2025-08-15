<script>
	import Marquee from "$lib/components/magic/marquee/Marquee.svelte";
	import Reviewcard from "$lib/components/magic/Reviewcard/Reviewcard.svelte";
	function triggerButtonClick() {
		const targetButton = document.getElementById("target-button");
		if (targetButton) {
			console.log("Button clicked");
		targetButton.click();
		} else {
		console.warn("Button with ID 'target-button' not found!");
		}
	}
  
	const reviews = [
	  {
		name: "Ashutosh",
		username: "@_ashu03",
		body: "Noicee work. I love it. Keep it up.",
		img: "https://avatar.vercel.sh/jack",
	  },
	  {
		name: "Shaily",
		username: "@_hacker_shaily",
		body: "Wooww, this is what I was looking for. Great work.",
		img: "https://avatar.vercel.sh/jill",
	  },
	  {
		name: "Hitesh",
		username: "@h007_idol",
		body: "NetQuant you made me a profitable trader. Keep it up.",
		img: "https://avatar.vercel.sh/john",
	  },
	  {
		name: "Mike",
		username: "@pMike_22",
		body: "I never knew Stock Market could get me passive income.",
		img: "https://avatar.vercel.sh/jane",
	  },
	  {
		name: "Mithali",
		username: "@mith_buster023",
		body: "Its all good risk management. Its all about Systematic Trading.",
		img: "https://avatar.vercel.sh/jenny",
	  },
	  {
		name: "Neha",
		username: "@neha020280",
		body: "Options selling is great. I love it.",
		img: "https://avatar.vercel.sh/james",
	  },
	];
  
	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
  </script>
  
  <div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 pb-0 md:shadow-xl"
  >
  <h2 class="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center mb-8">
	What Our Clients Say
  </h2>
	<Marquee pauseOnHover class="[--duration:20s]">
	  {#each firstRow as item}
		<Reviewcard {...item} />
	  {/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:20s]">
	  {#each secondRow as item}
		<Reviewcard {...item} />
	  {/each}
	</Marquee>
	<div
	  class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
	></div>
	<div
	  class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
	></div>
  </div>
  