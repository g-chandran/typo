<script lang="ts">
  import Button from "../components/Button.svelte";
  import { quintInOut } from "svelte/easing";
  import { theme } from "../stores/masterStore";
  import { Colors, ThemeColors } from "../types/masterEnums";

  export let result_text: string = "";

  let svgSource: number = Math.floor(Math.random() * 5);
  let image: boolean = false;

  const loadSVG = (
    _node: HTMLImageElement,
    { duration = 200 }: { duration: number }
  ) => {
    return {
      duration,
      css: (t: number) => {
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
  <p style="color: {$theme === 'dark' ? Colors.white : Colors.black};">
    {result_text}
  </p>
  <Button
    title="Start again"
    name="Typo"
    backgroundColor={$theme === "dark" ? ThemeColors.dark3 : ThemeColors.light3}
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
