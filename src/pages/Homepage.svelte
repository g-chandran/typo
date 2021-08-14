<script lang="ts">
  import Button from "../components/Button.svelte";
  import CommandPalette from "../components/CommandPalette.svelte";
  import { fly } from "svelte/transition";
  import { theme } from "../stores/masterStore";
  import type { OS } from "../types/mainTypes";
  import { Colors } from "../types/masterEnums";

  export let os: OS;

  const modifierKey: string = os === "MacOS" ? "Option" : "Ctrl";

  let isCommandPaletteActive: boolean = false;

  const updateCommandPalette = (updateTo: boolean = null): void => {
    isCommandPaletteActive =
      updateTo === null ? !isCommandPaletteActive : updateTo;
  };

  const handleKeys = (event: KeyboardEvent): void => {
    const toggleCommandPalette: boolean =
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
      <CommandPalette
        on:suggestionHandled={() => updateCommandPalette(false)}
      />
    </div>
  {/if}
  <Button
    name="Type. Typo. Type."
    on:updateStage
    onClickEventName="updateStage"
    title="Start Typing"
  />
  <section style="color: {$theme === 'dark' ? Colors.white : Colors.black};">
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
