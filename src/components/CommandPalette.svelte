<script>
  const focusInput = (node) => node.focus();
  let currentIndex = 0;
  const suggestions = [
    { name: "Theme: Dark", onSelect: () => console.log("Theme Dark") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    { name: "Theme: Light", onSelect: () => console.log("Theme Light") },
    {
      name: "Playmode: Classic",
      onSelect: () => console.log("Playmode classic"),
    },
  ];

  const handleKeyPress = (event) => {
    const key = event.key;
    if (key === "Enter") {
      console.log("Clicked Enter");
    } else if (key === "ArrowDown") {
      currentIndex = Math.abs((currentIndex + 1) % suggestions.length);
    } else if (key === "ArrowUp") {
      if (currentIndex <= 0) {
        currentIndex = suggestions.length - 1;
      } else currentIndex -= 1;
    }
    console.log(currentIndex);
  };
</script>

<svelte:window on:keydown={handleKeyPress} />

<div class="command-palette">
  <section class="search-bar">
    <i class="material-icons">search</i>
    <input use:focusInput type="text" placeholder="theme playmode settings" />
  </section>
  <hr />
  <section class="results">
    {#each suggestions as suggestion, index}
      <p class:selected={currentIndex === index} on:click={suggestion.onSelect}>
        {suggestion.name}
      </p>
    {/each}
  </section>
</div>

<style>
  .command-palette {
    width: 45rem;
    border: 1px solid red;
    background-color: white;
  }

  i {
    font-size: var(--med-font);
    margin-right: 10px;
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
    overflow-y: scroll;
    max-height: calc(5 * 24px);
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

  /* ::-webkit-scrollbar {
    width: 5px;
  } */
</style>
