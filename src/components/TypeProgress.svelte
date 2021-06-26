<script>
  import Button from "./Button.svelte";
  import { onMount, onDestroy } from "svelte";
  import Carousel from "./Carousel.svelte";
  import { score } from "../stores/scoreStore";
  import { timer } from "../stores/timerStore";
  import { TIMER_DURATION } from "../stores/utils/constants.js";

  const updateScore = () => {
    score.update((e) => (e += 1));
  };

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
    countdown();
    score.set(0);
  });

  onDestroy(() => clearInterval(interval));
</script>

<div class="container">
  <Carousel on:updateScore={updateScore} />
  <div>
    <Button
      bind:name={$score}
      color="#ff3e00"
      backgroundColor="#fff"
      back={true}
      on:updateStage
      title="Score | Go Back"
    />
    <Button on:updateStage bind:name={$timer} title="Timer | Cancel" />
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
