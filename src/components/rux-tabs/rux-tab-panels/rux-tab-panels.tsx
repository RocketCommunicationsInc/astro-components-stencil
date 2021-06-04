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
    /**
     * Holds all slotted children of given '<rux-tab-panels>' component.
     */
    @Prop({ mutable: true })
    slottedChildren: Array<HTMLRuxTabPanelsElement> = []

    @Element() el: HTMLElement

    connectedCallback() {
        this.el.setAttribute('style', 'position: relative; width: 100%;')
    }

    //maybe do get _slottedChildren?
    _getSlottedChildren() {
        const slot = this.el.shadowRoot.querySelector('slot')
        const childNodes = slot.assignedNodes({ flatten: true })
        this.slottedChildren = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )
    }

    //! didLoad is triggering a warning about re-renders since slottedChildren changes. I've
    //! tried willLoad, willRender, and inside the connectedCallback, but get errors of nodes
    //! being undefined due to it not filling them in time. Race condition problem
    componentDidLoad() {
        this._getSlottedChildren()
        this._registerTabPanels(this.slottedChildren)
    }

    @Event() registerPanels: EventEmitter<HTMLRuxTabPanelsElement[]>
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
