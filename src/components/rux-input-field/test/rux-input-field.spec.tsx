import { newSpecPage } from '@stencil/core/testing'
import { RuxInputField } from '../rux-input-field'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxInputField],
            html: `<rux-input-field></rux-input-field>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-input-field value="">
            <mock:shadow-root>
            <div>
            <div class="rux-form-field" part="form-field">
              <label aria-hidden="true" class="rux-input-label" htmlfor="rux-input-1" part="label">
                <span class="hidden">
                  <slot name="label"></slot>
                </span>
              </label>
              <input aria-invalid="false" class="rux-input" id="rux-input-1" type="text" value="">
            </div>
            </div>
            </mock:shadow-root>
            <input class="aux-input" type="hidden" value="">
          </rux-input-field>
      `)
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxInputField],
            html: `<rux-input-field label="hello"></rux-input-field>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-input-field label="hello" value="">
          <mock:shadow-root>
          <div>
          <div class="rux-form-field" part="form-field">
            <label aria-hidden="false" class="rux-input-label" htmlfor="rux-input-2" part="label">
              <span>
                <slot name="label">hello</slot>
              </span>
            </label>
            <input aria-invalid="false" class="rux-input" id="rux-input-2" type="text" value="">
          </div>
          </div>
          </mock:shadow-root>
          <input class="aux-input" type="hidden" value="">
        </rux-input-field>
      `)
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxInputField],
            html: `<rux-input-field><div slot="label">hello</div></rux-input-field>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-input-field value="">
          <mock:shadow-root>
          <div>
          <div class="rux-form-field" part="form-field">
            <label aria-hidden="false" class="rux-input-label" htmlfor="rux-input-3" part="label">
              <span>
                <slot name="label"></slot>
              </span>
            </label>
            <input aria-invalid="false" class="rux-input" id="rux-input-3" type="text" value="">
          </div>
          </div>
          </mock:shadow-root>
          <div slot="label">hello</div>
          <input class="aux-input" type="hidden" value="">
        </rux-input-field>
      `)
    })
})
