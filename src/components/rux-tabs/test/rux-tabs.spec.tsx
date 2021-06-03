import { newSpecPage } from '@stencil/core/testing'
import { html } from 'lit-html'
import { RuxTabPanel } from '../rux-tab-panel/rux-tab-panel'
import { RuxTabPanels } from '../rux-tab-panels/rux-tab-panels'
import { RuxTab } from '../rux-tab/rux-tab'
import { RuxTabs } from '../rux-tabs'

describe('rux-tabs', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTabs],
            html: `<rux-tabs></rux-tabs>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-tabs>
    `)
    })
    it('hides everything using _reset method', async () => {
        const ruxTabs = new RuxTabs()
        const page = await newSpecPage({
            components: [RuxTabs, RuxTab, RuxTabPanels, RuxTabPanel],
            html: `<rux-tabs id="tab-set-id-1">
                    <rux-tab id="tab-id-1"></rux-tab>
                </rux-tabs>
                <rux-tab-panels aria-labelledby="tab-set-id-1">
                  <rux-tab-panel aria-labelledby="tab-id-1"></rux-tab-panel>
                </rux-tab-panels>
          `,
        })
        const tabs = page.root.shadowRoot.querySelectorAll('rux-tab')
        const panels = page.root.shadowRoot.querySelectorAll('rux-tab-panel')
        tabs.forEach((tab) => ruxTabs._tabs.push(tab))
        panels.forEach((panel) => ruxTabs._panels.push(panel))

        ruxTabs._reset()
        ruxTabs._tabs.forEach((tab) => expect(tab.selected).toBe(false))
        ruxTabs._panels.forEach((panel) =>
            expect(panel.classList).toContain('hidden')
        )
    })
    it('sets active tab correctly by assigning the selected attr', async () => {
        const ruxTabs = new RuxTabs()
        const ruxTab = new RuxTab()
        ruxTabs._setTab(ruxTab)
        expect(ruxTab.selected).toBe(true)
    })
})
