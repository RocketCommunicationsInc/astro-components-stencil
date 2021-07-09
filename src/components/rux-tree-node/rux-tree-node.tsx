import {
    Prop,
    Event,
    EventEmitter,
    State,
    Element,
    Component,
    Host,
    Listen,
    Method,
    Watch,
    h,
} from '@stencil/core'

let id = 0
@Component({
    tag: 'rux-tree-node',
    styleUrl: 'rux-tree-node.scss',
    shadow: true,
})

/**
 * @slot - The parent node content
 * @slot node - Renders a child node within the current node
 */
export class RuxTreeNode {
    componentId = `node-${++id}`
    @Element() el!: HTMLRuxTreeNodeElement
    @State() children: Array<HTMLRuxTreeNodeElement> = []

    /**
     * Sets the expanded state
     */
    @Prop({ mutable: true, reflect: true }) expanded = false
    /**
     * Sets the selected state
     */
    @Prop({ mutable: true, reflect: true }) selected = false

    /**
     * Emit when user selects a tree node
     */
    @Event({ eventName: 'rux-tree-node-selected' })
    ruxTreeNodeSelected!: EventEmitter<string>

    @Watch('expanded')
    handleExpandedChange(newValue: boolean) {
        this.setExpanded(newValue)
    }

    @Watch('selected')
    handleSelectedChange(newValue: boolean) {
        this.setSelected(newValue)
    }

    @Listen('keydown')
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.target !== ev.currentTarget) {
            console.log('true')

            return true
        }
        console.log(ev.key)

        if (ev.key === 'ArrowDown') {
            this.focusNext()
        }
    }

    focusItem(el: HTMLElement) {
        const parent = el?.shadowRoot?.querySelector(
            '.parent'
        ) as HTMLRuxTreeNodeElement
        if (parent) {
            parent.setAttribute('tabindex', '0')
            // el.focusable = true;
            parent.focus()
        } else {
            console.log('no parent')
        }
    }

    focusNext() {
        const delta = 1
        const visibleNodes = this._getVisibleNodes()
        console.log('visiblenodes', visibleNodes)
        // console.log('thisnode', this.el);

        const thisNode = visibleNodes.find(
            (node) => node.id === this.componentId
        )
        console.log('thisnode', thisNode)

        //@ts-ignore
        const currentIndex: number = visibleNodes.indexOf(this.el)
        console.log('currentIndes', currentIndex)
        console.log('el', this.el)

        if (currentIndex !== -1) {
            let nextElement: HTMLElement | undefined =
                visibleNodes[currentIndex + delta]
            if (nextElement !== undefined) {
                while (nextElement.hasAttribute('disabled')) {
                    const offset: number = delta >= 0 ? 1 : -1
                    nextElement = visibleNodes[currentIndex + delta + offset]
                    if (!nextElement) {
                        break
                    }
                }
            }

            // if (isHTMLElement(nextElement)) {
            this.focusItem(nextElement)
            // }
        }
        console.log(this._getVisibleNodes())
    }

    _getVisibleNodes() {
        const rootTree = this.getTree() as HTMLRuxTreeElement

        const nodes = Array.from(rootTree.querySelectorAll('rux-tree-node'))
        return nodes.filter(
            (node: HTMLRuxTreeNodeElement) => node.offsetParent !== null
        )
    }

    connectedCallback() {
        this.handleSlotChange = this.handleSlotChange.bind(this)
    }

    componentWillLoad() {
        this.handleSlotChange()
    }

    get _hasChildren() {
        return this.children.length > 0
    }

    private getTree(): HTMLElement | null {
        return this.el.closest("[role='tree']") as HTMLRuxTreeElement
    }

    /**
     * Sets the expanded state
     * @param value
     */
    @Method()
    async setExpanded(value: boolean) {
        this.expanded = value
    }

    /**
     * Sets the selected state
     * @param value
     */
    @Method()
    async setSelected(value: boolean) {
        this.selected = value
    }

    handleSlotChange() {
        const children = Array.from(
            this.el.querySelectorAll(`[slot="node"]`)
        ) as HTMLRuxTreeNodeElement[]
        this.children = children
        this._setAriaLevel()
    }

    /**
     * Manually set the aria-level attribute.
     * Tree is responsible for setting the root node levels.
     */
    _setAriaLevel() {
        const level = this.el.getAttribute('aria-level')
        if (level) {
            this.children.map((child) => {
                child.setAttribute('aria-level', `${+level + 1}`)
            })
        }
    }

    _handleArrowClick(e: MouseEvent) {
        e.stopPropagation()
        this.setExpanded(!this.expanded)
    }

    _handleTreeNodeClick(e: MouseEvent) {
        e.stopPropagation()
        this.setSelected(!this.selected)
        this.ruxTreeNodeSelected.emit(this.componentId)
    }

    render() {
        const attrs = this._hasChildren && { role: 'group' }

        return (
            <Host
                role="treeitem"
                aria-expanded={this.expanded ? 'true' : 'false'}
                aria-selected={this.selected ? 'true' : 'false'}
                id={this.componentId}
                onClick={(event: MouseEvent) =>
                    this._handleTreeNodeClick(event)
                }
            >
                <div
                    class={{
                        'tree-node': true,
                        'tree-node--expanded': this.expanded,
                        'tree-node--has-children': this._hasChildren,
                        'tree-node--selected': this.selected,
                    }}
                >
                    <div class="parent" tabindex="0">
                        {this._hasChildren && (
                            <i
                                onClick={(e) => this._handleArrowClick(e)}
                                class="arrow"
                            ></i>
                        )}
                        <slot onSlotchange={this.handleSlotChange}></slot>
                    </div>
                    <div {...attrs} class="children">
                        <slot
                            name="node"
                            onSlotchange={this.handleSlotChange}
                        ></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
