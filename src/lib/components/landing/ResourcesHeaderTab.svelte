<script>
    const sections = [
      {
        title: 'EXPLORE',
        items: ['Blog', 'Prompt Library', 'Guides', 'Product Videos'],
      },
      {
        title: 'ENGAGE',
        items: ['Webinars', 'Newsroom', 'Events', 'Community'],
      },
      {
        title: 'SUPPORT & SERVICES',
        items: ['Help center', 'Developers', 'Partners'],
      },
    ];
  </script>
  
  <div class="header-tab-expanded flex flex-col md:flex-row">
    <!-- Left Side -->
    <div class="flex-1 p-8 flex flex-col md:flex-row gap-12">
      {#each sections as section}
        <div class="min-w-[180px]">
          <h3 class="text-lg font-semibold text-gray-500 mb-4">{section.title}</h3>
          <ul class="space-y-3 text-[16px] font-normal">
            {#each section.items as item}
              <li><a href="#" class="hover:underline">{item}</a></li>
            {/each}
          </ul>
        </div>
      {/each}
  
      <!-- CTA Button -->
      <div class="w-full md:w-[320px] mt-6 md:mt-auto">
        <a
          href="#"
          class="inline-flex items-center justify-between w-full rounded-xl bg-gradient-to-r from-cyan-100 to-lime-100 px-6 py-4 font-semibold text-black text-[18px]"
        >
          Resource Center
          <span class="text-xl">→</span>
        </a>
      </div>
    </div>
  
    <!-- Right Side -->
    <div class="bg-lime-100 p-10 flex flex-col items-center justify-center w-full md:w-[360px]">
      <a href="#">
        <img
          src="/Agentic-AI.webp"
          alt="Whitepaper"
          class="w-[140px] md:w-[180px] mb-4"
        />
      </a>
      <a href="#" class="text-lg font-semibold text-black hover:underline inline-flex items-center gap-1">
        Read the whitepaper →
      </a>
    </div>
  </div>
  