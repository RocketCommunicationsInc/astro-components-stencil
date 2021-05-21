# Clock

Clock shows the current date and time, and optional AOS and LOS timers. It will typically be positioned on the Global Status Bar.

## Guidelines

- [Astro UXDS: Clock](https://www.astrouxds.com/ui-components/clock)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Clock package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-clock
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Clock Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxClock } from '@astrouxds/rux-clock/rux-clock.js';
```

### 3. Render the Astro Clock Web Component

Apply properties as attributes of the Astro Clock custom element:

```xml
<rux-clock timezone="Pacific/Guam" hideTimezone hideDate small></rux-clock>
```

Define AOS and LOS with valid [Unix Time Stamp](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) or [ISO 8601 Datetime String](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) and apply via `aos` and `los` attributes on the component:

```xml
<rux-clock aos="1557503698781" los="2019-05-10T16:21:12.000Z" small></rux-clock>
```


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                    | Type      | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `aos`          | `aos`           | When supplied with a valid [date string or value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#syntax) displays a timestamp labeled "AOS" next to the standard clock. | `number`  | `undefined` |
| `dayOfYear`    | `day-of-year`   |                                                                                                                                                                                                                | `number`  | `undefined` |
| `hideDate`     | `hide-date`     |                                                                                                                                                                                                                | `boolean` | `false`     |
| `hideTimezone` | `hide-timezone` | Show or hide the timezone                                                                                                                                                                                      | `boolean` | `false`     |
| `los`          | `los`           |                                                                                                                                                                                                                | `string`  | `undefined` |
| `small`        | `small`         |                                                                                                                                                                                                                | `boolean` | `undefined` |
| `time`         | `time`          |                                                                                                                                                                                                                | `string`  | `undefined` |
| `timezone`     | `timezone`      |                                                                                                                                                                                                                | `string`  | `'UTC'`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
