<script>
  import InputLabel from './InputLabel.svelte';

  /**
   * Input label text
   *
   * @type {string}
   */
  export let label;

  export let toolTip;

  /**
   * Custom class value for the both the input and it's
   * label.
   *
   * @type {string}
   */
  export let styleClass = '';

  /**
   * Text that is displayed when the checkbox value is true.
   *
   * @type {string}
   */
  export let yesText = 'Enabled';

  /**
   * Text that is displayed when the checkbox value is
   * false.
   *
   * @type {string}
   */
  export let noText = 'Disabled';

  /**
   * Style that is applied to the indicator text when the
   * checkbox value is false.
   *
   * @type {string}
   */
  export let noStyle = 'color: #933030';

  /**
   * Style that is applied to the indicator text when the
   * checkbox value is true.
   *
   * @type {string}
   */
  export let yesStyle = 'color: #428056';

  /**
   * Current checkbox state
   *
   * @type {boolean}
   */
  export let checked = false;

</script>

<style>
  span {
    display:       flex;
    margin-bottom: 25px;
    align-items:   center;
  }

  span span {
    display:     inline-block;
    line-height: 1.4em;
    padding:     0;
    margin:      0;
    transition:  color 500ms ease;
  }
</style>

<InputLabel label="{label}" class="{styleClass}" title="{toolTip}">
  <span>
    <input type="checkbox" bind:checked={checked}/>
    <span
      style="{checked ? yesStyle : noStyle}">{checked ? yesText : noText}</span>
  </span>
</InputLabel>
