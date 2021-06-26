<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { timer } from "../stores/timerStore.js";
  export let color = "#fff";
  export let title = "";
  export let name = "60 Seconds-Infinite Words";
  export let backgroundColor = "#ff3e00";
  export let back = false;

  let dispatch = createEventDispatcher();

  $: if ($timer <= 0 && !back) {
    updateStage();
  }

  const updateStage = () => {
    dispatch("updateStage", {
      position: back,
    });
  };
</script>

<button
  on:click={updateStage}
  {title}
  transition:slide={{ duration: 100 }}
  style="color: {color}; background-color: {backgroundColor}"
>
  {name}
</button>

<style>
  button {
    font-size: var(--big-font);
    border: none;
    padding: 0.75rem 1.5rem;
    min-width: 12rem;
    box-shadow: 0px 0px 2px gray;
  }

  @media only screen and (max-width: 768px) {
    button {
      font-size: var(--small-font);
      min-width: 6rem;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    button {
      font-size: var(--med-font);
      min-width: 10rem;
    }
  }
</style>
