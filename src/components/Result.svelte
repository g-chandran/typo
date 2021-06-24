<script>
  import Button from "./Button.svelte";
  export let score = 1;
  export let duration = 0;
</script>

<div class="container">
  <img src="./assets/svgs/svg1.svg" alt="Sorry" />
  <p>
    You scored {score}
    {#if score === 1}word{:else}words{/if} in {duration} seconds
  </p>
  <Button
    color="#ff3e00"
    title="Start again"
    name="Typo"
    backgroundColor="#fff"
    on:updateStage
  />
</div>

<style>
  img {
    width: 15rem;
    height: 15rem;
    margin-bottom: 2rem;
  }

  .container {
    border: 15px solid var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 40rem;
    width: 70rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: var(--med-font);
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
