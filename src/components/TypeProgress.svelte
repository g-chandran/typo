<script>
  import Button from "./Button.svelte";
</script>

<div class="container">
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
