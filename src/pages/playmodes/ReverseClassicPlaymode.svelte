<script>
  import Button from "../../components/Button.svelte";
  import Carousel from "../../components/Carousel.svelte";
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { THEMES, THEME_COLORS } from "../../stores/utils/constants";
  import { score, theme, timer } from "../../stores/masterStore";
  import { getWordsLength } from "../../stores/utils/properties";

  const dispatch = createEventDispatcher();
  const WORDS_LENGTH = getWordsLength();

  let interval;

  const countup = () => {
    interval = setInterval(() => {
      if ($timer >= 500) {
        clearInterval(interval);
      } else timer.update((e) => (e += 1));
    }, 1000);
  };

  const updateScore = () => score.update((e) => (e -= 1));

  $: if ($score <= 0)
    dispatch("updateStage", {
      result: result_text,
    });

  $: result_text = `You scored ${
    WORDS_LENGTH - $score
  } words in ${$timer} seconds`;

  onMount(() => {
    score.set(WORDS_LENGTH);
    timer.set(0);
    countup();
  });

  onDestroy(() => clearInterval(interval));
</script>

<div class="container">
  <Carousel on:updateScore={updateScore} />
  <div>
    <Button
      bind:name={$score}
      backgroundColor={$theme === THEMES.DARK
        ? THEME_COLORS.DARK_3
        : THEME_COLORS.LIGHT_3}
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
