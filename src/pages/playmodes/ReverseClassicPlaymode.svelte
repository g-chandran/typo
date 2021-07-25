<script>
  import Button from "../../components/Button.svelte";
  import Carousel from "../../components/Carousel.svelte";
  import { onMount, onDestroy } from "svelte";
  import { THEME_COLORS } from "../../stores/utils/constants";
</script>

<div class="container">
  <Carousel />
  <div>
    <Button
      name="Score"
      backgroundColor={THEME_COLORS.LIGHT_3}
      onClickEventName="updateStage"
      onClickEventProps={{ position: true }}
      bold={true}
      on:updateStage
      title="Score | Go Back"
    />
    <Button
      name="Timer"
      backgroundColor={THEME_COLORS.LIGHT_3}
      onClickEventName="updateStage"
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
