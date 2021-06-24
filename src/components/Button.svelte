<script>
  export let color = "#fff";
  export let name = "60 Seconds, Infinite Words";
  export let backgroundColor = "#ff3e00";
  export let onClick = () => {};
</script>

<button
  on:click={onClick}
  style="color: {color}; background-color: {backgroundColor}"
>
  {name}
</button>

<style>
  button {
    font-size: var(--big-font);
    border: none;
    padding: 0.5rem 1.5rem;
    min-width: 12rem;
    box-shadow: 0px 0px 2px gray;
  }
</style>
