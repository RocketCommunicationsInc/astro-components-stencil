import { newE2EPage } from '@stencil/core/testing'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-input></rux-input>')

        const element = await page.find('rux-input')
        expect(element).toHaveClass('hydrated')
    })

    it('should emit input event and sync value', async () => {
        const page = await newE2EPage({
            html: `
          <rux-input></rux-input>
        `,
        })
        const input = await page.find('rux-input')
        const ruxInput = await page.find('rux-input >>> .rux-input')
        const inputEvent = await input.spyOnEvent('rux-input')

        await ruxInput.press('A')

        expect(inputEvent).toHaveReceivedEventTimes(1)
        expect(await input.getProperty('value')).toBe('A')
    })
})
