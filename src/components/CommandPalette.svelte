<script>
  import {
    THEME_COMMANDS,
    SETTINGS_COMMANDS,
    PLAYMODE_COMMANDS,
    COMMAND_FILTERS,
  } from "../stores/utils/commands.js";

  const { SETTINGS_FILTER, PLAYMODE_FILTER, THEME_FILTER } = COMMAND_FILTERS;
  const focusInput = (node) => node.focus();

  let currentIndex = 0;
  let suggestions = [];
  let filters = [THEME_COMMANDS, PLAYMODE_COMMANDS, SETTINGS_COMMANDS];
  let command = "";

  $: {
    if (command[0] === THEME_FILTER) filters = [THEME_COMMANDS];
    else if (command[0] === PLAYMODE_FILTER) filters = [PLAYMODE_COMMANDS];
    else if (command[0] === SETTINGS_FILTER) filters = [SETTINGS_COMMANDS];
    else filters = [THEME_COMMANDS, PLAYMODE_COMMANDS, SETTINGS_COMMANDS];
    updateSuggestions();
  }

  const updateSuggestions = () => {
    suggestions = [];
    currentIndex = 0;
    if (command.length > 0)
      for (const filter_ of filters) {
        suggestions.push(...filter_.filter(inputFilter));
      }
  };

  const inputFilter = (value) => {
    if (command.length <= 1 && ["?", "*", "+"].includes(command)) return false;
    let regex;
    if (filters.length > 1) regex = new RegExp(command, "i");
    else regex = new RegExp(command.slice(1, command.length), "i");
    return regex.test(value.name);
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    if (key === "Enter") {
      if (suggestions[currentIndex]) suggestions[currentIndex].callee();
    } else if (key === "ArrowDown") {
      currentIndex = Math.abs((currentIndex + 1) % suggestions.length);
    } else if (key === "ArrowUp") {
      if (currentIndex <= 0) {
        currentIndex = suggestions.length - 1;
      } else currentIndex -= 1;
    }
  };

  const handleClick = (index) => {
    currentIndex = index;
    suggestions[currentIndex].callee();
  };
</script>

<svelte:window on:keydown={handleKeyPress} />

<div class="command-palette">
  <section class="search-bar">
    <i class="material-icons">search</i>
    <input
      bind:value={command}
      use:focusInput
      type="text"
      placeholder="just typo it"
    />
  </section>
  <hr />
  <div class="results">
    {#each suggestions as suggestion, index}
      <p
        class:selected={currentIndex === index}
        on:click={() => handleClick(index)}
      >
        {suggestion.name}
      </p>
    {:else}
      {#if command.length > 0}
        <em>No matching commands</em>
      {:else}
        <em>>: theme, #: playmode, @: settings</em>
      {/if}
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
