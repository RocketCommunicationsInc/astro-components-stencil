import { newE2EPage } from '@stencil/core/testing'

describe('rux-datetime', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-datetime></rux-datetime>')

        const element = await page.find('rux-datetime')
        expect(element).toHaveClass('hydrated')
    })
})
