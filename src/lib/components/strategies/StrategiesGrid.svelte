<script lang="ts">
      import { onMount } from "svelte";

    import BorderBeam from "$lib/components/magic/borderbeam/BorderBeam.svelte";
    import MagicCard from "$lib/components/magic/MagicCard/MagicCard.svelte";
    import CardContainer from "$lib/components/magic/CardContainer/CardContainer.svelte";
    interface Statistics {
        AverageProfitPerTrade: number;
        Expectancy: number;
        MaximumDrawdown: number;
        OverallProfit: number;
        WinningRatio: number;
    }

    interface StatisticsMeta {
        compute_ts: string;
        end_date: string;
        start_date: string;
    }

    interface Strategy {
        _id: string;
        analyst_id: string;
        analyst_name: string;
        analyst_profile_picture: string;
        analyst_registration: string;
        margin: number;
        name: string;
        positional: string;
        side: string;
        description: string;
        statistics: Statistics;
        statistics_meta: StatisticsMeta;
        subscriptions_count: number;
        underlying: string;
    }
    

    function generateColors() {
    const hue = Math.floor(Math.random() * 360); // Random hue between 0-360
    const saturation = 20 + Math.random() * 20; // 60-80% saturation for vibrancy
    const lightness = 20 + Math.random() * 10; // 20-30% lightness for depth

    const gradientColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const borderColor = `hsl(${hue}, 90%, 70%)`; // Brighter variant for border

    // Fetch JSON file on component mount
    return { gradientColor, borderColor };
  }

  let strategies: Strategy[] = [];
  let strategyColors: { gradientColor: string; borderColor: string }[] = [];

    onMount(async () => {
        const response = await fetch("/strategies.json"); // Load from static folder
        strategies = await response.json();
        strategyColors = strategies.map(() => generateColors());
    });
</script>

<div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {#each strategies as strategy, index}
    <CardContainer>

    <MagicCard
    class="cursor-pointer flex-col items-start justify-center shadow-2xl whitespace-nowrap text-4xl group hover:border-[{strategyColors[index].borderColor}] transition-all duration-300"
    gradientColor={strategyColors[index].gradientColor}
    gradientSize={300}
  >
    <article
  class="flex flex-col items-start justify-between relative p-7 border border-gray-700/70"
>
  <div class="flex items-center gap-x-4 text-xs">
    <!-- <time datetime="2020-03-16" class="text-gray-300">June 7, 2024</time> -->
    <span
      class="relative z-10 rounded-full bg-transparent px-2 py-1 font-medium text-gray-200 border border-gray-100"
      >{strategy["positional"]}
    </span>
    <span
      class="relative z-10 rounded-full bg-transparent px-2 py-1 font-medium text-gray-200 border border-gray-100"
      >{strategy["side"]}
    </span>
    <span
      class="relative z-10 rounded-full bg-transparent px-2 py-1 font-medium text-gray-200 border border-gray-100"
      >{strategy["underlying"]}
    </span>
  </div>
  <div class="group relative w-full">
    <h3
      class="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50"
    >
      <a href="/">
        <span class="absolute inset-0"></span>
        {strategy["name"]}
      </a>
    </h3>
    <div class="flex items-start gap-x-4 text-[12px]">
        <!-- <time datetime="2020-03-16" class="text-gray-300">June 7, 2024</time> -->
        <span
          class="relative z-10 bg-transparent py-1 text-gray-200"
          >Margin Required: <span class="font-bold">Rs {strategy["margin"].toLocaleString('en-IN')}</span>
        </span>
    </div>
    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-400 whitespace-normal text-[12px]">
        {@html strategy["description"]}
    </p>

    <div class="flex items-start gap-x-4 text-[12px] mt-5">
        <!-- <time datetime="2020-03-16" class="text-gray-300">June 7, 2024</time> -->
        <span
          class="relative z-10 bg-transparent py-1 text-gray-200 text-[12px]"
          >MTM: Rs <span class="font-bold rounded-full bg-[#58cf8b] text-black px-2">{strategy["statistics"]["OverallProfit"].toLocaleString('en-IN')}</span>
        </span>
        <span
          class="relative z-10 bg-transparent px-2 py-1 text-gray-200 text-[12px]"
          >DD: Rs <span class="font-bold text-[#d2746f]">{strategy["statistics"]["MaximumDrawdown"].toLocaleString('en-IN')}</span>
        </span>
        <span
          class="relative z-10 bg-transparent px-2 py-1 text-gray-200 text-[12px]"
          >Win%: <span class="font-bold text-[#63b0ff]">{strategy["statistics"]["WinningRatio"]}%</span>
        </span>
    </div>
  </div>
  <!-- <div class="relative mt-8 flex items-center gap-x-4">
    <img
      src="https://avatars.githubusercontent.com/u/93428946?v=4"
      alt="Sachin"
      class="h-10 w-10 rounded-full bg-gray-50"
    />
    <div class="text-sm leading-5">
      <p class="font-semibold text-white">
        <a href="https://github.com/SikandarJODD">
          <span class="absolute inset-0"></span>
          Sachin Dalal
        </a>
      </p>
      <p class="text-gray-500">Svelte Developer</p>
    </div>
  </div> -->
</article>
</MagicCard>
</CardContainer>
        <!-- <article class="flex flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background">
            <BorderBeam size={150} duration={12} />
            <div class="flex items-center gap-x-4 text-xs">
                <time datetime={strategy.statistics_meta.start_date} class="text-gray-300">
                    {new Date(strategy.statistics_meta.start_date).toLocaleDateString()}
                </time>
                <span class="relative z-10 rounded-full bg-transparent px-3 py-1.5 font-medium text-gray-200 border border-gray-100">
                    {strategy.underlying}
                </span>
            </div>
            <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-50">
                    <span class="absolute inset-0"></span>
                    {strategy.name}
                </h3>
                <div class="mt-5 space-y-2">
                    <p class="text-sm leading-6 text-gray-400">
                        Win Rate: {strategy.statistics.WinningRatio.toFixed(2)}%
                    </p>
                    <p class="text-sm leading-6 text-gray-400">
                        Overall Profit: ₹{strategy.statistics.OverallProfit.toLocaleString()}
                    </p>
                    <p class="text-sm leading-6 text-gray-400">
                        Max Drawdown: ₹{Math.abs(strategy.statistics.MaximumDrawdown).toLocaleString()}
                    </p>
                </div>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
                <img
                    src={strategy.analyst_profile_picture}
                    alt={strategy.analyst_name}
                    class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-5">
                    <p class="font-semibold text-white">
                        {strategy.analyst_name}
                    </p>
                    <p class="text-gray-500">SEBI Reg: {strategy.analyst_registration}</p>
                </div>
            </div>
        </article> -->
    {/each}
</div> 