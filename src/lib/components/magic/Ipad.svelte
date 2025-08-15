<script>
    // You can add interactive functionality here if needed
    import { Motion } from "svelte-motion";
    import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
  </script>
  
  <style>
    .ipad {
      width: 500px;
      height: 350px;
      padding: 10px;
      background: black;
      border-radius: 40px;
      position: relative;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #a1a1a1; /* Dull white silver border */
      max-width: 500px;
    }
  
    .screen {
      width: 460px;
      height: 260px;
      padding: 20px;
      background: black;
      border-radius: 30px;
      box-shadow: inset 0px 2px 5px rgba(255, 255, 255, 0.1);
    }
  
    .notch {
      width: 40px;
      height: 10px;
      background: black;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
    }
  </style>
  
  <div class="ipad overflow-hidden">
    <BorderBeam class="blur-[1px]" duration={3} colorFrom="white" colorTo="grey"/>

    <slot>here</slot>
    <div class="screen"></div>
    <div class="notch"></div>
  </div>
  