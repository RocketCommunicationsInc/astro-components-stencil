# rux-tree-node

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description             | Type      | Default |
| ---------- | ---------- | ----------------------- | --------- | ------- |
| `expanded` | `expanded` | Sets the expanded state | `boolean` | `false` |
| `selected` | `selected` | Sets the selected state | `boolean` | `false` |


## Events

| Event                 | Description                        | Type                  |
| --------------------- | ---------------------------------- | --------------------- |
| `ruxTreeNodeSelected` | Emit when user selects a tree node | `CustomEvent<string>` |


## Methods

### `setExpanded(value: boolean) => Promise<void>`

Sets the expanded state

#### Returns

Type: `Promise<void>`



### `setSelected(value: boolean) => Promise<void>`

Sets the selected state

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                            | Description                 |
| ------------------------------- | --------------------------- |
| `--tree-accent-color`           | tree accent color           |
| `--tree-expanded-border-color`  | tree expanded border color  |
| `--tree-hover-background-color` | tree hover background color |
| `--tree-hover-text-color`       | tree hover text color       |
| `--tree-selected-accent-color`  | tree selected accent color  |
| `--tree-selected-border-color`  | tree selected border color  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
