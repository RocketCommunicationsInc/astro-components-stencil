# rux-slider



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                               | Type                   | Default |
| ---------- | ---------- | ----------------------------------------- | ---------------------- | ------- |
| `disabled` | `disabled` | Determines the if the slider is disabled. | `boolean \| undefined` | `false` |
| `max`      | `max`      | Max value of slider.                      | `number \| undefined`  | `100`   |
| `min`      | `min`      | Min value of the slider.                  | `number \| undefined`  | `0`     |
| `step`     | `step`     | Step amount of slider value.              | `number \| undefined`  | `1`     |
| `val`      | `val`      | Current value of the slider.              | `number \| undefined`  | `50`    |


## Events

| Event       | Description                                                                                                                                     | Type               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `rux-input` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) | `CustomEvent<any>` |


## CSS Custom Properties

| Name                                   | Description                                                 |
| -------------------------------------- | ----------------------------------------------------------- |
| `--sliderHoverThumbBackgroundColor`    | Background color of the slider's thumb in a hover state.    |
| `--sliderHoverThumbBorderColor`        | Border color of the slider's thumb in a hover state.        |
| `--sliderSelectedThumbBackgroundColor` | Background color of the slider's thumb in a selected state. |
| `--sliderSelectedThumbBorderColor`     | Border color of the slider's thumb in a selected state.     |
| `--sliderThumbBackgroundColor`         | Background color of the slider's thumb.                     |
| `--sliderThumbBorderColor`             | Border color of the slider's thumb.                         |
| `--sliderThumbBorderSize`              | Size of slider's thumb border.                              |
| `--sliderThumbSize`                    | Size of the slider's thumb, both width and height.          |
| `--sliderTrackBackgroundColor`         | Background color of the slider's track.                     |
| `--sliderTrackCursor`                  | The type of cursor for the slider's track.                  |
| `--value`                              | The current value of the slider.                            |
| `--valuePercent`                       | The current value of the slider in a percent.               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
