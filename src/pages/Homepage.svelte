<script>
  import Button from "../components/Button.svelte";
  import CommandPalette from "../components/CommandPalette.svelte";
  import { fly } from "svelte/transition";
  import { theme } from "../stores/themeStore";
  import { COLORS, THEMES } from "../stores/utils/constants";

  let isCommandPaletteActive = false;

  const hideCommandPalette = () => (isCommandPaletteActive = false);

  const handleKeys = (event) => {
    if (event.ctrlKey && event.code === "Space") {
      isCommandPaletteActive = !isCommandPaletteActive;
    }
    if (event.code === "Enter" || event.code === "Escape") hideCommandPalette();
  };
</script>

<svelte:window on:keydown={handleKeys} />

<div>
  {#if isCommandPaletteActive}
    <div transition:fly={{ duration: 100, y: -200 }}>
      <CommandPalette on:suggestionHandled={hideCommandPalette} />
    </div>
  {/if}
  <Button on:updateStage onClickEventName="updateStage" title="Start Typing" />
  <section
    style="color: {$theme === THEMES.DARK ? COLORS.WHITE : COLORS.BLACK};"
  >
    <span>Ctrl</span>
    +
    <span>Space</span>
  </section>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  div div {
    position: absolute;
    top: 10%;
  }
  section {
    position: absolute;
    bottom: 10%;
  }
  span {
    background-color: var(--med-orange);
    padding: 2px 5px;
    border-radius: 5px;
    font-size: var(--small-font);
  }
</style>
