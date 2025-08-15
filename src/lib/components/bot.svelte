<script>
    // You can add interactive functionality here if needed
    import { Motion } from "svelte-motion";
</script>

<Motion
animate={{
  y: [0, 10, 20, 10, 0]
}}
transition={{ duration: 4, ease: "linear", repeat: Infinity }}
let:motion
>

<div class="bot-animation" use:motion>
    <img src="/neon-bot.png" alt="bot" class="bot-image w-[200px] h-[200px] transform scale-x-[-1]" />
</div>

</Motion>