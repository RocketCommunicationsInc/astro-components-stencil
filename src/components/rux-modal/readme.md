# rux-modal

A Dialog Box interrupts the app experience to prompt a user to confirm an action or acknowledge a piece of information. It displays information along with a set of buttons allowing users to “Accept or Cancel” the actions presented within the Dialog Box.

## Guidelines

-   [Astro UXDS: Dialog Box](https://astrouxds.com/ui-components/dialog-box)

## Web Components Usage

### 1. Installation

#### Download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Dialog Box Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxModal } from '@astrouxds/rux-modal/rux-modal.js'
```

### 3. Render the Astro Dialog Box Web Component

At a minimum, Astro UXDS Dialog Box requires a message. In this instance, a single button labeled "Cancel" will be automatically rendered.

```xml
<rux-modal message="This is a message"></rux-modal>
```

Pass properties as attributes of the Astro Dialog Box custom element:

```xml
<rux-modal
  title="Modal title"
  message="Modal message"
  confirmText="Ok"
  denyText="Cancel"
  customEvent="listen-for-me">
</rux-modal>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                  | Type      | Default     |
| -------------- | --------------- | ---------------------------- | --------- | ----------- |
| `confirmText`  | `confirm-text`  | Text for confirmation button | `string`  | `'Confirm'` |
| `denyText`     | `deny-text`     | Text for close button        | `string`  | `'Cancel'`  |
| `modalMessage` | `modal-message` | Modal body message           | `string`  | `''`        |
| `modalTitle`   | `modal-title`   | Modal header title           | `string`  | `''`        |
| `open`         | `open`          | Shows and hides modal        | `boolean` | `false`     |


## Events

| Event         | Description                           | Type                   |
| ------------- | ------------------------------------- | ---------------------- |
| `modalClosed` | Event that is fired when modal closes | `CustomEvent<boolean>` |


## CSS Custom Properties

| Name                     | Description            |
| ------------------------ | ---------------------- |
| `--modalBackgroundColor` | Modal background color |
| `--modalBorderColor`     | Modal border color     |
| `--modalTextColor`       | Modal text color       |
| `--modalTitleColor`      | Modal title color      |


## Dependencies

### Depends on

- [rux-button-group](../rux-button-group)
- [rux-button](../rux-button)

### Graph
```mermaid
graph TD;
  rux-modal --> rux-button-group
  rux-modal --> rux-button
  rux-button --> rux-icon
  style rux-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
