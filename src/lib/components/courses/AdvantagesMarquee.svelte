<script>
    import Marquee from "$lib/components/magic/marquee/Marquee.svelte";
    import { Gauge,  Award, CircleDollarSign, Megaphone, Users, UserRoundCheck } from 'lucide-svelte';
    const advantages = [
        {
            icon: Megaphone,
            text_color: "text-[var(--dark-color-1)]",
            description: "Maximize Marketing ROI Using AI-Generated Ad Creatives"
        },
        {
            icon: CircleDollarSign,
            text_color: "text-[var(--dark-color-2)]",
            description: "Boost Sales with AI-Powered Lead Gen Chatbots"
        },
        
        {
            icon: Gauge,
            text_color: "text-[var(--dark-color-3)]",
            description: "Enhance Team Efficiency via AI-Driven Automation"
        },
        {
            icon: Users,
            text_color: "text-[var(--dark-color-4)]",
            description: "Captivate Audiences with AI-Assisted Storytelling"
        },
        {
            icon: UserRoundCheck,
            text_color: "text-[var(--dark-color-5)]",
            description: "Become AI-Confident. Talk like AI-Expert"
        }
    ]
</script>
<Marquee class="[--duration:30s] [--gap:4rem] overflow-hidden w-full">
    {#each advantages as advantage}
        <div class="flex flex-row items-top justify-start gap-4  h-[70px] w-[300px] p-2 bg-white backdrop-blur-md shadow-md rounded-lg">
            <div class="flex flex-col pt-1 relative">
                <span class="text-base text-gray-600"><svelte:component this={advantage.icon} class="{advantage.text_color}" /></span>
            </div>
            <div class="flex flex-col">
                <span class="text-base font-normal">{advantage.description}</span>
            </div>
        </div>
    {/each}
</Marquee>