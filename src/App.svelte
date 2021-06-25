<script>
  import Button from "./components/Button.svelte";
  import TypeProgress from "./components/TypeProgress.svelte";
  import Result from "./components/Result.svelte";
  import { STAGES } from "./stores/utils/constants";

  let { START, PROGRESS, END } = STAGES;
  // const stages = { start: Button, progress: TypeProgress };
  let currentStage = PROGRESS;

  const updateStage = (event) => {
    console.log(event.detail.position);
    if (event.detail.position) {
      if (currentStage === PROGRESS) currentStage = START;
    } else {
      if (currentStage === START) currentStage = PROGRESS;
      else if (currentStage === PROGRESS) currentStage = END;
      else if (currentStage == END) currentStage = START;
    }
  };
</script>

<main>
  <!-- <svelte:component this={stages[currentStage]} /> -->
  {#if currentStage === PROGRESS}
    <TypeProgress on:updateStage={updateStage} />
  {:else if currentStage === END}
    <Result on:updateStage={updateStage} />
  {:else}
    <Button on:updateStage={updateStage} title="Start Typing" />
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
