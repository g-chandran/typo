<script lang="ts">
  import Button from "../components/Button.svelte";
  import CommandPalette from "../components/CommandPalette.svelte";
  import { fly } from "svelte/transition";
  import {
    isCommandPaletteActive,
    showMenubar,
    theme,
    timer,
    wordsLength,
  } from "../stores/masterStore";
  import type { OS } from "../types/mainTypes";
  import { Colors } from "../types/masterEnums";
  import Menubar from "../components/Menubar.svelte";
  import { onMount } from "svelte";
  import { getTimerDuration, getWordsLength } from "../stores/utils/properties";

  export let os: OS;

  const modifierKey: string = os === "MacOS" ? "Option" : "Ctrl";

  $: color = $theme === "dark" ? Colors.white : Colors.black;

  onMount(() => {
    timer.set(getTimerDuration());
    wordsLength.set(getWordsLength());
  });

  /* 
  Toggles the state of the Command Palette by default, also uses an optional argument to update it
  */
  const updateCommandPalette = (updateTo: boolean = null): void => {
    isCommandPaletteActive.set(
      updateTo === null ? !$isCommandPaletteActive : updateTo
    );
  };

  /* 
  Handles the KeyEvents of the Component.
  */
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
  {#if $isCommandPaletteActive}
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
  <section style="color: {color};">
    <span>{modifierKey}</span>
    +
    <span>Space</span>
  </section>
  {#if $showMenubar}
    <section class="menubar">
      <Menubar {color} />
    </section>
  {/if}
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
  .menubar {
    bottom: 0%;
  }
</style>
