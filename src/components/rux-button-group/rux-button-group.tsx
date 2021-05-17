import { Component, h } from '@stencil/core'

@Component({
    tag: 'rux-button-group',
    styleUrl: 'rux-button-group.scss',
    shadow: false,
})
export class RuxButtonGroup {
    render() {
        return (
            <div class="rux-button-group">
                <slot></slot>
            </div>
        )
    }
}
