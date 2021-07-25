<script>
  import { playmode } from "../stores/masterStore";
  import { PLAYMODES } from "../stores/utils/constants";
  import ClassicPlaymode from "./playmodes/ClassicPlaymode.svelte";
  import ReverseClassicPlaymode from "./playmodes/ReverseClassicPlaymode.svelte";

  const playmodes = {
    [PLAYMODES.CLASSIC]: ClassicPlaymode,
    [PLAYMODES.REVERSE_CLASSIC]: ReverseClassicPlaymode,
  };
</script>

<svelte:component this={playmodes[$playmode]} on:updateStage />
