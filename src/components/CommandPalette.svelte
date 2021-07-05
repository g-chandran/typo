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

  $: if (command[0] === THEME_FILTER) filters = [THEME_COMMANDS];
  else if (command[0] === PLAYMODE_FILTER) filters = [PLAYMODE_COMMANDS];
  else if (command[0] === SETTINGS_FILTER) filters = [SETTINGS_COMMANDS];
  else filters = [THEME_COMMANDS, PLAYMODE_COMMANDS, SETTINGS_COMMANDS];

  $: console.log(filters);

  $: {
    if (command.length > 0) {
      suggestions = [];
      filters.forEach((element) => suggestions.push(...element));
    }
  }

  const inputFilter = (value) => {
    const regex = new RegExp(`command/i`);
    return regex.test(value.name);
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    if (key === "Enter") {
      suggestions[currentIndex].onSelect();
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
    suggestions[currentIndex].onSelect();
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
      placeholder="Type something"
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
      <em>>: theme, #: playmode, @: settings</em>
    {/each}
  </div>
</div>

<style>
  .command-palette {
    width: 45rem;
    border: 1px solid red;
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
  }

  .results p:hover {
    background-color: yellow;
  }
  .selected {
    background-color: green;
  }
</style>
