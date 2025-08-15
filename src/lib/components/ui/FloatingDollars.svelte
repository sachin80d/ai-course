<script lang="ts">
    import { onMount } from "svelte";
    export let density = 50; // Number of dollar symbols based on screen size
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
            density = 30;
        }
    }
    console.log(density);
    export let speed = 15; // Floating speed (lower is faster)
    export let blur = 2; // Blur effect strength
  
    let container: HTMLDivElement;
  
    function createDollarSymbol() {
      const dollar = document.createElement("div");
      const symbols = ['$', '₹', '%', '∑', '∞', '∫', '∂'];
      dollar.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      dollar.className = "dollar-symbol";
  
      // Random size and position
      const size = Math.random() * 30 + 10 + "px";
      dollar.style.fontSize = size;
      dollar.style.position = "absolute";
      dollar.style.left = Math.random() * 100 + "%";
      dollar.style.top = Math.random() * 100 + "%";
      dollar.style.opacity = Math.random().toString();
      dollar.style.animationDuration = (Math.random() * speed + 5) + "s"; 
      dollar.style.animationDelay = Math.random() + "s";
      dollar.style.filter = `blur(${blur}px)`;
      dollar.style.transform = `rotate(${Math.random() * 360}deg)`;
      // Add random initial rotation
      const initialRotation = Math.random() * 360;
      dollar.style.transform = `rotate(${initialRotation}deg)`;
  
      return dollar;
    }
  
    onMount(() => {
      for (let i = 0; i < density; i++) {
        const dollar = createDollarSymbol();
        container.appendChild(dollar);
      }
    });
  </script>
  

  
  <div class="floating-dollars" bind:this={container}>
    <slot></slot>
  </div>

  <style>
    .floating-dollars {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
  
    :global(.dollar-symbol) {
  color: rgba(0, 255, 0, 0.6);
  font-weight: bold;
  position: absolute;
  animation: floatAnimation linear infinite;
}
  
    @keyframes floatAnimation {
      0% {
        transform: translateY(5vh) translateX(20px) rotate(360deg);
        opacity: 1;
      }
      50% {
        transform: translateY(0vh) translateX(0px) rotate(180deg);
        opacity: 0.5;
      }
      100% {
        transform: translateY(-5vh) translateX(-20px) rotate(0deg);
        opacity: 0;
      }
    }
  </style>