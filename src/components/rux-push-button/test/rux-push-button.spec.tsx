import { newSpecPage } from '@stencil/core/testing'
import { RuxPushButton } from '../rux-push-button'

describe('rux-push-button', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-push-button aria-checked="false" role="switch">
        <mock:shadow-root>
          <input class="rux-push-button__input" id="ruxSwitch" type="checkbox">
          <label class="rux-push-button__button" htmlFor="ruxSwitch"><slot>Push Button</slot></label>
        </mock:shadow-root>
      </rux-push-button>
    `)
    })

    it('handles event', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        page.waitForChanges()
        const handleClick = jest.fn()
        page.root.addEventListener('click', handleClick)
        page.root.dispatchEvent(new MouseEvent('click'))
        expect(handleClick).toHaveBeenCalled()
    })
})
