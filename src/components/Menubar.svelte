<script lang="ts">
  import { menus } from "../stores/utils/menus";
  import { Colors } from "../types/masterEnums";
  import MenuItem from "./MenuItem.svelte";

  export let color: string = Colors.black;
</script>

<section class="menubar" style="color: {color};">
  <div class="left">
    {#each menus as menu (menu.category)}
      {#if menu.position === "left"}
        <MenuItem
          onClick={menu.callee}
          name={menu.value}
          prefix={menu.prefix}
          suffix={menu.suffix}
          title={menu.category}
        />
      {/if}
    {/each}
  </div>
  <div class="right">
    {#each menus as menu (menu.category)}
      {#if menu.position === "right"}
        <MenuItem
          onClick={menu.callee}
          name={menu.value}
          prefix={menu.prefix}
          suffix={menu.suffix}
          title={menu.category}
        />
      {/if}
    {/each}
  </div>
</section>

<style>
  .menubar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--orange);
    width: 100vw;
    font-size: var(--small-font);
  }
</style>
