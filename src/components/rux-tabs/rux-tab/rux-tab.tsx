import { Component, Host, h, Prop, Element } from '@stencil/core'

@Component({
    tag: 'rux-tab',
    styleUrl: 'rux-tab.scss',
    shadow: true,
})
export class RuxTab {
    @Prop({ mutable: true }) ruxTabId: string = ''
    @Prop({ reflect: true }) selected: boolean = false
    @Prop({ reflect: true }) disabled: boolean = false

    @Element() el: HTMLElement

    connectedCallback() {
        this.el.setAttribute('role', 'tab')
        this.el.addEventListener('click', this.clickHandler)

        if (this.el.parentElement.getAttributeNode('small')) {
            this.el.setAttribute('small', '')
        }
    }

    clickHandler(e) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    render() {
        return (
            <Host onClick={(e) => this.clickHandler(e)}>
                <slot></slot>
            </Host>
        )
    }
}
