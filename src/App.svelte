<script lang="ts">
  import TypeProgress from "./pages/TypeProgress.svelte";
  import Result from "./pages/Result.svelte";
  import { slide } from "svelte/transition";
  import { loadImages } from "./stores/collections/imageCollection";
  import { onMount } from "svelte";
  import Homepage from "./pages/Homepage.svelte";
  import { theme, aboutStore } from "./stores/masterStore";
  import About from "./pages/About.svelte";
  import Unsupported from "./pages/Unsupported.svelte";
  import type { Stages, OS, UpdateStage } from "../src/types/mainTypes";
  import { Constants, ThemeColors } from "./types/masterEnums";

  let currentStage: Stages = "start";

  let result_text: string = Constants.defaultResultText;

  $: currentStage = $aboutStore ? "about" : "start";

  /* 
  To update the current Page of the application to Homepage, TypeProgress, Result, About
  */
  const updateStage = (event: CustomEvent<UpdateStage>): void => {
    // TODO: The Optional should be changed after the updateStage CustomEvent is updated everywhere
    if (event.detail.position) {
      if (currentStage === "progress") currentStage = "start";
    } else {
      if (currentStage === "start") currentStage = "progress";
      else if (currentStage === "progress") currentStage = "end";
      else if (currentStage === "end") currentStage = "start";
    }
    if (event.detail.result && event.detail.result !== "")
      result_text = event.detail.result;
    else result_text = Constants.defaultResultText;
  };

  /* 
  Function to return the User's Operating System as a string
  */
  const getOS = (): OS => {
    const userAgent: string = window.navigator.userAgent;
    const platform: string = window.navigator.platform;
    const macosPlatforms: string[] = [
      "Macintosh",
      "MacIntel",
      "MacPPC",
      "Mac68K",
    ];
    const windowsPlatforms: string[] = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms: string[] = ["iPhone", "iPad", "iPod"];
    let os: OS = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "MacOS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    }
    return os;
  };

  let os: OS = getOS();
  onMount(() => {
    if (os !== "Android" && os !== "iOS") loadImages();
  });
</script>

<main
  style="background-color: {$theme === 'dark'
    ? ThemeColors.dark1
    : ThemeColors.light1};"
>
  {#if os === "Android" || os === "iOS"}
    <Unsupported {os} />
  {:else if currentStage === "progress"}
    <div transition:slide={{ duration: 200 }}>
      <TypeProgress on:updateStage={updateStage} />
    </div>
  {:else if currentStage === "end"}
    <div transition:slide={{ duration: 200 }}>
      <Result {result_text} on:updateStage={updateStage} />
    </div>
  {:else if currentStage === "about"}
    <div transition:slide={{ duration: 200 }}>
      <About />
    </div>
  {:else}
    <div transition:slide={{ duration: 200 }}>
      <Homepage {os} on:updateStage={updateStage} />
    </div>
  {/if}
</main>

<style>
  :global(*),
  :global(body) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Courier New", Courier, monospace;
  }

  :global(:root) {
    --orange: #ff3e00;
    --med-orange: #f86f42;
    --dark-1: #28293d;
    --dark-2: #555770;
    --dark-3: #8f90a6;
    --light-1: #fafafc;
    --light-2: #f2f2f5;
    --light-3: #ebebf0;

    --big-font: 2.5rem;
    --med-font: 2rem;
    --med-font-2: 1.5rem;
    --small-font: 1rem;
  }
  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
  }
</style>
