import { Component, Host, h, Prop, Element, Listen } from '@stencil/core'

@Component({
    tag: 'rux-tabs',
    styleUrl: 'rux-tabs.scss',
    shadow: true,
})
export class RuxTabs {
    /**
     *  Associates this tab container with a Tabs Panel container element. Must match the aria-labelledby attribute on a <rux-tabs-panels> container element elsewhere within the HTML document.
     */
    @Prop({ mutable: true }) ruxTabsId: string = ''
    /**
     *  If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses. Previously compact
     */
    @Prop({ mutable: true }) small: boolean = false
    @Prop({ mutable: true }) _panels: Array<HTMLRuxTabPanelElement> = []
    @Prop({ mutable: true }) _tabs: Array<HTMLRuxTabElement> = []

    @Element() ruxTabsEl: HTMLElement

    @Listen('registerPanels', { target: 'window' })
    handleListen(e) {
        this._registerPanels(e)
    }

    connectedCallback() {
        this.ruxTabsEl.addEventListener('click', (e) => this._onClick(e))
        this._addTabs()
    }

    _addTabs() {
        this._tabs = Array.from(this.ruxTabsEl.querySelectorAll('rux-tab'))
    }

    _registerPanels(e) {
        e.detail.forEach((panel) => {
            this._panels.push(panel)
        })
        // Default to first tab if none are selected
        const selectedTab =
            this._tabs.find((tab) => tab.selected) || this._tabs[0]
        this._setTab(selectedTab)
    }

    _onClick(e) {
        if (
            e.target.getAttribute('role') === 'tab' &&
            e.target.getAttribute('disabled') === null
        ) {
            this._setTab(e.target)
        }
    }

    _reset() {
        // hide everything
        this._tabs.forEach((tab) => (tab.selected = false))
        //* classLIst on rux-tab-panel is an array of strings.
        this._panels.forEach((panel) => panel.classList.add('hidden'))
    }

    _setTab(selectedTab) {
        this._reset()

        // find the panel whose aria-labeldby attribute matches the tab’s id
        const selectedPanel = this._panels.find(
            (panel) =>
                panel.getAttribute('aria-labelledby') ===
                selectedTab.getAttribute('id')
        )

        if (selectedTab) selectedTab.selected = true
        if (selectedPanel) selectedPanel.classList.remove('hidden')
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
