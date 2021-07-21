# rux-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                 | Type                  | Default     |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `checked`       | `checked`       | The checkbox name                                                                                                                                                                           | `boolean`             | `false`     |
| `disabled`      | `disabled`      | Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`             | `false`     |
| `errorText`     | `error-text`    | The validation error text                                                                                                                                                                   | `string \| undefined` | `undefined` |
| `indeterminate` | `indeterminate` | Toggles indeterminate state of a checkbox                                                                                                                                                   | `boolean`             | `false`     |
| `name`          | `name`          | The checkbox name                                                                                                                                                                           | `string`              | `''`        |
| `required`      | `required`      | Sets the input as required                                                                                                                                                                  | `boolean`             | `false`     |
| `value`         | `value`         | The checkbox name                                                                                                                                                                           | `boolean \| null`     | `null`      |


## Events

| Event        | Description                                                                                                                                     | Type               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `rux-change` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) | `CustomEvent<any>` |


## CSS Custom Properties

| Name                                  | Description                    |
| ------------------------------------- | ------------------------------ |
| `--controlBorderColor`                | Checkbox border color          |
| `--controlHoverBorderColor`           | Checkbox border color on hover |
| `--controlLabelColor`                 | Label text color               |
| `--controlOutlineBackgroundColor`     | Checkbox background color      |
| `--controlSelectedOutlineBorderColor` | Selected checkbox border color |
| `--controlTextColor`                  | Selected checkbox icon color   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
