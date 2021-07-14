<script>
  export let word = "typo";
  import { COLORS, STATUS, THEMES } from "../stores/utils/constants.js";
  import { createEventDispatcher } from "svelte";
  import { theme } from "../stores/themeStore.js";

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

  const updateStatus = (index, status) => {
    wordObject[index].status = status;
    if (status == UNWRITTEN)
      wordObject[index].letter_color =
        $theme == THEMES.DARK ? COLORS.BLACK : "gray";
    else if (status == CORRECT)
      wordObject[index].letter_color =
        $theme == THEMES.DARK ? "gray" : COLORS.BLACK;
    else if (status == INCORRECT)
      wordObject[index].letter_color = COLORS.ORANGE_COLOR;
  };

  const handleKeyPress = (event) => {
    let key = event.key;
    const BACKSPACE_VALIDATION = key === "Backspace" && index > 0;
    const KEY_VALIDATION = key.length === 1 && index < wordObject.length;

    if (BACKSPACE_VALIDATION) {
      index -= 1;
      updateStatus(index, UNWRITTEN);
    } else if (KEY_VALIDATION && key.match(/./)) {
      if (wordObject[index].letter === key) updateStatus(index, CORRECT);
      else updateStatus(index, INCORRECT);
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
        letter_color: $theme == THEMES.DARK ? COLORS.BLACK : "gray",
      };
    index = 0;
  }

  $: if (index === word.length && iterateValidation()) {
    index = 0;
    dispatch("moveNext");
  }

  const textColorFinder = (node, status) => {
    if (status === STATUS.CORRECT) node.style.color = "black";
    if (status === STATUS.INCORRECT) node.style.color = "yellow";
    if (status === STATUS.UNWRITTEN) node.style.color = "gray";

    function keyEvent(event) {
      node.dispatchEvent(
        new CustomEvent("customKeyPressed", { detail: { status } })
      );
    }

    window.addEventListener("keydown", keyEvent);

    return {
      destroy() {
        node.removeEventListener("keydown", keyEvent);
      },
    };
  };

  const textColorMaker = (letter) => {
    status = letter.detail.status;
    if (status === UNWRITTEN && $theme === THEMES.LIGHT)
      console.log(letter.value, "gray");
    else if (status === UNWRITTEN && $theme === THEMES.DARK)
      console.log(letter.value, "black");
    else if (status === CORRECT && $theme === THEMES.LIGHT)
      console.log(letter.value, "black");
    else if (status === CORRECT && $theme === THEMES.DARK)
      console.log(letter.value, "gray");
  };
</script>

<svelte:window on:keydown={handleKeyPress} />

<div>
  {#each wordObject as { status, letter, letter_color }}
    <span class={status} style="color: {letter_color};">{letter}</span>
  {/each}
</div>

<style>
  span {
    font-size: var(--big-font);
    font-weight: bold;
  }
  /* .unWritten {
    color: gray;
  }
  .correct {
    color: black;
  } */
  .incorrect {
    color: var(--orange);
  }

  @media only screen and (max-width: 480px) {
    span {
      font-size: var(--med-font);
    }
  }
</style>
