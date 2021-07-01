# rux-menu-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                               | Type                  | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` | Disables the item                                                                                                                                                                                                                                                                         | `boolean`             | `false`     |
| `download` | `download` | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string \| undefined` | `undefined` |
| `href`     | `href`     | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                                   | `string \| undefined` | `undefined` |
| `rel`      | `rel`      | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string \| undefined` | `undefined` |
| `target`   | `target`   | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                                       | `string \| undefined` | `undefined` |
| `value`    | `value`    | Value returned when item is selected. If no value is given, the text content will be used.                                                                                                                                                                                                | `any`                 | `undefined` |


## Events

| Event             | Description                                     | Type                  |
| ----------------- | ----------------------------------------------- | --------------------- |
| `menuItemClicked` | Emitted when item is clicked. Ex `{value : 10}` | `CustomEvent<object>` |


## Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `"start"` | before element text. Typically used for icons |


## CSS Custom Properties

| Name                             | Description                      |
| -------------------------------- | -------------------------------- |
| `--menuItemBackgroundColor`      | Menu Item Background Color       |
| `--menuItemHoverBackgroundColor` | Menu Item Hover Background Color |
| `--menuItemHoverTextColor`       | Menu Item Hover Text Color       |
| `--menuTextColor`                | Menu Text Color                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
