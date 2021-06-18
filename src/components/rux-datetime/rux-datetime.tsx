import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-datetime',
    styleUrl: 'rux-datetime.css',
    shadow: true,
})
export class RuxDatetime {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
