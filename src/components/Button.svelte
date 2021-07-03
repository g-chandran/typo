<script>
  import { createEventDispatcher } from "svelte";
  export let title = "";
  export let name = "60 Seconds-Infinite Words";
  export let theme = "light";
  export let button = "orange";
  export let onClickEventName = "customClick";
  export let onClickEventProps = {};

  const buttonTypes = {
    orangeButton: {
      backgroundColor: "#ff3e00",
      color: theme === "light" ? "#fff" : "#000",
    },
    themeButton: {
      backgroundColor: theme === "light" ? "#fff" : "#000",
      color: "#ff3e00",
    },
  };

  const currentButton =
    button === "orange"
      ? buttonTypes["orangeButton"]
      : buttonTypes["themeButton"];

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
