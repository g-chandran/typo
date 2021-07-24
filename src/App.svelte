<script>
  import TypeProgress from "./pages/TypeProgress.svelte";
  import Result from "./pages/Result.svelte";
  import { STAGES } from "./stores/utils/constants";
  import { slide } from "svelte/transition";
  import { loadImages } from "./stores/collections/imageCollection";
  import { onMount } from "svelte";
  import Homepage from "./pages/Homepage.svelte";
  import { theme } from "./stores/masterStore";
  import { THEMES, THEME_COLORS } from "./stores/utils/constants";

  let { START, PROGRESS, END } = STAGES;
  let currentStage = START;

  const updateStage = (event) => {
    if (event.detail.position) {
      if (currentStage === PROGRESS) currentStage = START;
    } else {
      if (currentStage === START) currentStage = PROGRESS;
      else if (currentStage === PROGRESS) currentStage = END;
      else if (currentStage === END) currentStage = START;
    }
  };

  onMount(loadImages);
</script>

<main
  style="background-color: {$theme === THEMES.DARK
    ? THEME_COLORS.DARK_1
    : THEME_COLORS.LIGHT_1};"
>
  {#if currentStage === PROGRESS}
    <div transition:slide={{ duration: 200 }}>
      <TypeProgress on:updateStage={updateStage} />
    </div>
  {:else if currentStage === END}
    <div transition:slide={{ duration: 200 }}>
      <Result on:updateStage={updateStage} />
    </div>
  {:else}
    <div transition:slide={{ duration: 200 }}>
      <Homepage on:updateStage={updateStage} />
    </div>
  {/if}
</main>

<style>
  :global(*),
  :global(body) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Courier New", Courier, monospace;
  }

  :global(:root) {
    --orange: #ff3e00;
    --med-orange: #ff40009f;
    --dark-1: #28293d;
    --dark-2: #555770;
    --dark-3: #8f90a6;
    --light-1: #fafafc;
    --light-2: #f2f2f5;
    --light-3: #ebebf0;

    --big-font: 2.5rem;
    --med-font: 2rem;
    --med-font-2: 1.5rem;
    --small-font: 1rem;
  }
  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
  }
</style>
