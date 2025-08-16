<script>
    import Marquee from "../magic/marquee/Marquee.svelte";
    import { Gauge,  Award, CircleDollarSign, Megaphone, Users, UserRoundCheck } from 'lucide-svelte';
    const advantages = [
        {
            icon: Megaphone,
            description: "Maximize Marketing ROI Using AI-Generated Ad Creatives"
        },
        {
            icon: CircleDollarSign,
            description: "Boost Sales with AI-Powered Lead Gen Chatbots"
        },
        
        {
            icon: Gauge,
            description: "Enhance Team Efficiency via AI-Driven Automation"
        },
        {
            icon: Users,
            description: "Captivate Audiences with AI-Assisted Storytelling"
        },
        {
            icon: UserRoundCheck,
            description: "Become AI-Confident. Talk like AI-Expert"
        }
    ]
</script>
<Marquee class="[--duration:30s] [--gap:4rem] overflow-hidden w-full">
    {#each advantages as advantage}
        <div class="flex flex-row items-top justify-start gap-4 border-2 rounded-lg h-[70px] w-[300px] p-2">
            <div class="flex flex-col pt-1">
                <span class="text-base text-gray-600"><svelte:component this={advantage.icon} /></span>
            </div>
            <div class="flex flex-col">
                <span class="text-base">{advantage.description}</span>
            </div>
        </div>
    {/each}
</Marquee>