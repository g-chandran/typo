<script>
  import Button from "../components/Button.svelte";
  import { onMount, onDestroy } from "svelte";
  import Carousel from "../components/Carousel.svelte";
  import { score } from "../stores/scoreStore";
  import { timer } from "../stores/timerStore";
  import { getTimerDuration } from "../stores/utils/properties.js";
  import { createEventDispatcher } from "svelte";
  import { COLORS, THEMES } from "../stores/utils/constants";
  import { theme } from "../stores/themeStore";

  const updateScore = () => {
    score.update((e) => (e += 1));
  };

  const dispatch = createEventDispatcher();
  const TIMER_DURATION = getTimerDuration();

  let interval;

  const countdown = () => {
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

  $: if ($timer <= 0) dispatch("updateStage", {});

  onDestroy(() => clearInterval(interval));
</script>

<div class="container">
  <Carousel on:updateScore={updateScore} />
  <div>
    <Button
      bind:name={$score}
      backgroundColor={$theme === THEMES.DARK ? COLORS.BLACK : COLORS.WHITE}
      onClickEventName="updateStage"
      onClickEventProps={{ position: true }}
      on:updateStage
      title="Score | Go Back"
    />
    <Button
      bind:name={$timer}
      onClickEventName="updateStage"
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
