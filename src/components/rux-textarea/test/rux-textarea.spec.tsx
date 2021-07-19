import { newSpecPage } from '@stencil/core/testing'
import { RuxTextarea } from '../rux-textarea'

describe('rux-textarea', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea></rux-textarea>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-textarea>
    `)
    })
})
