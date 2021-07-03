<script>
  import { createEventDispatcher } from "svelte";
  import { BUTTON_COLORS, THEMES, COLORS } from "../stores/utils/constants.js";
  const { ORANGE, THEME } = BUTTON_COLORS;
  const { LIGHT, DARK } = THEMES;
  const { ORANGE_COLOR, WHITE, BLACK } = COLORS;

  export let title = "";
  export let name = "60 Seconds-Infinite Words";
  export let theme = LIGHT;
  export let button = ORANGE;
  export let onClickEventName = "customClick";
  export let onClickEventProps = {};

  const buttonTypes = {
    [ORANGE]: {
      backgroundColor: ORANGE_COLOR,
      color: theme === LIGHT ? WHITE : BLACK,
    },
    [THEME]: {
      backgroundColor: theme === LIGHT ? WHITE : BLACK,
      color: ORANGE_COLOR,
    },
  };

  const currentButton =
    button === ORANGE ? buttonTypes[ORANGE] : buttonTypes[THEME];

  let dispatch = createEventDispatcher();

  const clickEvent = () => {
    dispatch(onClickEventName, onClickEventProps);
  };
</script>

<button
  on:click={clickEvent}
  {title}
  style="color: {currentButton.color}; background-color: {currentButton.backgroundColor}"
>
  {name}
</button>

<style>
  button {
    font-size: var(--big-font);
    border: none;
    padding: 0.75rem 1.5rem;
    min-width: 12rem;
    box-shadow: 0px 0px 2px gray;
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
