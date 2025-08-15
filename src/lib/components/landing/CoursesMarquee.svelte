<script>
	// Exact course details copied from the provided HTML
    import Marquee from "$lib/components/magic/marquee/Marquee.svelte";

	export const courses = [
		{
			href: "#",
			img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/gslink.webp",
			title: "LinkedIn Growth With AI",
			duration: "5 Days",
			price: "₹ 499",
            badge_url: "/badge.png",
			mentorsBlock: {
				topLine: "Vaibhav Sisinty",
				subLine: "Founder Growth School",
				avatars: [
					{
						name: "Vaibhav Sisinty",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/vn.webp"
					}
				],
				extraCount: 0
			}
		},
		{
			href: "#",
			img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/gschat.webp",
			title: "Generative AI Workshop",
			duration: "3 Hours",
			price: "₹ 499",
            badge_url: "/degree.png",
			mentorsBlock: {
				topLine: "Vaibhav Sisinty",
				subLine: "Founder Growth School",
				avatars: [
					{
						name: "Vaibhav Sisinty",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/vn.webp"
					}
				],
				extraCount: 0
			}
		},
		{
			href: "#",
			img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/gsbusin.webp",
			title: "Generative AI Business Mastermind",
			duration: "2 Days",
			price: "₹ 499",
            badge_url: "/social_leaderboard.png",
			mentorsBlock: {
				topLine: "Multiple mentors from",
				subLine: "GrowthSchool, Uber & more",
				avatars: [
					{
						name: "Siddharth",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/bm2.svg"
					},
					{
						name: "Raghuveer Nishtala",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/eng6.webp"
					}
				],
				extraCount: 2
			}
		},
		{
			href: "#",
			img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/gsprod.webp",
			title: "Product Management With AI",
			duration: "3 Hours",
			price: "₹ 499",
            badge_url: "/badge.png",
			mentorsBlock: {
				topLine: "Mohammad Sarosh",
				subLine: "Product Manager at Google",
				avatars: [
					{
						name: "Mohammad Sarosh",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/sarosh.webp"
					}
				],
				extraCount: 0
			}
		},
		{
			href: "#",
			img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/gsmarke.webp",
			title: "Generative AI Marketing Mastermind",
			duration: "2 Days",
			price: "₹ 499",
            badge_url: "/degree.png",
			mentorsBlock: {
				topLine: "Multiple mentors from",
				subLine: "Samur, Uber & more",
				avatars: [
					{
						name: "Priyanku Sarmah",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/eng5.webp"
					},
					{
						name: "Raghuveer Nishtala",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/gs/eng6.webp"
					}
				],
				extraCount: 2
			}
		},
		{
			href: "#",
			img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/gscon.webp",
			title: "AI For Consultants",
			duration: "3 Hours",
			price: "₹ 499",
            badge_url: "/social_leaderboard.png",
			mentorsBlock: {
				topLine: "Multiple mentors from",
				subLine: "School and BCG",
				avatars: [
					{
						name: "Vaibhav Sisinty",
						img: "https://d31bwppm8yl9g2.cloudfront.net/learner/website/vn.webp"
					}
				],
				extraCount: 1
			}
		}
	];
</script>


	<!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> -->

    <Marquee pauseOnHover class="[--duration:40s] [--gap:8rem]">
		{#each courses as course}
			<a class="block no-underline h-full courses-card-link relative" href={course.href}>
				<div class="bg-white rounded-lg overflow-hidden border flex flex-col h-full max-h-[290px] max-w-[150px]">
					<div class="relative w-full h-[100px] overflow-hidden">
						<img alt={course.title} src={course.img} class="object-cover absolute inset-0 w-full h-full" />
					</div>
					<div class="px-2 py-4 bg-white flex flex-col flex-grow">
						<h2 class="text-[#002726] text-sm font-medium mb-4">{course.title}</h2>
						<div class="flex items-center gap-1 mb-2">
							<img alt="Duration" src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/gsdu.svg" class="w-[18px] h-[18px]" />
							<span class="text-[#002726] text-[0.6rem] font-medium">{course.duration}</span>
						</div>
						<div class="flex items-center mb-4">
							<span class="text-[#002726] text-[0.6rem] font-medium">{course.price}</span>
						</div>
						<div class="flex-grow"></div>
						<div class="flex items-start gap-2">
							<div class="flex items-center mt-1">
								<div class="flex relative" style="height: 15px;">
									{#each course.mentorsBlock.avatars as mentor, i}
										<div class="w-5 h-5 rounded-full overflow-hidden border border-black relative {i > 0 ? '-ml-3' : ''}">
											<img alt={mentor.name} src={mentor.img} class="object-cover absolute inset-0 w-full h-full" />
										</div>
									{/each}
									{#if course.mentorsBlock.avatars.length > 3}
										<div class="w-5 h-5 rounded-full bg-gray-300 border border-black flex items-center justify-center text-sm font-medium -ml-3">
											+{course.mentorsBlock.avatars.length - 3}
										</div>
									{/if}
								</div>
							</div>
							<div>
								<p class="text-[#002726] text-[0.5rem] font-medium">{course.mentorsBlock.topLine}</p>
								<p class="text-[#002726] text-[0.4rem]">{course.mentorsBlock.subLine}</p>
							</div>
						</div>
					</div>
				</div>
                <div class="absolute top-0 right-[-35px]">
                    <img src="{course.badge_url}" class="w-[30px] h-[30px]" alt="badge"/>
                </div>
			</a>
		{/each}
	<!-- </div> -->
    </Marquee>
