<script>
    // You can add interactive functionality here if needed
    import ShineBorder from "$lib/components/magic/ShineBorder.svelte";
    import { Motion } from "svelte-motion";
    import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';

  </script>
  
  <style>
    .iphone {
      width: 300px;
      height: 500px;
      background: black;
      border-radius: 40px;
      position: relative;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #4c4c4c; /* Dull white silver border */
    }

    .iphone .internal {
        margin: 1px;
        border: 20px solid black;
        background-color: rgb(19, 19, 19);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 40px;
    }
  
    .screen {
      width: 220px;
      display: flex;
      height: 450px;
      background: black;
      border-radius: 30px;
      box-shadow: inset 0px 2px 5px rgba(255, 255, 255, 0.1);
    }
  
    .notch {
      width: 100px;
      height: 20px;
      background: black;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 10px;
    }

    .search-bar {
        position: absolute;
        top: 40px;
        left: 0;
        right: 0;
        margin: 0 auto;
        /* transform: translateX(-50%); */
        width: 70%;
        height: 25px;
        border-radius: 20px;
        border: 1px solid #494949;
        display: flex;
        align-items: center;
    padding: 0 5px;
    color: rgb(87, 87, 87);
    font-size: 14px;
    background: black;
  }

  .search-bar input {
    flex-grow: 1;
    border: none;
    outline: none;
    background: transparent;
    color: rgb(151, 151, 151);
    font-size: 14px;
    padding-left: 2px;
  }

  .search-bar .icon {
    color: rgb(160, 160, 160);
  }

  .search-bar .back-button {
    position: relative;
    left: -40px;
    cursor: pointer;
  }

  .menu-button {
    position: relative;
    right: -25px;
    cursor: pointer;
  }
  </style>
  
  <Motion
  animate={{
    y: [0, 10, 20, 10, 0]
  }}
  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
  let:motion
>


<div class="iphone m-0 mx-auto" use:motion>
    <BorderBeam class="blur-[10px]" duration={5} colorFrom="white" colorTo="grey"/>

    <div class="internal">

        <div class="notch">        
        </div>
        <div class="search-bar">
            <span class="icon back-button">&#x2190;</span>
            <span class="icon"></span>
            <input type="text" class="text-[8px]" placeholder="Search ..." />
            <span class="icon menu-button">&#x22EE;</span>
        </div>
    </div>
    <slot>here</slot>

</div>
</Motion>   
