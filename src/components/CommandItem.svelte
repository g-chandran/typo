<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { Colors } from "../types/masterEnums";

  export let commandName: string = "";
  export let commandCategory: string = "";
  export let isActive: boolean = false;
  export let textColor: string = "";

  const dispatch = createEventDispatcher();
</script>

<div
  class="command"
  on:click={() => dispatch("handleClick", {})}
  style="background-color: {isActive ? Colors.orangeColor : ''};"
>
  <p style="color: {textColor};">{commandName}</p>
  <span>{commandCategory}</span>
</div>

<style>
  .command {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2px 5px;
    height: 23px;
    font-size: var(--small-font);
  }

  .command:hover {
    background-color: var(--med-orange);
  }

  span {
    background-color: #e8f0f2;
    font-size: calc(var(--small-font) - 2px);
    border: 0.5px solid black;
    padding: 0.5px 2px;
    border-radius: 2px;
    text-transform: lowercase;
  }
</style>
