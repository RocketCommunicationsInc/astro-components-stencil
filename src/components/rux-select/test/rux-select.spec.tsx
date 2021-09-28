import { newSpecPage } from '@stencil/core/testing'
import { RuxSelect } from '../rux-select'

describe('rux-select', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
            <rux-select label="test">
            <option>one</option>
            <option>two</option>
            </rux-select>
      `,
        })
        expect(page.root).toEqualHtml(`
          <rux-select label="test">
            <mock:shadow-root>
                <label aria-hidden="false">
                    <span>
                        <slot name="label">
                            test
                        </slot>
                    </span>
                </label>
                <select class="rux-select"></select>
                <div aria-hidden="true" class="hidden">
                    <slot></slot>
                </div>
            </mock:shadow-root>
              <option>
                  one
              </option>
              <option>
                  two
              </option>
              <input class="aux-input" type="hidden" value="">
          </rux-select>
      `)
    })
})
