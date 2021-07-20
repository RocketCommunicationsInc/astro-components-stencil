# Select Menu

Select Menus allow users to select a value from a list of values.

## Guidelines

- [Astro UXDS: Select](https://www.astrouxds.com/ui-components/select)
- [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Web Components Usage

### 1. Render the Astro Select Menu Component

Pass properties as attributes of the Astro Select Menu custom element. Add native HTML form attributes like `disabled` or `required`:

```xml
<rux-select
    required
    label="Select an Option"
    input-id="my select"
    label-id="select label"
></rux-select>
```

### 2. Insert Options and/or Option Groups into the Select Menu

Select Menu renders a native `<select>` element and allows native `<option>` and `<optgroup>` elements to be inserted.

```xml
<rux-select label="Select an Option">
    <option value="" selected>Select an Option</option>
    <optgroup label="Group one">
        <option>Option 1.1</option>
        <option>Option 1.2</option>
        <option>Option 1.3</option>
        <option>Option 1.4</option>
    </optgroup>
    <optgroup label="Group two">
        <option>Option 2.1</option>
        <option>Option 2.2</option>
        <option>Option 2.3</option>
        <option>Option 2.4</option>
    </optgroup>
</rux-select>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                   | Type                  | Default     |
| ---------- | ---------- | ----------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` | Disables the item             | `boolean`             | `false`     |
| `inputId`  | `input-id` | Id for the Select Input       | `string \| undefined` | `undefined` |
| `label`    | `label`    | Sets the Label for the Select | `string \| undefined` | `undefined` |
| `labelId`  | `input-id` | Id for the Label              | `string \| undefined` | `undefined` |
| `required` | `required` | Sets the field as required    | `boolean`             | `false`     |


## CSS Custom Properties

| Name                                  | Description                                   |
| ------------------------------------- | --------------------------------------------- |
| `--buttonBorderRadius`                | Border radius for Select Menu                 |
| `--fontFamily`                        | Font Family for the Application               |
| `--selectActiveCaret`                 | Caret Shown When the Select Menu is Open      |
| `--selectInactiveCaret`               | Caret Shown When the Select Menu is Closed    |
| `--selectMenuBackgroundColor`         | Background Color of the Select Input          |
| `--selectMenuBorderColor`             | Border Color of the Select Input              |
| `--selectMenuBorderDisabledColor`     | Border Color of the Disabled Select Input     |
| `--selectMenuBorderFocusColor`        | Border Focus Color of the Select Input        |
| `--selectMenuBorderHoverColor`        | Border Hover Color of the Select Input        |
| `--selectMenuCaretBackgroundColor`    | Background Color of the Caret Section         |
| `--selectMenuHoverOptBackgroundColor` | Background Hover Color of Select Menu Options |
| `--selectMenuInvalidBorderColor`      | Border Color of the Invalid Select Input      |
| `--selectMenuLabelColor`              | Text Color of the Label                       |
| `--selectMenuTextColor`               | Text Color of the Select Input                |
| `--selectMenuTextHoverColor`          | Text Hover Color of the Select Menu           |
| `--selectOptGroupTextColor`           | Text Color of Select Menu Option Group        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
