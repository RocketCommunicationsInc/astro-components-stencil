import { newSpecPage } from '@stencil/core/testing'
import { RuxInput } from '../rux-input'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input></rux-input>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-input>
    `)
    })
})
