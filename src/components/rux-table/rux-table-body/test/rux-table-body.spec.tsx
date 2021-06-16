import { newSpecPage } from '@stencil/core/testing'
import { RuxTableBody } from '../rux-table-body'

describe('rux-table-body', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTableBody],
            html: `<rux-table-body></rux-table-body>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table-body>
    `)
    })
})
