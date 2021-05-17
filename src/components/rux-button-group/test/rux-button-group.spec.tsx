import { newSpecPage } from '@stencil/core/testing'
import { RuxButton } from '../../rux-button/rux-button'

// Button RuxButton {
//   icon: '',
//   iconOnly: false,
//   outline: false,
//   type: 'button',
//   disabled: false
// }

describe('rux-button-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxButton],
            html: `<rux-button-group><rux-button></rux-button><rux-button></rux-button></rux-button-group>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button>
            <mock:shadow-root>
              <button type="button" class="rux-button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Button
          </rux-button>
        `)
    })
})
