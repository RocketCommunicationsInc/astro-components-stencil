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

    it('renders option groups', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
            <rux-select>
              <optgroup label="Group one">
                <option value="1">one</option>
                <option value="2">two</option>
              </optgroup>
            </rux-select>
          `,
        })
        expect(page.root).toEqualHtml(`
      <rux-select>
          <mock:shadow-root>
              <label aria-hidden="true">
                  <span class="hidden">
                      <slot name="label"></slot>
                  </span>
              </label>
              <select class="rux-select"></select>
              <div aria-hidden="true" class="hidden">
                  <slot></slot>
              </div>
          </mock:shadow-root>
          <optgroup label="Group one">
              <option value="1">
                  one
              </option>
              <option value="2">
                  two
              </option>
          </optgroup>
          <input class="aux-input" type="hidden" value="">
      </rux-select>
    `)
    })
})
