import { newE2EPage } from '@stencil/core/testing'

describe('rux-slider', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-slider></rux-slider>')

        const element = await page.find('rux-slider')
        expect(element).toHaveClass('hydrated')
    })
})
