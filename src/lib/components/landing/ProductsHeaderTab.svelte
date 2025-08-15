<script>
    import { LockIcon, ShieldCheckIcon, PlugIcon, BotIcon, Share2Icon, BlocksIcon, NetworkIcon } from 'lucide-svelte';
  
    const features = [
      {
        title: "AI Assistant",
        description: "Your personal AI assistant",
        items: ["All Knowledge", "Data Analysis", "Prompt Library", "Deep Research", "Companion"],
      },
      {
        title: "AI Agents",
        description: "Build and manage AI agents",
        items: ["Agent Builder", "Agent Orchestration", "Agent Library", "Agentic Reasoning Engine"],
      },
      {
        title: "AI Search",
        description: "The foundation of enterprise AI",
        items: ["Hybrid Search", "Knowledge Graph", "Custom Language Models"],
      },
    ];
  
    const bottomFeatures = [
      { icon: PlugIcon, title: "Connectors", desc: "Connect to all company data" },
      { icon: BlocksIcon, title: "Model Hub", desc: "Get access to the latest models" },
      { icon: Share2Icon, title: "APIs", desc: "Build generative AI experiences" },
      { icon: LockIcon, title: "AI Protect", desc: "Safely scale AI at work" },
      { icon: ShieldCheckIcon, title: "Security", desc: "Secure by design from day one" },
      { icon: NetworkIcon, title: "System of Context", desc: "Context powers productivity" },
    ];
  
    const integrations = [
      "AI in Slack", "AI in Microsoft Teams", "AI in Zoom", "AI in Service Cloud",
      "AI in ServiceNow", "AI in Zendesk", "AI in GitHub", "Browser Extension"
    ];
  </script>
  
  <div class="flex flex-col md:flex-row bg-black text-white">
    <!-- Left Section -->
    <div class="flex-[2] p-8 space-y-8">
      <h2 class="text-lg font-semibold">AI SERVICES</h2>
  
      <div class="flex flex-col md:flex-row gap-8">
        {#each features as f}
          <div class="flex-1">
            <h3 class="text-blue-600 font-semibold text-md">{f.title}</h3>
            <p class="text-sm text-gray-400 mb-4">{f.description}</p>
            <ul class="space-y-2 text-[15px]">
              {#each f.items as item}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
  
      <div>
        <a
          href="#"
          class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-lime-100 to-pink-100 px-4 py-2 text-black font-medium text-sm"
        >
          Platform Overview
          <span class="text-lg">→</span>
        </a>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-t pt-6 mt-6">
        {#each bottomFeatures as feat}
          <div class="flex items-start gap-3">
            <svelte:component this={feat.icon} class="w-5 h-5 mt-1 text-gray-300" />
            <div>
              <h4 class="font-semibold text-sm">{feat.title}</h4>
              <p class="text-xs text-gray-400">{feat.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Right Section -->
    <div class="flex-1 p-8 border-l border-gray-500">
      <h2 class="text-lg font-semibold mb-4">AI WHERE YOU WORK</h2>
      <ul class="space-y-3 text-sm">
        {#each integrations as integration}
          <li>{integration}</li>
        {/each}
      </ul>
    </div>
  </div>
  