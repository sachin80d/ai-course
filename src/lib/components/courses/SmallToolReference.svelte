<script lang="ts">
    type Member = { name: string; logo: string; description: string,  height?: string };
    import { Brain } from 'lucide-svelte';
  
    const knowledge_tools: Member[] = [
    {
        name: 'ChatGPT',
        description: 'Conversational AI for content creation, ideation, and automation',
        logo: '/tool_logos/chatgpt.webp'
    },
    {
        name: 'Grok',
        description: 'Real-time conversational AI assistant from X',
        logo: '/tool_logos/grok.webp'
    },
    {
        name: 'Gemini',
        description: "Google's multimodal AI for advanced search, analysis, and writing",
        logo: '/tool_logos/gemini.webp'
    },
    {
        name: 'NotebookLM',
        description: 'AI-powered document exploration and insight extraction',
        logo: '/tool_logos/notebooklm.webp'
    },
    {
        name: 'Perplexity',
        description: 'AI research assistant with real-time answers and sources',
        logo: '/tool_logos/perplexity.webp'
    },
    {
        name: 'DeepSeek',
        description: 'Code + language AI for research, reasoning, and dev assistance',
        logo: '/tool_logos/deepseek.webp'
    },
    {
        name: 'Claude',
        description: 'Context-rich AI for long-form thinking and structured content',
        logo: '/tool_logos/claude.webp'
    },
    {
        name: 'Notion',
        description: 'Productivity platform with AI for notes, summaries, and workflows',
        logo: '/tool_logos/notion.webp'
    },
    {
        name: 'Julius',
        description: 'AI analyst for turning spreadsheets into smart dashboards',
        logo: '/tool_logos/julius.webp',
        height: 'h-5'
    }
    ];
    
    const media_assets_tools: Member[] = [
    {
        name: 'Midjourney',
        description: 'High-quality AI image generation with creative control',
        logo: '/tool_logos/midjourney.webp'
    },
    {
        name: 'Ideogram',
        description: 'Text-to-image AI for branded visuals and creative design',
        logo: '/tool_logos/ideogram.webp'
    },
    {
        name: 'Sora',
        description: "OpenAI's image generator with professional quality",
        logo: '/tool_logos/sora.webp'
    },
    ];

    
    const ai_video_tools: Member[] = [
        {
            name: 'Runway',
            description: 'Video editing and generation using AI, including inpainting',
            logo: '/tool_logos/runway.webp'
        },
        {
            name: 'Higgsfield',
            description: 'Style-driven AI video generation from minimal inputs',
            logo: '/tool_logos/higgsfield.webp'
        },
        {
            name: 'Google Veo',
            description: 'Google\'s advanced generative video tool for high-fidelity output',
            logo: '/tool_logos/veo.webp'
        },
        {
            name: 'KlingAI',
            description: 'AI motion video generator for realistic animation and avatars',
            logo: '/tool_logos/klingai.webp'
        },
        {
            name: 'Eleven Labs',
            description: 'AI voice generation and cloning with human-like quality',
            logo: '/tool_logos/elevenlabs.webp'
        },
        {
            name: 'HeyGen',
            description: 'AI video creator with avatars and multi-language lip sync',
            logo: '/tool_logos/heygen.webp'
        }
    ];

    const presentations_and_slides_tools: Member[] = [
        {
            name: 'Loom',
            description: 'AI-enhanced video messaging with summaries and transcriptions',
            logo: '/tool_logos/loom.webp'
        },
        
        {
            name: 'Gamma',
            description: 'AI-based tool to create visually stunning decks and presentations',
            logo: '/tool_logos/gamma.webp'
        },
        
    ];

    const workflows_and_app_development_tools: Member[] = [
        {
            name: 'Make',
            description: 'Visual automation tool to connect apps and streamline business logic',
            logo: '/tool_logos/make.webp'
        },
        {
            name: 'N8N',
            description: 'No-code automation platform to connect apps and streamline workflows',
            logo: '/tool_logos/n8n.webp'
        },
        {
            name: 'Google AI Studio',
            description: 'Developer tool to build and test with Gemini models via APIs',
            logo: '/tool_logos/googleaistudio.webp'
        },
        {
            name: 'lovable',
            description: 'Visual no-code builder to create AI tools and interfaces',
            logo: '/tool_logos/lovable.webp'
        },
        {
            name: 'vapi',
            description: 'Framework for building voice-enabled AI agents and assistants',
            logo: '/tool_logos/vapi.webp'
        }
    ];

    const tools = [
        {
            name: 'Knowledge Tools',
            tools: knowledge_tools
        },
        {
            name: 'Media Assets Tools',
            tools: media_assets_tools
        },
        {
            name: 'AI Video Tools',
            tools: ai_video_tools
        },
        {
            name: 'Presentations and Slides Tools',
            tools: presentations_and_slides_tools
        },
        {
            name: 'Workflows and App Development Tools',
            tools: workflows_and_app_development_tools
        }
    ]
  </script>
  
  <section class="mx-auto horizontal-card flex flex-col gap-4 items-center justify-center mt-30 max-w-5xl mx-auto">
    <div class="flex flex-col text-center">
        <svelte:component this={Brain} class="mx-auto start-heading mb-5" />
        <h2 class="main-heading">AI Tools You'll Learn About</h2>
        <p class="subheading">
            25+ AI Tools in Action
        </p>

      </div>
  
      {#each tools as t, idx (idx)}
      <div class="mt-10">
        <div class="start-heading my-2 border-b-[1px] border-gray-100 p-2 mb-4 text-center dark:text-gray-100">{t.name}</div>

        <div class="mt-2 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-8 lg:grid-cols-6 justify-items-center">
            {#each t.tools as m, idx (idx)}
            <div class="flex items-center gap-3">
                <!-- Avatar (replaces shadcn Avatar/AvatarImage) -->

                <div>
                        <img
                        src={m.logo}
                        alt={`${m.name}`}
                        class="object-cover {m.height ? m.height : 'h-8'} w-auto"
                        loading="lazy"
                        decoding="async"
                        />
                <p class="mt-2 text-xs text-muted-foreground ">{m.name} - {m.description}</p>
                </div>
            </div>
            {/each}
        </div>
      </div>
    {/each}

  </section>
  