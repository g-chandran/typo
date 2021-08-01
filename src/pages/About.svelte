<script>
  import WordTile from "../components/WordTile.svelte";
  import Button from "../components/Button.svelte";
  import { ABOUT_INFO, THEMES, THEME_COLORS } from "../stores/utils/constants";
  import { theme } from "../stores/masterStore";
  const { CONTENT, TITLE } = ABOUT_INFO;

  const wordList = CONTENT.toLowerCase().split(":");

  let lastWord = false;

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
  <h2>{TITLE}</h2>
  <WordTile word={wordList[index]} on:moveNext={updateWord} {lastWord} />
  <section class="actions">
    <Button
      title="View the original source code of the application on Github"
      name="Show source"
      backgroundColor={$theme === THEMES.DARK
        ? THEME_COLORS.DARK_3
        : THEME_COLORS.LIGHT_3}
      onClickEventName="launchGithub"
      on:launchGithub={() =>
        window.open("https://github.com/g-chandran/typo/", "blank")}
    />
    <Button
      title="Go to homepage"
      name="Go home"
      onClickEventName="updateStage"
      onClickEventProps={{ position: true }}
      on:updateStage
    />
  </section>
</div>
