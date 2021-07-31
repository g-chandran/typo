<script>
  import { ABOUT_INFO } from "../stores/utils/constants";
  import WordTile from "../components/WordTile.svelte";
  import Button from "../components/Button.svelte";
  const { CONTENT, TITLE } = ABOUT_INFO;

  const wordList = CONTENT.split(":");

  $: index = 0;

  const updateWord = () => {
    index += 1;
  };
</script>

<div class="container">
  <p>{TITLE}</p>
  <WordTile word={wordList[index]} on:moveNext={updateWord} />
  <Button
    title="Go back"
    name="Go to home"
    onClickEventName="updateStage"
    onClickEventProps={{ position: true }}
    on:updateStage
  />
</div>
