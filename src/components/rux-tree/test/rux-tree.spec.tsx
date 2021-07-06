import { newSpecPage } from '@stencil/core/testing'
import { RuxTree } from '../rux-tree'

describe('rux-tree', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTree],
            html: `<rux-tree></rux-tree>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-tree>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-tree>
    `)
    })
})
