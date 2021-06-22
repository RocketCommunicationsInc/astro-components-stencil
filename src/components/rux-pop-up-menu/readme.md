# rux-pop-up-menu



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description                                                                                                                                   | Type          | Default     |
| ----------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------- |
| `anchorEl`  | --        | Element to anchor the menu to. If none is given the menu will anchor to the trigger element where aria-controls === menu id                   | `HTMLElement` | `undefined` |
| `open`      | `open`    | Boolean which controls when to show the menu                                                                                                  | `boolean`     | `false`     |
| `triggerEl` | --        | Optional element to trigger opening and closing of the menu. If none is supplied the element where aria-controls === menu id will be assigned | `HTMLElement` | `undefined` |


## Events

| Event           | Description                             | Type                |
| --------------- | --------------------------------------- | ------------------- |
| `menuDidClose`  | Emitted when the menu is closed.        | `CustomEvent<void>` |
| `menuDidOpen`   | Emitted when the menu is open.          | `CustomEvent<void>` |
| `menuWillClose` | Emitted when the menu is about to close | `CustomEvent<void>` |
| `menuWillOpen`  | Emitted when the menu is about to open. | `CustomEvent<void>` |


## Methods

### `close() => Promise<boolean>`

Closes the menu. If the menu is already closed it returns 'false'.

#### Returns

Type: `Promise<boolean>`



### `isOpen() => Promise<boolean>`

Returns 'true' if the menu is open

#### Returns

Type: `Promise<boolean>`



### `show() => Promise<boolean>`

Opens the menu. If the menu is already open it returns 'false'.

#### Returns

Type: `Promise<boolean>`



### `toggle() => Promise<boolean>`

Toggles the menu open or close. Will return 'true' on menu open and 'false' on menu close

#### Returns

Type: `Promise<boolean>`




## CSS Custom Properties

| Name                             | Description                             |
| -------------------------------- | --------------------------------------- |
| `--caretLeft`                    | Position of Caret                       |
| `--caretSize`                    | Size of Caret                           |
| `--menuBackgroundColor`          | Pop Up Menu Backround Color             |
| `--menuBorderColor`              | Pop Up Menu Border Color                |
| `--menuItemBackgroundColor`      | Pop Up Menu Item Background Color       |
| `--menuItemHoverBackgroundColor` | Pop Up Menu Item Hover Background Color |
| `--menuItemHoverTextColor`       | Pop Up Menu Item Hover Text Color       |
| `--menuTextColor`                | Pop Up Menu Text Color                  |
| `--transitionSpeed`              | Transition Time of Pop Up Animation     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
