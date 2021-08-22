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
    padding: 0 5px;
    text-transform: capitalize;
    font-size: var(--small-font);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .menu:hover {
    background-color: var(--med-orange);
  }
</style>
