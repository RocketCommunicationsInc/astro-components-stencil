import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-row',
    styleUrl: 'rux-table-row.scss',
    shadow: true,
})
export class RuxTableRow {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
