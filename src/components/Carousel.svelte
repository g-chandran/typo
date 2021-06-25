<script>
  import { onMount } from "svelte";
  import WordTile from "./WordTile.svelte";
  import {
    THREE_LETTER_WORDS,
    FIVE_LETTER_WORDS,
    SEVEN_LETTER_WORDS,
  } from "../stores/wordStore.js";
  import { WORD_SET_THRESHOLD } from "../stores/utils/constants.js";

  const CAPACITY =
    THREE_LETTER_WORDS.length +
    FIVE_LETTER_WORDS.length +
    SEVEN_LETTER_WORDS.length;
  console.log(CAPACITY);

  let wordSet = new Set();
  let wordList = new Array();
  const STORES = {
    0: THREE_LETTER_WORDS,
    1: FIVE_LETTER_WORDS,
    2: SEVEN_LETTER_WORDS,
  };

  let maxValues = WORD_SET_THRESHOLD;
  let index = 0;

  onMount(() => updatePipeline());

  const update = async () => {
    if (index > wordSet.size - WORD_SET_THRESHOLD) {
      maxValues += WORD_SET_THRESHOLD;
      updatePipeline();
    }
    if (index < CAPACITY) index += 1;
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

<div>
  {#each wordList.slice(index, index + 3) as word, ind}
    {#if ind === 1}
      <WordTile on:moveNext={update} bind:word />
    {:else}
      <span>{word}</span>
    {/if}
  {:else}
    <span>You drained my battery, refresh me charge again</span>
  {/each}
</div>
