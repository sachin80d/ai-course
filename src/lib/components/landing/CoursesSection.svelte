<script>
    import AuroraText from "$lib/components/magic/AuroraText.svelte";
    import Marquee from "../magic/marquee/Marquee.svelte";

    export const employees = [
        'https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-1.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-2.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-3.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-4.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-5.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-6.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-7.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-8.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-9.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-10.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-11.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-12.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-13.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-14.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-15.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-16.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-17.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-18.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-19.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-20.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-1.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-2.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-3.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-4.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-5.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-6.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-7.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-8.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-9.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-10.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-11.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-12.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-13.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-14.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-15.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-16.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-17.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-18.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-19.svg','https://d31bwppm8yl9g2.cloudfront.net/learner/website/Learne-20.svg'
    ]

	export const courses = [
		{
			href: "/workshops/linkedin-growth",
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
			href: "/workshops/chatgpt-workshop",
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
			href: "/workshops/business-mastermind",
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
			href: "/workshops/product-management",
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
			href: "/workshops/marketing-mastermind",
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
			href: "/workshops/ai-for-consultants",
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

<section class="horizontal-card relative flex flex-row w-[100vw] gap-8 mt-40 pb-10">
    <div class="text-center text-2xl font-medium w-[40%] pl-20">
        <h2 class="text-left font-extralight md:text-left
            xl:text-[50px]      /* font-size: 89px at ≥1280px */
            sm:leading-none     /* line-height: 1 at ≥640px */
            sm:text-5xl         /* font-size: 4.5rem, line-height: 1.25 at ≥640px */
            tracking-[-0.89px]  /* letter-spacing: -0.89px */
        ">
            Courses that get you a <AuroraText>JOB</AuroraText>
        </h2>
        <div class="overflow-hidden">
            <div class="text-left mb-12 w-full md:text-left">
                <h2 class="text-[24px] font-light">
                    <span>1 </span>Lakh+ Learners
                </h2>
                <p class="text-base font-light text-gray-300">have reaped benefits from our programs</p>
            </div>
            <div class="overflow-hidden relative">
                <Marquee class="[--duration:100s] [--gap:1rem]">
                    {#each employees as employee}
                        <img src={employee} alt="employee" class="w-[75px] h-[75px]" />
                    {/each}
                </Marquee>
                <div
                class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
                ></div>
                <div
                    class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
                ></div>
            </div>
        </div>
    </div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 m-auto w-[50%]">
		{#each courses as course}
			<a class="relative block no-underline h-full courses-card-link flex items-center justify-center" href={course.href}>
				<div class="bg-white rounded-3xl overflow-hidden border flex flex-col h-full max-h-[424px] max-w-[313px]">
					<div class="relative w-full h-[180px] overflow-hidden">
						<img alt={course.title} src={course.img} class="object-cover absolute inset-0 w-full h-full" />
					</div>
					<div class="p-4 bg-white flex flex-col flex-grow">
						<h2 class="text-[#002726] text-2xl font-medium mb-4">{course.title}</h2>
						<div class="flex items-center gap-2 mb-4">
							<img alt="Duration" src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/gsdu.svg" class="w-[18px] h-[18px]" />
							<span class="text-[#002726] text-sm font-medium">{course.duration}</span>
						</div>
						<div class="flex items-center mb-6">
							<span class="text-[#002726] text-xl font-medium">{course.price}</span>
						</div>
						<div class="flex-grow"></div>
						<div class="flex items-start gap-3">
							<div class="flex items-center mt-1">
								<div class="flex relative" style="height: 40px;">
									{#each course.mentorsBlock.avatars as mentor, i}
										<div class="w-10 h-10 rounded-full overflow-hidden border border-black relative {i > 0 ? '-ml-4' : ''}">
											<img alt={mentor.name} src={mentor.img} class="object-cover absolute inset-0 w-full h-full" />
										</div>
									{/each}
									{#if course.mentorsBlock.avatars.length > 3}
										<div class="w-10 h-10 rounded-full bg-gray-300 border border-black flex items-center justify-center text-sm font-medium -ml-4">
											+{course.mentorsBlock.avatars.length - 3}
										</div>
									{/if}
								</div>
							</div>
							<div>
								<p class="text-[#002726] text-base font-medium">{course.mentorsBlock.topLine}</p>
								<p class="text-[#002726] text-sm">{course.mentorsBlock.subLine}</p>
							</div>
						</div>
					</div>
				</div>
                <div class="absolute top-0 right-[-25px]">
                    <img src="{course.badge_url}" class="w-[40px] h-[40px]" alt="badge"/>
                </div>
			</a>
		{/each}
	</div>
</section>
