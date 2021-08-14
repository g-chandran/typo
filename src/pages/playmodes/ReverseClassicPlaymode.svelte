<script lang="ts">
  import Button from "../../components/Button.svelte";
  import Carousel from "../../components/Carousel.svelte";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { score, theme, timer } from "../../stores/masterStore";
  import { getWordsLength } from "../../stores/utils/properties";
  import { ThemeColors } from "../../types/masterEnums";
  import type { Units } from "../../types/mainTypes";

  const dispatch = createEventDispatcher();
  const WORDS_LENGTH: Units = getWordsLength();
  const MAX_DURATION: number = 999;

  let interval: NodeJS.Timeout;

  const countUp = () => {
    interval = setInterval(() => {
      if ($timer >= MAX_DURATION) {
        clearInterval(interval);
      } else timer.update((e) => (e += 1));
    }, 1000);
  };

  const updateScore = (): void => score.update((e) => (e -= 1));

  $: if ($score <= 0 || $timer >= MAX_DURATION)
    dispatch("updateStage", {
      result: result_text,
    });

  $: result_text = `You scored ${
    WORDS_LENGTH - $score
  } words in ${$timer} seconds`;

  onMount(() => {
    score.set(WORDS_LENGTH);
    timer.set(0);
    countUp();
  });

  onDestroy(() => clearInterval(interval));
</script>

<div class="container">
  <Carousel on:updateScore={updateScore} />
  <div>
    <Button
      bind:name={$score}
      backgroundColor={$theme === "dark"
        ? ThemeColors.dark3
        : ThemeColors.light3}
      onClickEventName="updateStage"
      onClickEventProps={{ position: true }}
      bold={true}
      on:updateStage
      title="Words Remaining | Go Back"
    />
    <Button
      bind:name={$timer}
      onClickEventName="updateStage"
      onClickEventProps={{ result: result_text }}
      bold={true}
      on:updateStage
      title="Timer | Cancel"
    />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
</style>
