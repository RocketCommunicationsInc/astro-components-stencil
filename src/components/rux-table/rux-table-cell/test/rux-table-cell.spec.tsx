import { newSpecPage } from '@stencil/core/testing'
import { RuxTableCell } from '../rux-table-cell'

describe('rux-table-cell', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTableCell],
            html: `<rux-table-cell></rux-table-cell>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table-cell>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table-cell>
    `)
    })
})
