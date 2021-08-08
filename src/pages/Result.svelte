<script>
  import Button from "../components/Button.svelte";
  import { quintInOut } from "svelte/easing";
  import { COLORS, THEMES, THEME_COLORS } from "../stores/utils/constants";
  import { theme } from "../stores/masterStore";

  export let result_text = "";

  let svgSource = Math.floor(Math.random() * 5);
  let image = false;

  const loadSVG = (node, { duration = 200 }) => {
    return {
      duration,
      css: (t) => {
        const ease = quintInOut(t);
        return `
          transform: scale(${ease}) rotate(${ease * 1080}deg);
        `;
      },
    };
  };
</script>

<div class="container">
  <img
    on:load={() => {
      image = true;
    }}
    class:image
    transition:loadSVG={{ duration: 1200 }}
    src={`./assets/svgs/svg${svgSource}.svg`}
    alt="Sorry"
  />
  <p style="color: {$theme === THEMES.DARK ? COLORS.WHITE : COLORS.BLACK};">
    {result_text}
  </p>
  <Button
    title="Start again"
    name="Typo"
    backgroundColor={$theme === THEMES.DARK
      ? THEME_COLORS.DARK_3
      : THEME_COLORS.LIGHT_3}
    onClickEventName="updateStage"
    onClickEventProps={{ result: "You scored 0 words in 0 seconds" }}
    on:updateStage
  />
</div>

<style>
  .image {
    opacity: 1;
  }

  img {
    width: 15rem;
    height: 15rem;
    margin-bottom: 2rem;
    opacity: 0;
  }

  .container {
    border: 15px solid var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 5rem);
    width: calc(100vw - 10rem);
  }

  p {
    margin-bottom: 2rem;
    font-size: var(--med-font);
    font-weight: bold;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 480px) {
    .container {
      border: none;
      width: fit-content;
      height: fit-content;
    }

    p {
      font-size: var(--small-font);
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .container {
      border: 5px solid var(--orange);
      height: calc(100vh - 30px);
      width: calc(100vw - 30px);
    }

    p {
      font-size: var(--small-font);
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .container {
      border: 10px solid var(--orange);
      height: calc(100vh - 50px);
      width: calc(100vw - 50px);
    }
  }

  @media only screen and (min-width: 1200px) {
    .container {
      border: 15px solid var(--orange);
      height: 40rem;
      width: 70rem;
    }
  }
</style>
