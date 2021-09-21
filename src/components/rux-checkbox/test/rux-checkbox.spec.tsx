import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckbox } from '../rux-checkbox'

describe('rux-checkbox', () => {
    it('builds', async () => {
        const checkbox = new RuxCheckbox()
        const {
            checkboxId,
            checked,
            disabled,
            errorText,
            indeterminate,
            name,
            value,
        } = checkbox

        expect(checkbox).toBeTruthy()
        expect({
            checkboxId,
            checked,
            disabled,
            errorText,
            indeterminate,
            name,
            value,
        }).toEqual({
            checkboxId: 'rux-checkbox-1',
            checked: false,
            disabled: false,
            errorText: undefined,
            indeterminate: false,
            name: '',
            value: '',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckbox],
            html: `<rux-checkbox></rux-checkbox>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-checkbox value="">
        <mock:shadow-root>
        <div>
          <div class="rux-form-field">
            <div class="rux-checkbox">
                <input id="rux-checkbox-2" type="checkbox" value="">
                <label htmlfor="rux-checkbox-2">
                  <span>
                  <slot></slot>
                  </span>
                </label>
            </div>
          </div>
          </div>
        </mock:shadow-root>
      </rux-checkbox>
    `)
    })
})
