import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckbox } from '../rux-checkbox'

describe('rux-checkbox', () => {
    it('builds', async () => {
        const checkbox = new RuxCheckbox()
        const {
            checkboxId,
            errorText,
            name,
            value,
            checked,
            indeterminate,
            disabled,
            required,
        } = checkbox

        expect(checkbox).toBeTruthy()
        expect({
            checkboxId,
            errorText,
            name,
            value,
            checked,
            indeterminate,
            disabled,
            required,
        }).toEqual({
            checkboxId: 'rux-checkbox-1',
            errorText: undefined,
            name: '',
            value: '',
            checked: false,
            indeterminate: false,
            disabled: false,
            required: false,
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckbox],
            html: `<rux-checkbox></rux-checkbox>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-checkbox>
        <mock:shadow-root>
          <div class="rux-checkbox">
              <input id="rux-checkbox-2" type="checkbox">
              <label htmlfor="">
                <slot></slot>
              </label>
          </div>
        </mock:shadow-root>
      </rux-checkbox>
    `)
    })
})
