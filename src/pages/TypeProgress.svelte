<script>
  import ClassicPlaymode from "./playmodes/ClassicPlaymode.svelte";
  import { playmode } from "../stores/masterStore";
  import { PLAYMODES } from "../stores/utils/constants";

  const playmodes = {
    [PLAYMODES.CLASSIC]: ClassicPlaymode,
  };
</script>

<svelte:component this={playmodes[$playmode]} on:updateStage />
