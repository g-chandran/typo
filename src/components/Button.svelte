<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { theme } from "../stores/masterStore";
  import { Colors } from "../types/masterEnums";

  export let title: string = "";
  export let name: string = "";
  export let onClickEventName: string = "customClick";
  export let onClickEventProps: object = {};
  export let backgroundColor: string = Colors.orangeColor;
  export let bold: boolean = false;

  $: foregroundColor =
    backgroundColor === Colors.orangeColor
      ? $theme === "dark"
        ? Colors.white
        : Colors.black
      : Colors.orangeColor;

  let dispatch = createEventDispatcher();

  /* 
  To dispatch the onClickEvent of the button
  */
  const clickEvent = (): void => {
    document.querySelector("button").blur();
    dispatch(onClickEventName, onClickEventProps);
  };
</script>

<button
  on:click={clickEvent}
  {title}
  style="color: {foregroundColor}; 
  background-color: {backgroundColor}; 
  font-weight: {bold ? 'bold' : ''};"
>
  {name}
</button>

<style>
  button {
    font-size: var(--big-font);
    border: none;
    padding: 0.75rem 1.5rem;
    min-width: 12rem;
    border-radius: 0;
  }

  @media only screen and (max-width: 768px) {
    button {
      font-size: var(--small-font);
      min-width: 6rem;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    button {
      font-size: var(--med-font);
      min-width: 10rem;
    }
  }
</style>
