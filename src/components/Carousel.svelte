<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import WordTile from "./WordTile.svelte";
  import { flip } from "svelte/animate";
  import {
    THREE_LETTER_WORDS,
    FIVE_LETTER_WORDS,
    SEVEN_LETTER_WORDS,
  } from "../stores/collections/wordCollection";
  import {
    COLORS,
    THEMES,
    WORD_SET_THRESHOLD,
  } from "../stores/utils/constants.js";
  import { theme } from "../stores/masterStore";

  const dispatch = createEventDispatcher();

  const CAPACITY =
    THREE_LETTER_WORDS.length +
    FIVE_LETTER_WORDS.length +
    SEVEN_LETTER_WORDS.length;

  let wordSet = new Set();
  let wordList = new Array();
  const STORES = {
    0: THREE_LETTER_WORDS,
    1: FIVE_LETTER_WORDS,
    2: SEVEN_LETTER_WORDS,
  };

  let maxValues = WORD_SET_THRESHOLD;
  let index = 0;
  const WORDS_COLOR = $theme === THEMES.LIGHT ? COLORS.BLACK : COLORS.GRAY;

  onMount(() => updatePipeline());

  const update = async () => {
    if (index > wordSet.size - WORD_SET_THRESHOLD) {
      maxValues += WORD_SET_THRESHOLD;
      updatePipeline();
    }
    if (index < CAPACITY) index += 1;
    dispatch("updateScore");
  };

  const updatePipeline = () => {
    while (wordSet.size < maxValues && wordSet.size < CAPACITY) {
      const randomStore =
        STORES[Math.floor(Math.random() * Object.keys(STORES).length)];
      const randomValue =
        randomStore[Math.floor(Math.random() * randomStore.length)];
      wordSet.add(randomValue);
    }
    if (wordSet.size < CAPACITY) {
      wordList = [...wordSet];
    }
  };
</script>

<div class="container">
  {#each wordList.slice(index, index + 3) as word, ind (word)}
    <div animate:flip={{ duration: 200 }}>
      {#if ind === 1}
        <div style="text-align: center;">
          <WordTile on:moveNext={update} bind:word />
        </div>
      {:else}
        <p style="color: {WORDS_COLOR};" class={`word${ind}`}>{word}</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    overflow: hidden;
    width: 30rem;
  }

  p {
    font-size: var(--med-font-2);
  }

  .word0 {
    text-align: left;
  }

  .word2 {
    text-align: right;
  }

  @media only screen and (max-width: 480px) {
    p {
      font-size: var(--small-font);
    }

    .container {
      width: 20rem;
    }
  }
</style>
