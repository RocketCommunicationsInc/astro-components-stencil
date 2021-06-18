import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-log',
    styleUrl: 'rux-log.css',
    shadow: true,
})
export class RuxLog {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
