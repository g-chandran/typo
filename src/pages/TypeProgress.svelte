<script lang="ts">
  import type { SvelteComponent } from "svelte";

  import { playmode } from "../stores/masterStore";
  import type { Playmodes } from "../types/mainTypes";
  import ClassicPlaymode from "./playmodes/ClassicPlaymode.svelte";
  import ReverseClassicPlaymode from "./playmodes/ReverseClassicPlaymode.svelte";

  type AllPlaymodes = Record<Playmodes, typeof SvelteComponent>;

  const playmodes: AllPlaymodes = {
    Classic: ClassicPlaymode,
    "Reverse Classic": ReverseClassicPlaymode,
  };
</script>

<svelte:component this={playmodes[$playmode]} on:updateStage|once />
