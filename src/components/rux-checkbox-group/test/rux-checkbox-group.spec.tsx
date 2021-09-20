import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckboxGroup } from '../rux-checkbox-group'

describe('rux-checkbox-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckboxGroup],
            html: `<rux-checkbox-group></rux-checkbox-group>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-checkbox-group>
            <mock:shadow-root>
              <div class="hidden rux-label">
                <slot name="label"></slot>
              </div>
              <div class="rux-checkbox-group" part="container">
                <slot></slot>
              </div>
            </mock:shadow-root>
          </rux-checkbox-group>
        `)
    })
    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxCheckboxGroup],
            html: `<rux-checkbox-group label="hello"></rux-checkbox-group>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-checkbox-group label="hello">
          <mock:shadow-root>
            <div class="rux-label">
              <slot name="label">hello</slot>
            </div>
            <div class="rux-checkbox-group" part="container">
              <slot></slot>
            </div>
          </mock:shadow-root>
        </rux-checkbox-group>
      `)
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxCheckboxGroup],
            html: `<rux-checkbox-group><div slot="label">hello</div></rux-checkbox-group>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-checkbox-group>
        <mock:shadow-root>
          <div class="rux-label">
            <slot name="label"></slot>
          </div>
          <div class="rux-checkbox-group" part="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div slot="label">hello</div>
      </rux-checkbox-group>
    `)
    })
})
