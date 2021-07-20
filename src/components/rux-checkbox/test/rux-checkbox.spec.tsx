import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckbox } from '../rux-checkbox'

describe('rux-checkbox', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckbox],
            html: `<rux-checkbox></rux-checkbox>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-checkbox>
    `)
    })
})
