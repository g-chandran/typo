<script>
</script>

<main>
  <h2>Hello Chandran!</h2>
  <h3>Hello Chandran!</h3>
  <h4>Hello Chandran!</h4>
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
    --black: #0c0c0c;
    --white: #f0f0f0;
    --background-color: #f2f2f2;

    --big-font: 2.5rem;
    --med-font: 2rem;
    --small-font: 1rem;
  }

  h2,
  h3,
  h4 {
    color: var(--orange);
  }
  h2 {
    font-size: var(--small-font);
  }

  h3 {
    font-size: var(--med-font);
  }

  h4 {
    font-size: var(--big-font);
  }
</style>
