# rux-status

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                   | Type                                                                                  | Default     |
| -------- | --------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `status` | `status`  | Sets the status symbol, valid options are critical, serious, caution, normal, standby and off | `"caution" \| "critical" \| "normal" \| "off" \| "serious" \| "standby" \| undefined` | `undefined` |


## Dependencies

### Used by

 - [rux-log](../rux-log)
 - [rux-monitoring-icon](../rux-monitoring-icon)
 - [rux-monitoring-progress-icon](../rux-monitoring-progress-icon)

### Graph
```mermaid
graph TD;
  rux-log --> rux-status
  rux-monitoring-icon --> rux-status
  rux-monitoring-progress-icon --> rux-status
  style rux-status fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
