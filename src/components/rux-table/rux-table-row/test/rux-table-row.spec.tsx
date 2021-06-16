import { newSpecPage } from '@stencil/core/testing'
import { RuxTableRow } from '../rux-table-row'

describe('rux-table-row', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTableRow],
            html: `<rux-table-row></rux-table-row>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table-row>
    `)
    })
})
