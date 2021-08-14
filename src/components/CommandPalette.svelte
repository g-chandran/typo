<script lang="ts">
  import { theme } from "../stores/masterStore";
  import { createEventDispatcher } from "svelte";
  import { Colors, ThemeColors } from "../types/masterEnums";
  import {
    CommandFilters,
    MiscCommands,
    PlaymodeCommands,
    SettingCommands,
    ThemeCommands,
  } from "../stores/utils/commands";
  import type { CommandInterface } from "../stores/utils/commands";

  const focusInput = (node: HTMLInputElement) => node.focus();
  const dispatch = createEventDispatcher();

  let currentIndex: number = 0;
  let suggestions: CommandInterface[] = [];
  let filters: CommandInterface[][] = [
    ThemeCommands,
    PlaymodeCommands,
    SettingCommands,
    MiscCommands,
  ];
  let command: string = "";

  /* 
    Reactive block for updating field filters
  */
  $: {
    if (command[0] === CommandFilters.themeFilter) filters = [ThemeCommands];
    else if (command[0] === CommandFilters.playmodeFilter)
      filters = [PlaymodeCommands];
    else if (command[0] === CommandFilters.settingsFilter)
      filters = [SettingCommands];
    else
      filters = [
        ThemeCommands,
        PlaymodeCommands,
        SettingCommands,
        MiscCommands,
      ];
    updateSuggestions();
  }

  /* 
  Updates the Suggestions Array based on filters
  */
  const updateSuggestions = (): void => {
    suggestions = [];
    currentIndex = 0;
    if (command.length > 0)
      for (const filter_ of filters) {
        suggestions.push(...filter_.filter(inputValidator));
      }
  };

  /* 
  Checks whether command is a substring of any filter
  */
  const inputValidator = (value: CommandInterface): boolean => {
    let comparison: string =
      filters.length > 1 ? command : command.slice(1, command.length);
    return value.name.toLowerCase().includes(comparison.toLowerCase());
  };

  /* 
  Handler for all the key events occurring in the Component
  */
  const handleKeyPress = (event: KeyboardEvent): void => {
    const key: string = event.key;
    if (key === "Enter") {
      if (suggestions[currentIndex]) suggestions[currentIndex].callee();
      dispatch("suggestionHandled");
    } else if (key === "ArrowDown") {
      currentIndex = Math.abs((currentIndex + 1) % suggestions.length);
    } else if (key === "ArrowUp") {
      if (currentIndex <= 0) {
        currentIndex = suggestions.length - 1;
      } else currentIndex -= 1;
    }
  };

  /* 
  on:Click event for suggestions
  */
  const handleClick = (index: number): void => {
    currentIndex = index;
    suggestions[currentIndex].callee();
    dispatch("suggestionHandled");
  };

  let backgroundColor: ThemeColors;
  let foregroundColor: ThemeColors;

  $: {
    backgroundColor =
      $theme === "dark" ? ThemeColors.dark2 : ThemeColors.light2;
    foregroundColor =
      $theme === "dark" ? ThemeColors.light2 : ThemeColors.dark2;
  }
</script>

<svelte:window on:keydown={handleKeyPress} />

<div class="command-palette" style="background-color: {backgroundColor};">
  <section class="search-bar">
    <i class="material-icons">search</i>
    <input
      bind:value={command}
      use:focusInput
      type="text"
      placeholder="just typo it"
      style="background-color: {backgroundColor};"
    />
  </section>
  <hr />
  <div class="results">
    {#each suggestions as suggestion, index}
      <p
        class:selected={currentIndex === index}
        on:click={() => handleClick(index)}
        style="color: {$theme === 'dark' ? Colors.white : Colors.black};"
      >
        {suggestion.name}
      </p>
    {:else}
      <em style="color: {foregroundColor};"
        >{command.length > 0
          ? "No matching commands"
          : ">: theme, #: playmode, @: settings"}</em
      >
    {/each}
  </div>
</div>

<style>
  .command-palette {
    width: 45rem;
    border: 1px solid var(--orange);
    box-shadow: 0 0 15px -5px var(--orange);
    background-color: white;
  }

  i {
    font-size: var(--med-font);
    margin: 0 10px;
    opacity: 0.5;
  }

  .search-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  input[type="text"] {
    height: 2.3rem;
    color: black;
    font-size: var(--med-font-2);
    border: none;
    outline: none;
    width: 100%;
  }

  .results {
    padding: 5px 10px;
  }

  .results p {
    padding: 2px 5px;
    height: 23px;
    font-size: var(--small-font);
  }

  .results p:hover {
    background-color: var(--med-orange);
  }
  .selected {
    background-color: var(--orange);
  }

  @media only screen and (max-width: 768px) {
    .command-palette {
      width: 25rem;
    }

    input[type="text"] {
      font-size: var(--small-font);
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .command-palette {
      width: 35rem;
    }
  }
</style>
