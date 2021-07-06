<script>
  import Button from "../components/Button.svelte";
  import { onMount, onDestroy } from "svelte";
  import Carousel from "../components/Carousel.svelte";
  import { score } from "../stores/scoreStore";
  import { timer } from "../stores/timerStore";
  import { TIMER_DURATION } from "../stores/utils/constants.js";
  import { createEventDispatcher } from "svelte";

  const updateScore = () => {
    score.update((e) => (e += 1));
  };

  const dispatch = createEventDispatcher();

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
      button="white"
      onClickEventName="updateStage"
      onClickEventProps={{ position: true }}
      on:updateStage
      title="Score | Go Back"
    />
    <Button
      bind:name={$timer}
      button="orange"
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
