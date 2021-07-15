import { newSpecPage } from '@stencil/core/testing'
import { RuxInput } from '../rux-input'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input></rux-input>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-input value="">
            <mock:shadow-root>
            <div class="rux-form-field">
              <label class="rux-input-label" htmlfor="input-1"></label>
              <input aria-invalid="false" class="rux-input" id="input-1" type="text" value="">
            </div>
            </mock:shadow-root>
          </rux-input>
    `)
    })
})
