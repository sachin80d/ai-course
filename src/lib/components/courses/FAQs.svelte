<script lang="ts">
    import { MessageCircleQuestion } from "lucide-svelte";

    type QA = { question: string; answer: string };
  
    const FAQ_QUESTIONS: QA[] = [
    {
        question: "Who Is This Masterclass For?",
        answer: `
        This masterclass is designed for <b>business leaders</b>, <b>entrepreneurs</b>, <b>managers</b>, and professionals in <b>HR</b>, <b>marketing</b>, <b>operations</b>, and <b>finance</b>. 
        It's ideal for anyone seeking to <b>integrate AI into their workflows</b>, <b>drive efficiency</b>, and <b>future-proof their organization</b>.
        `
    },
    {
        question: "What Will I Learn In The Masterclass?",
        answer: `
        You'll gain hands-on expertise in:
        <ul>
            <li><b>Generative AI</b> – LLMs, neural networks, and AI-driven prompts</li>
            <li><b>AI for Business</b> – Practical applications in HR, marketing, finance, and operations</li>
            <li><b>AI Voice Agents</b> – Building AI-driven sales and customer support solutions</li>
            <li><b>Interactive Chatbots</b> – Automating conversations with AI-powered bots</li>
            <li><b>Next-Gen Marketing</b> – AI-generated content and visual storytelling</li>
            <li><b>Process Automation</b> – Streamlining workflows with AI tools</li>
        </ul>
        `
    },
    {
        question: "How Is The Masterclass Structured?",
        answer: `
        The <b>two-day live event</b> (<b>23rd & 30th August (Saturdays)</b>) includes modules on <b>AI essentials</b>, <b>business use cases</b>, <b>tool-specific workshops</b> (e.g., voice agents, chatbots), 
        and <b>future trends</b> like agentic workflows. Days run from <b>10 AM to 6 PM</b> with <b>hands-on sessions</b>.
        `
    },
    {
        question: "What Resources Will I Receive?",
        answer: `
        Participants gain access to <b>session recordings</b> and <b>pre-read materials</b>.
        `
    },
    {
        question: "What Is The Duration Of The Masterclass?",
        answer: `
        The masterclass spans <b>two full days (8 hours daily)</b> with <b>interactive sessions</b>, <b>Q&A</b>, and <b>collaborative activities</b>.
        `
    },
    {
        question: "How Will This Masterclass Impact My Business Growth?",
        answer: `
        You'll learn to <b>streamline operations</b>, <b>reduce costs</b>, <b>enhance customer engagement</b>, and <b>scale efficiently using AI</b>—empowering teams to adopt <b>cutting-edge tools</b> for <b>competitive advantage</b>.
        `
    },
    {
        question: "Will I Have Access To Trainers For Guidance?",
        answer: `
        Yes! You can <b>engage directly with AI experts</b> during <b>live Q&A sessions</b> and receive <b>personalized feedback</b> on implementing AI in your business.
        `
    },
    {
        question: "What If I Miss A Session?",
        answer: `
        Don't worry! <b>Recorded sessions</b> will be provided so you can <b>revisit any content</b> you miss.
        `
    },
    {
        question: "Will I Get A Certificate?",
        answer: `
        Yes! Completing the masterclass earns you a <b>certificate from The Economic Times</b> validating your expertise in <b>AI-driven strategies</b>.
        `
    },
    {
        question: "Do I Need Technical AI Skills To Join?",
        answer: `
        <b>No prior expertise</b> is required. The masterclass <b>simplifies AI concepts</b> for <b>non-technical audiences</b>, focusing on <b>practical, no-code solutions</b> for <b>immediate implementation</b>.
        `
    }   
    ];
  </script>
  
  <section class="bg-background pt-32">
    <div class="container">
    <div class="flex flex-col items-center justify-center mb-10">
        <div class="start-heading"><svelte:component this={MessageCircleQuestion} class="mx-auto start-heading mb-5" /></div>
        <h2 class="main-heading">FAQs</h2>
    </div>
  
      <div class="border-border bg-background z-20 mx-auto max-w-2xl rounded-2xl border p-3">
        <div class="flex w-full flex-col items-center justify-center gap-3">
          {#each FAQ_QUESTIONS as item, idx (idx)}
            <details class="bg-muted m-0 w-full rounded-xl px-4 py-2 group">
              <summary class="flex cursor-pointer list-none select-none items-center justify-between text-left font-semibold transition-all hover:no-underline">
                <span>{item.question}</span>
                <!-- optional chevron -->
                <svg class="ml-3 h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </summary>
              <div class="my-4">
                {@html item.answer}
              </div>
            </details>
          {/each}
        </div>
      </div>
    </div>
  </section>
  