# rux-switch



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                 | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Checks the button via HTML `checked` attribute. Button takes on a distinct "enabled" or "selected" visual state.                                                                            | `boolean` | `false`     |
| `disabled` | `disabled` | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. | `boolean` | `false`     |
| `name`     | `name`     | The name of the form input element                                                                                                                                                          | `string`  | `undefined` |


## Events

| Event        | Description                                  | Type                             |
| ------------ | -------------------------------------------- | -------------------------------- |
| `rux-change` | Emitted when the value property has changed. | `CustomEvent<SwitchChangeEvent>` |


## CSS Custom Properties

| Name                       | Description                   |
| -------------------------- | ----------------------------- |
| `--switchDisabledOffColor` | the Switch disabled off color |
| `--switchDisabledOnColor`  | the Switch disabled on color  |
| `--switchHoverOffColor`    | the Switch hover off color    |
| `--switchHoverOnColor`     | the Switch hover on color     |
| `--switchOffColor`         | the Switch off color          |
| `--switchOnColor`          | the Switch on color           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
