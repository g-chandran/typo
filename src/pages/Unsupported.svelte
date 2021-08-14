<script lang="ts">
  import type { OS } from "../types/mainTypes";

  export let os: OS;
</script>

<div class="container">
  <img src="./assets/svgs/working.svg" alt="g-chandran working hard" />
  <h3>Oh.Oh</h3>
  <p>
    <a href="https://github.com/g-chandran/typo" target="blank">g-chandran</a>
    is sweating his blood & <code>code</code> to get Typo to work on {os}. Why
    don't you try playing on a Desktop until he finishes?
  </p>
</div>

<style>
  img {
    width: 250px;
    height: 250px;
  }
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
    padding: 40px;
  }

  code {
    padding: 0px 5px;
    background-color: gray;
    color: white;
    border-radius: 3px;
  }

  a {
    color: var(--orange);
  }
</style>
