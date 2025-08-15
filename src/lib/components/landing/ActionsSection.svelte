<script>
    import FeatureCard from "$lib/components/magic/Features/Features.svelte";
    import { Eye, PackageSearch, Settings, Cable, CircleDollarSign } from "lucide-svelte";
    import strategiesDarkImg from '$lib/imgs/strategies-dark.png';
	import backtestDarkImg from '$lib/imgs/backtest-dark.png';
    import automateTradeWithBrokerDarkImg from '$lib/imgs/automate-trade-with-broker-dark.png';
    import strategiesLightImg from '$lib/imgs/strategies-light.png';
	import backtestLightImg from '$lib/imgs/backtest-light.png';
    import automateTradeWithBrokerLightImg from '$lib/imgs/automate-trade-with-broker-light.png';
    import positionsImg from '$lib/imgs/positions-dark.jpg';
    // Svelte 5 Code : https://svelte.dev/playground/39866a136f0d4268821e5ae901dce47f?version=5.0.5
  
    let data = [
      {
        id: 1,
        title: "1. AI Picks the Best Strategy",
        content: "AI selects a stock trading strategy based on your risk profile from host of RA certified strategies.",
        image: strategiesDarkImg,
        icon: PackageSearch,
      },
      {
        id: 2,
        title: "2. See Backtested Performance",
        content: "You can view AI-verified profit results, including slippage & fees of your broker and exchange.",
        image: backtestDarkImg,
        icon: Settings,
      },
      {
        id: 3,
        title: "3. Seamless Broker Integration",
        content: "Once you connect your stock broker with our app, the AI will automate trades effortlessly. Your money is secure in your account, and AI can only take trades and no money tranfer is involved. ",
        image:automateTradeWithBrokerDarkImg,
        icon: Cable,
      },
      {
        id: 4,
        title: "4. Sit Back & Watch Profits Grow",
        content: "AI executes & manages risk while you relax. Net profit is what you earn, secure in your broker account. Make your money earn while you sleep, work or play",
        image:positionsImg,
        icon: CircleDollarSign,
      },
    ];
  </script>
  
  <section class="">
  <div class="flex flex-col items-center justify-center overflow-y-hidden">
    <h2 class="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center mb-8">
      AI Does Stock Trading,<br/>You Earn Profit
    </h2>
    <FeatureCard {data} />
  </div>
</section>
  