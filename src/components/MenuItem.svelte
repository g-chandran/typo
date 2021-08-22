<script lang="ts">
  import type { Writable } from "svelte/store";

  export let name: Writable<string | number>;
  export let onClick: () => void = () => {};
  export let prefix: string;
  export let suffix: string;
</script>

<span class="menu" on:click={onClick}>
  {prefix || "" + $name + (suffix || "")}
</span>

<style>
  .menu {
    margin: 0 5px;
    text-transform: capitalize;
    font-size: var(--small-font);
  }
  .menu:hover {
    font-size: calc(var(--med-font-2) - 2px);
  }
</style>
