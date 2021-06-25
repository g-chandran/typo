<script>
  export let word = "typo";
  import { STATUS } from "../stores/utils/constants.js";
  import { createEventDispatcher } from "svelte";

  const { UNWRITTEN, CORRECT, INCORRECT } = STATUS;
  const dispatch = createEventDispatcher();

  // let index = 0;
  // let wordObject = new Array(word.length);
  // for (let i = 0; i < word.length; i++)
  //   wordObject[i] = { status: UNWRITTEN, letter: word[i] };

  let index;
  let wordObject;

  const iterateValidation = () => {
    for (const obj of wordObject) {
      if (obj.status !== CORRECT) return false;
    }
    return true;
  };

  const handleKeyPress = (event) => {
    let key = event.key;
    const BACKSPACE_VALIDATION = key === "Backspace" && index > 0;
    const KEY_VALIDATION = key.length === 1 && index < wordObject.length;

    if (BACKSPACE_VALIDATION) {
      index -= 1;
      wordObject[index].status = UNWRITTEN;
    } else if (KEY_VALIDATION && key.match(/./)) {
      if (wordObject[index].letter === key) wordObject[index].status = CORRECT;
      else wordObject[index].status = INCORRECT;
      index += 1;
    }
  };

  $: {
    word.split("");
    wordObject = new Array(word.length);
    for (let i = 0; i < word.length; i++)
      wordObject[i] = { status: UNWRITTEN, letter: word[i] };
    index = 0;
  }

  $: if (index === word.length && iterateValidation()) {
    index = 0;
    dispatch("moveNext");
  }
</script>

<svelte:window on:keydown={handleKeyPress} />

<div>
  {#each wordObject as { status, letter }}
    <span class={status}>{letter}</span>
  {/each}
</div>

<style>
  span {
    font-size: var(--big-font);
    font-weight: bold;
  }
  .unWritten {
    color: gray;
  }
  .correct {
    color: var(--black);
  }
  .incorrect {
    color: var(--orange);
  }
</style>
