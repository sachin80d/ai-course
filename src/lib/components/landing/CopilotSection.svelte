<script lang="ts">
    import FeatureCard from "$lib/components/magic/Features/Features.svelte";
    import { Eye, PackageSearch, Settings, Cable, CircleDollarSign } from "lucide-svelte";
    import strategiesDarkImg from '$lib/imgs/strategies-dark.png';
	import backtestDarkImg from '$lib/imgs/backtest-dark.png';
    import automateTradeWithBrokerDarkImg from '$lib/imgs/automate-trade-with-broker-dark.png';
    import strategiesLightImg from '$lib/imgs/strategies-light.png';
	import backtestLightImg from '$lib/imgs/backtest-light.png';
    import automateTradeWithBrokerLightImg from '$lib/imgs/automate-trade-with-broker-light.png';
    import positionsImg from '$lib/imgs/positions-dark.jpg';
    import BorderBeam from "$lib/components/magic/borderbeam/BorderBeam.svelte";
    import ShimmerDiv from "$lib/components/magic/ShimmerDiv/ShimmerDiv.svelte";
    import IphonePro from "$lib/components/magic/IphonePro.svelte";
    import Iphone from "$lib/components/magic/Iphone.svelte";
    import ShineBorder from "$lib/components/magic/ShineBorder.svelte";
    import WordsFadeIn from "$lib/components/magic/WordsFadeIn.svelte";
    import Ipad from "$lib/components/magic/Ipad.svelte";
    import StrategyDarkImg from '$lib/imgs/strategy-2-dark.png';
	import StrategyLightImg from '$lib/imgs/strategy-2-light.png';
  import Separator from "$lib/components/magic/Seperator.svelte";
  import FloatingDollars from "$lib/components/ui/FloatingDollars.svelte";
  import CopilotSubSection from "$lib/components/landing/CopilotSubSection.svelte";
  import { Motion } from "svelte-motion";

    
      // {
      //   title: "Your 1-Click 24/7 Investment Assistant",
      //   content: "You ask any question about trading/investing and it answers it unbiased.",
      //   instrument: 'iphone',
      //   image: strategiesDarkImg,
      // }
</script>
<section class="relative copilot-section flex flex-col items-center justify-center overflow-y-hidden">
  <FloatingDollars>
    <h2 class="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl text-center mb-8">
      Your AI Wealth Assistant
    </h2>
    <CopilotSubSection
    title="Your AI Co-Pilot"
    content="You ask any question about trading/investing in the stock market and it answers it unbiased."
    >
      <div
          class="absolute inset-0 h-full w-full scale-[0.75] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 blur-[60px]"
        />
          
        <Iphone >
          <div class="relative w-[100%] h-full min-w-full pt-[90px] pl-8 pr-8">
              <div class="w-[90%] bg-gray-800 rounded-[10px] p-2 mt-5">
                <h1 class="text-sm">How can I make passive income from trading in the stock market?</h1>
              </div>
              <div class="mt-4 pl-4 w-[80%] bg-gradient-to-r from-color-1 via-color-2 to-color-3 rounded-[10px] p-2 ml-auto leading-[0.1]">
                <WordsFadeIn class="text-sm" words="You can try Option Selling, Covered Call Writing, and more. You can continue doing your job, while the strategies are managed by our AI.<br/><br/> Should I suggest few strategies that I can automate?" />
              </div>
            </div>
          </Iphone>
          <div class="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-background to-transparent"></div>

    </CopilotSubSection>

    <CopilotSubSection 
    title="AI Explains the Trades" 
    content="Learn how and why the AI took the trades from your AI-assitant itself.<br/>Learn on the go."
    >
      <div
      class="absolute overflow-hidden inset-0 h-full w-full scale-[0.7] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 blur-[60px]"
    />

        <Ipad>
        
          <Motion
            animate={{
              scale: [1, 2.5],
              rotate: [0, -5],
            }}
            transition={{ 
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
            let:motion
          >
          <div use:motion>
            <img
            src={StrategyDarkImg}
            alt="StrategyDarkImg"
            class="relative hidden size-full rounded-[inherit] border object-contain dark:block m-10"
          />
          <img
          use:motion
              src={StrategyLightImg}
              alt="StrategyLightImg"
              class="relative block size-full rounded-[inherit] border object-contain dark:hidden m-10"
          />
          </div>  
          </Motion>

        </Ipad>
        <div class="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-background to-transparent"></div>

      </CopilotSubSection>
      <CopilotSubSection
      title="Your 1-Click 24/7 Investment Assistant"
      content="You ask any question about trading/investing and it answers it unbiased."
      >
        <div
            class="absolute inset-0 h-full w-full scale-[0.75] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 blur-[60px]"
          />
            
          <Iphone >
            <div class="relative w-[100%] h-full min-w-full pt-[90px] pl-8 pr-8">
                <div class="w-[90%] bg-gray-800 rounded-[10px] p-2 mt-5">
                  <h1 class="text-sm">HDFC is down 10% in my portfolio in last 5 days. What should I do?</h1>
                </div>
                <div class="mt-4 pl-4 w-[80%] bg-gradient-to-r from-color-1 via-color-2 to-color-3 rounded-[10px] p-2 ml-auto leading-[0.1]">
                  <WordsFadeIn class="text-sm" words="HDFC fell because of negative news coverage. But it is a good company and has a strong balance sheet. It also have a strong FII holding. You can hold it for the long term." />
                </div>
              </div>
            </Iphone>
            <div class="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-background to-transparent"></div>

      </CopilotSubSection>
    </FloatingDollars>

  </section>
  