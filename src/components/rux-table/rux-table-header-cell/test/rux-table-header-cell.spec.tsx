import { newSpecPage } from '@stencil/core/testing'
import { RuxTableHeaderCell } from '../rux-table-header-cell'

describe('rux-table-header-cell', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTableHeaderCell],
            html: `<rux-table-header-cell></rux-table-header-cell>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table-header-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table-header-cell>
    `)
    })
})
