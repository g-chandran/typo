<script>
  import Button from "./components/Button.svelte";
  import TypeProgress from "./components/TypeProgress.svelte";
  import { START, PROGRESS, END } from "./stores/utils/constants";

  const stages = { start: Button, progress: TypeProgress };
  let currentStage = START;
</script>

<main>
  <svelte:component this={stages[currentStage]} />
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
    --small-font: 1rem;
  }
  main {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
</style>
