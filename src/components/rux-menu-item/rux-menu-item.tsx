import { Prop, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-menu-item',
    styleUrl: 'rux-menu-item.css',
    shadow: true,
})
export class RuxMenuItem {
    @Prop() value?: string | number

    render() {
        return (
            <Host value={this.value}>
                <slot></slot>
            </Host>
        )
    }
}
