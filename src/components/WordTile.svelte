<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { theme } from "../stores/masterStore";
  import type { Status } from "../types/mainTypes";
  import { Colors } from "../types/masterEnums";

  export let word: string = "typo";
  export let lastWord: boolean = false;

  const dispatch = createEventDispatcher();

  interface wordObjectInterface {
    letter: string;
    status: Status;
    letter_color: Colors;
    background_color?: Colors | "";
  }

  let index: number;
  let wordObject: wordObjectInterface[];

  const iterateValidation = (): boolean => {
    for (const obj of wordObject) {
      if (obj.status !== "correct") return false;
    }
    return true;
  };

  const updateStatus = (
    index: number,
    status: Status,
    bgColor: Colors | "" = ""
  ): void => {
    wordObject[index].status = status;
    wordObject[index].background_color = bgColor;
    if (status == "unwritten")
      wordObject[index].letter_color =
        $theme == "dark" ? Colors.black : Colors.gray;
    else if (status === "correct")
      wordObject[index].letter_color =
        $theme == "dark" ? Colors.gray : Colors.black;
    else if (status === "incorrect")
      wordObject[index].letter_color = Colors.orangeColor;
  };

  const handleKeyPress = (event: KeyboardEvent): void => {
    if (lastWord) return;
    let key: string = event.key;
    const BACKSPACE_VALIDATION: boolean = key === "Backspace" && index > 0;
    const KEY_VALIDATION: boolean =
      key.length === 1 && index < wordObject.length;

    if (BACKSPACE_VALIDATION) {
      index -= 1;
      updateStatus(index, "unwritten");
    } else if (KEY_VALIDATION && key.match(/./)) {
      if (wordObject[index].letter === key) updateStatus(index, "correct");
      else {
        if (wordObject[index].letter === " " && key !== " ")
          updateStatus(index, "incorrect", Colors.orangeColor);
        else updateStatus(index, "incorrect");
      }
      index += 1;
    }
  };

  $: {
    word.split("");
    wordObject = new Array(word.length);
    for (let i = 0; i < word.length; i++)
      wordObject[i] = {
        status: "unwritten",
        letter: word[i],
        letter_color: $theme == "dark" ? Colors.black : Colors.gray,
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
