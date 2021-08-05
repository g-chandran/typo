<script>
  import Button from "../components/Button.svelte";
  import CommandPalette from "../components/CommandPalette.svelte";
  import { fly } from "svelte/transition";
  import { theme } from "../stores/masterStore";
  import { COLORS, THEMES } from "../stores/utils/constants";

  export let os;

  const modifierKey = os === "MacOS" ? "Option" : "Ctrl";

  let isCommandPaletteActive = false;

  const hideCommandPalette = () => (isCommandPaletteActive = false);
  const updateCommandPalette = (updateTo = null) => {
    if (updateTo === null) isCommandPaletteActive = !isCommandPaletteActive;
    else if (typeof updateTo === typeof true) {
      isCommandPaletteActive = updateTo;
    }
  };

  const handleKeys = (event) => {
    const toggleCommandPalette =
      ((os === "MacOS" && event.altKey) ||
        (os === "Windows" && event.ctrlKey)) &&
      event.code === "Space";
    if (toggleCommandPalette) {
      event.preventDefault();
      updateCommandPalette();
    }
    if (event.code === "Enter" || event.code === "Escape")
      updateCommandPalette(false);
  };
</script>

<svelte:window on:keydown={handleKeys} />

<div>
  {#if isCommandPaletteActive}
    <div transition:fly={{ duration: 100, y: -200 }}>
      <CommandPalette on:suggestionHandled={hideCommandPalette} />
    </div>
  {/if}
  <Button
    name="Type. Typo. Type."
    on:updateStage
    onClickEventName="updateStage"
    title="Start Typing"
  />
  <section
    style="color: {$theme === THEMES.DARK ? COLORS.WHITE : COLORS.BLACK};"
  >
    <span>{modifierKey}</span>
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
