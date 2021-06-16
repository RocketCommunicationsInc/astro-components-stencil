import { newSpecPage } from '@stencil/core/testing'
import { RuxTableHeader } from '../rux-table-header'

describe('rux-table-header', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTableHeader],
            html: `<rux-table-header></rux-table-header>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table-header>
    `)
    })
})
