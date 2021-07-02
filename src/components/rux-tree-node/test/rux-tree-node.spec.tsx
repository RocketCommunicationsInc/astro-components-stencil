import { newSpecPage } from '@stencil/core/testing'
import { RuxTreeNode } from '../rux-tree-node'

describe('rux-tree-node', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTreeNode],
            html: `<rux-tree-node></rux-tree-node>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-tree-node>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-tree-node>
    `)
    })
})
