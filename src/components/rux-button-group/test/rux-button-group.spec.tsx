import { newSpecPage } from '@stencil/core/testing'
import { RuxButtonGroup } from '../../rux-button-group/rux-button-group'
import { RuxButton } from '../../rux-button/rux-button'

describe('rux-button-group', () => {
    it('builds', async () => {
        const buttonGroup = new RuxButtonGroup()

        expect(buttonGroup).toBeTruthy()
        expect(buttonGroup).toEqual({
            align: 'left',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxButtonGroup, RuxButton],
            html: `<rux-button-group>
              <rux-button icon="" outline>Button</rux-button>
              <rux-button icon="">Button</rux-button>
            </rux-button-group>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button-group>
            <div class="rux-button-group rux-button-group--left">
              <rux-button icon="" outline>
                <mock:shadow-root>
                  <button type="button" class="rux-button rux-button--outline">
                    <slot></slot>
                  </button>
                </mock:shadow-root>
                Button
              </rux-button>
              <rux-button icon="">
                <mock:shadow-root>
                  <button type="button" class="rux-button">
                    <slot></slot>
                  </button>
                </mock:shadow-root>
                Button
              </rux-button>
            </div>
          </rux-button-group>
        `)
    })

    it('aligns', async () => {
        const page = await newSpecPage({
            components: [RuxButtonGroup],
            html: `<rux-button-group align="right"></rux-button-group>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button-group align="right">
            <div class="rux-button-group rux-button-group--right">
            </div>
          </rux-button-group>
        `)
    })
})
