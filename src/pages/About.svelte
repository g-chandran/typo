<script>
  import WordTile from "../components/WordTile.svelte";
  import Button from "../components/Button.svelte";
  import { ABOUT_INFO, THEMES, THEME_COLORS } from "../stores/utils/constants";
  import { theme } from "../stores/masterStore";
  const { CONTENT, TITLE } = ABOUT_INFO;

  const wordList = CONTENT.toLowerCase().split(":");

  $: index = 0;

  const updateWord = () => {
    if (index < wordList.length - 1) {
      index += 1;
    }
  };
</script>

<div class="container">
  <p>{TITLE}</p>
  <WordTile word={wordList[index]} on:moveNext={updateWord} />
  <Button
    title="View the content in a reable way"
    name="Show full"
    backgroundColor={$theme === THEMES.DARK
      ? THEME_COLORS.DARK_3
      : THEME_COLORS.LIGHT_3}
  />
  <Button
    title="View the original source code of the application on Github"
    name="Show source"
    backgroundColor={$theme === THEMES.DARK
      ? THEME_COLORS.DARK_3
      : THEME_COLORS.LIGHT_3}
  />
  <Button
    title="Go to homepage"
    name="Go home"
    onClickEventName="updateStage"
    onClickEventProps={{ position: true }}
    on:updateStage
  />
</div>
