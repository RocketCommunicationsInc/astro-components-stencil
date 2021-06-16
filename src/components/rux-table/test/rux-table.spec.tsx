import { newSpecPage } from '@stencil/core/testing'
import { RuxTable } from '../rux-table'

describe('rux-table', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTable],
            html: `<rux-table></rux-table>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-table>
    `)
    })
})
