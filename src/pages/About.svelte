<script>
  import WordTile from "../components/WordTile.svelte";
  import Button from "../components/Button.svelte";
  import {
    ABOUT_INFO,
    THEMES,
    THEME_COLORS,
    COLORS,
  } from "../stores/utils/constants";
  import { aboutStore, theme } from "../stores/masterStore";
  const { CONTENT, TITLE } = ABOUT_INFO;

  const wordList = CONTENT.toLowerCase().split(":");

  let lastWord = false;
  const WORDS_COLOR = $theme === THEMES.LIGHT ? COLORS.BLACK : COLORS.GRAY;

  $: index = 0;

  const updateWord = () => {
    const arrayIndexValidation = index < wordList.length - 1;
    if (!arrayIndexValidation) lastWord = true;
    if (arrayIndexValidation) {
      index += 1;
    }
  };
</script>

<div class="container">
  <p style="color: {WORDS_COLOR};">{TITLE}</p>
  <WordTile word={wordList[index]} on:moveNext={updateWord} {lastWord} />
  <section class="actions">
    <Button
      title="View the original source code of the application on Github"
      name="Source"
      backgroundColor={$theme === THEMES.DARK
        ? THEME_COLORS.DARK_3
        : THEME_COLORS.LIGHT_3}
      onClickEventName="launchGithub"
      on:launchGithub={() =>
        window.open("https://github.com/g-chandran/typo/", "blank")}
    />
    <Button
      title="Go to homepage"
      name="Home"
      onClickEventName="setStage"
      on:setStage={() => aboutStore.set(false)}
    />
  </section>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
  }
  p {
    text-align: center;
    font-weight: bold;
    font-size: var(--med-font-2);
  }
</style>
