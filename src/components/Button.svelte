<script>
  import { createEventDispatcher } from "svelte";
  import { THEMES, COLORS } from "../stores/utils/constants.js";
  import { theme } from "../stores/themeStore";
  const { ORANGE_COLOR, WHITE, BLACK } = COLORS;

  export let title = "";
  export let name = "";
  export let onClickEventName = "customClick";
  export let onClickEventProps = {};
  export let backgroundColor = ORANGE_COLOR;
  export let bold = false;

  $: foregroundColor =
    backgroundColor === ORANGE_COLOR
      ? $theme === THEMES.LIGHT
        ? WHITE
        : BLACK
      : ORANGE_COLOR;

  let dispatch = createEventDispatcher();

  const clickEvent = () => {
    dispatch(onClickEventName, onClickEventProps);
  };
</script>

<button
  on:click={clickEvent}
  {title}
  style="color: {foregroundColor}; background-color: {backgroundColor}; font-weight: {bold
    ? 'bold'
    : ''};"
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
