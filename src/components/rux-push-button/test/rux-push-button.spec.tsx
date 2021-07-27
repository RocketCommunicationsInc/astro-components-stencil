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
                <input class="rux-push-button__input" id="rux-push-button-0" type="checkbox">
                <label class="rux-push-button__button" htmlFor="rux-push-button-0"><slot>Push Button</slot></label>
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

    it('auto increments its own unique id', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button> <rux-push-button></rux-push-button>`,
        })
        const secondPushButton = page.body.querySelectorAll(
            'rux-push-button'
        )[1]

        const inputId = secondPushButton.shadowRoot
            .querySelector('input')
            .getAttribute('id')
        expect(inputId).toBe('rux-push-button-2')
    })

    it('does not become checked when disabled', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button disabled></rux-push-button>`,
        })
        page.waitForChanges()
        const pushButton = page.body.querySelectorAll('rux-push-button')[0]
        const handleClick = jest.fn()
        page.root.addEventListener('click', handleClick)
        page.root.dispatchEvent(new MouseEvent('click'))
        expect(handleClick).toHaveBeenCalled()
        expect(pushButton.hasAttribute('checked')).toBe(false)
    })
})
