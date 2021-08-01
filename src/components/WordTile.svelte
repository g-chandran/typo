<script>
  import { COLORS, STATUS, THEMES } from "../stores/utils/constants.js";
  import { createEventDispatcher } from "svelte";
  import { theme } from "../stores/masterStore";

  export let word = "typo";
  export let lastWord = false;

  const { UNWRITTEN, CORRECT, INCORRECT } = STATUS;
  const dispatch = createEventDispatcher();

  let index;
  let wordObject;

  const iterateValidation = () => {
    for (const obj of wordObject) {
      if (obj.status !== CORRECT) return false;
    }
    return true;
  };

  const updateStatus = (index, status, bgColor = "") => {
    wordObject[index].status = status;
    wordObject[index].background_color = bgColor;
    if (status == UNWRITTEN)
      wordObject[index].letter_color =
        $theme == THEMES.DARK ? COLORS.BLACK : COLORS.GRAY;
    else if (status == CORRECT)
      wordObject[index].letter_color =
        $theme == THEMES.DARK ? COLORS.GRAY : COLORS.BLACK;
    else if (status == INCORRECT)
      wordObject[index].letter_color = COLORS.ORANGE_COLOR;
  };

  const handleKeyPress = (event) => {
    if (lastWord) return;
    let key = event.key;
    const BACKSPACE_VALIDATION = key === "Backspace" && index > 0;
    const KEY_VALIDATION = key.length === 1 && index < wordObject.length;

    if (BACKSPACE_VALIDATION) {
      index -= 1;
      updateStatus(index, UNWRITTEN);
    } else if (KEY_VALIDATION && key.match(/./)) {
      if (wordObject[index].letter === key) updateStatus(index, CORRECT);
      else {
        if (wordObject[index].letter === " " && key !== " ")
          updateStatus(index, INCORRECT, COLORS.ORANGE_COLOR);
        else updateStatus(index, INCORRECT);
      }
      index += 1;
    }
  };

  $: {
    word.split("");
    wordObject = new Array(word.length);
    for (let i = 0; i < word.length; i++)
      wordObject[i] = {
        status: UNWRITTEN,
        letter: word[i],
        letter_color: $theme == THEMES.DARK ? COLORS.BLACK : COLORS.GRAY,
      };
    index = 0;
  }

  $: if (index === word.length && iterateValidation()) {
    index = 0;
    dispatch("moveNext");
  }
</script>

<svelte:window on:keydown={handleKeyPress} />

<div>
  {#each wordObject as { status, letter, letter_color, background_color }}
    <span
      class={status}
      style="color: {letter_color}; background-color: {background_color};"
      >{letter}</span
    >
  {/each}
</div>

<style>
  span {
    font-size: var(--big-font);
    font-weight: bold;
  }

  @media only screen and (max-width: 480px) {
    span {
      font-size: var(--med-font);
    }
  }
</style>
