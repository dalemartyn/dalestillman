<script>
  let regular = 425;
  let bold = 650;
  let width = 100;

  function updateStyles() {
    document.documentElement.style = `
      --font-weight-regular: ${regular};
      --font-weight-bold: ${bold};
      font-variation-settings: "wdth" ${width};`;
  }
</script>


<label class="ts-label u-display-block u-margin-bottom-tiny">
	<input type="range" min="400" max="450" bind:value={regular} on:input={updateStyles} class="u-margin-right-tiny">
	Body Weight {regular}
</label>

<label class="ts-label u-display-block u-margin-bottom-tiny">
	<input type="range" min="600" max="700" bind:value={bold} on:input={updateStyles} class="u-margin-right-tiny">
	Heading Weight {bold}
</label>

<label class="ts-label u-display-block u-margin-bottom-tiny">
	<input type="range" min="95" max="100" step="0.1" bind:value={width} on:input={updateStyles} class="u-margin-right-tiny">
	Width {width.toFixed(1)}
</label>

<style>
input {
  vertical-align: middle;
}
</style>
