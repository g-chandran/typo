<script lang="ts">
  import Button from "../../components/Button.svelte";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import Carousel from "../../components/Carousel.svelte";
  import { getTimerDuration } from "../../stores/utils/properties";
  import { theme, timer, score } from "../../stores/masterStore";
  import type { Units } from "../../types/mainTypes";
  import { ThemeColors } from "../../types/masterEnums";

  const updateScore = (): void => {
    score.update((e) => (e += 1));
  };

  const dispatch = createEventDispatcher();
  const TIMER_DURATION: Units = getTimerDuration();

  let interval: NodeJS.Timeout;

  const countdown = (): void => {
    interval = setInterval(() => {
      if ($timer <= 0) {
        clearInterval(interval);
      } else timer.update((e) => (e -= 1));
    }, 1000);
  };

  onMount(() => {
    timer.set(TIMER_DURATION);
    score.set(0);
    countdown();
  });

  $: if ($timer <= 0)
    dispatch("updateStage", {
      result: result_text,
    });

  $: result_text = `You scored ${$score} words in ${
    TIMER_DURATION - $timer
  } seconds`;

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
      title="Score | Go Back"
    />
    <Button
      bind:name={$timer}
      onClickEventName="updateStage"
      onClickEventProps={{
        result: result_text,
      }}
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
