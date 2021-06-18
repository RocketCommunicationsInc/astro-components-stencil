import { newSpecPage } from '@stencil/core/testing'
import { RuxLog } from '../rux-log'

describe('rux-log', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxLog],
            html: `<rux-log></rux-log>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-log>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-log>
    `)
    })
})
