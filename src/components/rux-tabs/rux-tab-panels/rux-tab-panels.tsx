import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
} from '@stencil/core'

@Component({
    tag: 'rux-tab-panels',
    styleUrl: '.././rux-tab-panel/rux-tab-panel.scss',
    shadow: true,
})
export class RuxTabPanels {
    @Prop() slottedChildren: Array<HTMLRuxTabPanelsElement> = []

    @Element() el: HTMLElement

    _getSlottedChildren() {
        const slot = this.el.shadowRoot.querySelector('slot')
        const childNodes = slot.assignedNodes({ flatten: true })
        this.slottedChildren = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )
    }
    connectedCallback() {
        this.el.setAttribute('style', 'position: relative; width: 100%;')
    }
    //! Want willLoad instead
    componentDidLoad() {
        this._getSlottedChildren()
        this._registerTabPanels(this.slottedChildren)
    }

    @Event() registerPanels: EventEmitter<HTMLRuxTabPanelsElement[]> //! Might need to be panel not panels
    _registerTabPanels(children: HTMLRuxTabPanelsElement[]) {
        //* Emit the whole arr, map on parent
        this.registerPanels.emit(children)
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
