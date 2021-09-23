# Slider

A Slider allows users to choose from a range of continuous and discrete values. The Slider displays the range of possible values and the Slider’s indicator displays the current value.

## Guidelines

- [Astro UXDS: Slider](http://www.astrouxds.com/ui-components/slider)
- [MDN: HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Slider package via Command Line (Preferred Method)

```sh
npm i -save @astrouxds/rux-slider
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Slider Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSlider } from "@astrouxds/rux-slider/rux-slider.js";
```

### 3. Render the Astro Slider Web Component

Pass properties via attributes similar to the native [HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) attributes:

```xml
<rux-slider
  min="0"
  max="400"
  step="5"
  val="200"
  disabled
  >
</rux-slider>
```




<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                   | Type                  | Default                                   |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------- |
| `disabled` | `disabled` | Determines if the slider is disabled.                                                                                                                                                                         | `boolean`             | `false`                                   |
| `label`    | `label`    | The slider label text. For HTML content, use the `label` slot instead.                                                                                                                                        | `string \| undefined` | `undefined`                               |
| `max`      | `max`      | Max value of slider.                                                                                                                                                                                          | `number`              | `100`                                     |
| `min`      | `min`      | Min value of the slider.                                                                                                                                                                                      | `number`              | `0`                                       |
| `name`     | `name`     | Name of the Input Field for Form Submission                                                                                                                                                                   | `string`              | `''`                                      |
| `step`     | `step`     | Step amount of slider value.                                                                                                                                                                                  | `number`              | `1`                                       |
| `value`    | `value`    | Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/input_type_range>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) | `number`              | `(this.max! - this.min!) / 2 + this.min!` |


## Events

| Event       | Description                                                                                                                                     | Type               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `rux-blur`  | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)            | `CustomEvent<any>` |
| `rux-input` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) | `CustomEvent<any>` |


## Slots

| Slot      | Description      |
| --------- | ---------------- |
| `"label"` | The slider label |


## Shadow Parts

| Part           | Description                              |
| -------------- | ---------------------------------------- |
| `"form-field"` | The form-field wrapper container         |
| `"label"`      | The input label when `label` prop is set |


## CSS Custom Properties

| Name                                       | Description                                                 |
| ------------------------------------------ | ----------------------------------------------------------- |
| `--slider-hover-thumb-background-color`    | Background color of the slider's thumb in a hover state.    |
| `--slider-hover-thumb-border-color`        | Border color of the slider's thumb in a hover state.        |
| `--slider-selected-thumb-border-color`     | Border color of the slider's thumb in a selected state.     |
| `--slider-selected-track-background-color` | Background color of the slider's thumb in a selected state. |
| `--slider-thumb-background-color`          | Background color of the slider's thumb.                     |
| `--slider-thumb-border-color`              | Border color of the slider's thumb.                         |
| `--slider-thumb-border-size`               | Size of slider's thumb border.                              |
| `--slider-thumb-size`                      | Size of the slider's thumb, both width and height.          |
| `--slider-top`                             | Determines the top value of the slider thumb.               |
| `--slider-track-background-color`          | Background color of the slider's track.                     |
| `--slider-track-before-thumb-height`       | the slider track before thumb height                        |
| `--slider-track-height`                    | the slider track height                                     |
| `--slider-value-percent`                   | The current value of the slider in a percent.               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
