<script>
  import Button from "./Button.svelte";
  import Carousel from "./Carousel.svelte";
</script>

<div class="container">
  <Carousel />
  <div>
    <Button
      name="0"
      color="#ff3e00"
      backgroundColor="#fff"
      back={true}
      on:updateStage
      title="Score | Go Back"
    />
    <Button on:updateStage name="60" title="Timer | Cancel" />
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
