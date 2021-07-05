<script>
  import Button from "./components/Button.svelte";
  import TypeProgress from "./components/TypeProgress.svelte";
  import Result from "./components/Result.svelte";
  import CommandPalette from "./components/CommandPalette.svelte";
  import { STAGES } from "./stores/utils/constants";
  import { slide } from "svelte/transition";
  import { loadImages } from "./stores/imageStore.js";
  import { onMount } from "svelte";

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

<main>
  <CommandPalette />
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
      <Button
        on:updateStage={updateStage}
        onClickEventName="updateStage"
        title="Start Typing"
      />
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
    --black: #0c0c0c;
    --white: #f0f0f0;
    --background-color: #f2f2f2;

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
