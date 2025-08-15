<script>
	import Bot from "$lib/components/bot.svelte";
</script>

    <div class="flex justify-center relative">
        <video
          class="w-[90%] md:w-[60%] rounded-xl shadow-[inset_0_0_50px_rgba(0,0,0,1)] "
          autoplay
          muted
          loop
          playsinline
          poster="/deepcraft_vid_placeholder.jpg"
        >
          <source src="/deepcraft_vid_3.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <Bot />
      </div>
