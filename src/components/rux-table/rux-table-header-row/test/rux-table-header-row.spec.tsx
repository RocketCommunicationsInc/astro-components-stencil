import { newSpecPage } from '@stencil/core/testing'
import { RuxTableHeaderRow } from '../rux-table-header-row'

describe('rux-table-header-row', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTableHeaderRow],
            html: `<rux-table-header-row></rux-table-header-row>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table-header-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table-header-row>
    `)
    })
})
