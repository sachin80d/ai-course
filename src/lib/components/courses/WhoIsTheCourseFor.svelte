<script lang="ts">
    import { ContactRound } from "lucide-svelte";

    const list1 = [
        {
            img_src: '1.png',
            text: 'Marketing Professionals',
        },
        {
            img_src: '2.png',
            text: 'Sales Professionals',
        },
        {
            img_src: '3.png',
            text: 'Product Managers',
        },
        {
            img_src: '4.png',
            text: 'Business Owners',
        },
        {
            img_src: '5.png',
            text: 'Entrepreneurs',
        },
        
        {
            img_src: '6.png',
            text: 'Freelancers',
        },
        
        {
            img_src: '7.png',
            text: 'Content Creators',
        },
        
        {
            img_src: '8.png',
            text: 'Customer Service',
        },
        {
            img_src: '9.png',
            text: 'HR & Talent Professionals',
        },
        {
            img_src: '10.png',
            text: 'Business Leaders',
        },
        
        {
            img_src: '1.png',
            text: 'Executives',
        },
        
        {
            img_src: '2.png',
            text: 'Developers',
        },
        
        
        
        
    ];
</script>

<section>
    <div class="flex flex-col items-center justify-center mb-8">
        <div class="start-heading"><svelte:component this={ContactRound} /></div>

        <div class="main-heading">Who this course is for?</div>
    </div>
    <div class="flex flex-row flex-wrap items-center justify-center gap-2 max-w-6xl mx-auto">
        {#each list1 as item, i (i)}
            <div class="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-muted p-2 justify-center">
                <div class="flex h-8 w-8 overflow-hidden rounded-full bg-background">
                    <img
                        src={`/profile-pics/colored/${item.img_src}`}
                        alt={item.text}
                        class="m-auto block h-full w-full object-cover object-center"
                    />
                </div>
                <p class="pr-2 text-md font-bold light:text-dark dark:text-light">{item.text}</p>
            </div>
        {/each}
    </div>
</section>