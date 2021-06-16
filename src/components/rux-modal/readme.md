# rux-modal



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `confirmText`  | `confirm-text`  |             | `string`  | `undefined` |
| `denyText`     | `deny-text`     |             | `string`  | `undefined` |
| `modalMessage` | `modal-message` |             | `string`  | `undefined` |
| `modalTitle`   | `modal-title`   |             | `string`  | `undefined` |
| `open`         | `open`          |             | `boolean` | `false`     |


## CSS Custom Properties

| Name                     | Description            |
| ------------------------ | ---------------------- |
| `--modalBackgroundColor` | Modal background color |
| `--modalBorderColor`     | Modal border color     |
| `--modalTextColor`       | Modal text color       |
| `--modalTitleColor`      | Modal title color      |


## Dependencies

### Depends on

- [rux-button](../rux-button)

### Graph
```mermaid
graph TD;
  rux-modal --> rux-button
  rux-button --> rux-icon
  style rux-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
