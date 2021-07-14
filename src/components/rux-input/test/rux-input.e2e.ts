import { newE2EPage } from '@stencil/core/testing'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-input></rux-input>')

        const element = await page.find('rux-input')
        expect(element).toHaveClass('hydrated')
    })
})
