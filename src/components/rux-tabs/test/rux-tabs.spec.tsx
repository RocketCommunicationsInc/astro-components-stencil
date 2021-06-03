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
    it('hears the registerPanels event and adds panels', async () => {
        const ruxTabs = new RuxTabs()

        const page = await newSpecPage({
            components: [RuxTabs, RuxTabPanels, RuxTab, RuxTabPanel],
            html: `<rux-tabs id="tab-set-id-1">
          <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
          <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
          <rux-tab id="tab-id-3">Tab 3 title</rux-tab>
        </rux-tabs>
        
        <rux-tab-panels aria-labelledby="tab-set-id-1">
          <rux-tab-panel aria-labelledby="tab-id-1">Tab 1 HTML content</rux-tab-panel>
          <rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML content</rux-tab-panel>
          <rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML content</rux-tab-panel>
        </rux-tab-panels>`,
        })
        expect(ruxTabs._panels.length).toBe(3)
    })
    it('adds tabs correctly', async () => {
        const ruxTabs = new RuxTabs()
        const page = await newSpecPage({
            components: [RuxTabs, RuxTabPanels, RuxTab, RuxTabPanel],
            html: `<rux-tabs id="tab-set-id-1">
        <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
        <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
        <rux-tab id="tab-id-3">Tab 3 title</rux-tab>
      </rux-tabs>
      
      <rux-tab-panels aria-labelledby="tab-set-id-1">
        <rux-tab-panel aria-labelledby="tab-id-1">Tab 1 HTML content</rux-tab-panel>
        <rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML content</rux-tab-panel>
        <rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML content</rux-tab-panel>
      </rux-tab-panels>`,
        })
        expect(ruxTabs._tabs.length).toBe(3)
    })
    it('hides everything using _reset method', async () => {
        const ruxTabs = new RuxTabs()
        //   const page = await newSpecPage({
        //       components: [RuxTabs, RuxTabPanels, RuxTab, RuxTabPanel],
        //       html: `<rux-tabs id="tab-set-id-1">
        //   <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
        //   <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
        //   <rux-tab id="tab-id-3">Tab 3 title</rux-tab>
        // </rux-tabs>

        // <rux-tab-panels aria-labelledby="tab-set-id-1">
        //   <rux-tab-panel aria-labelledby="tab-id-1">Tab 1 HTML content</rux-tab-panel>
        //   <rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML content</rux-tab-panel>
        //   <rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML content</rux-tab-panel>
        // </rux-tab-panels>`,
        //   })
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
