import { newE2EPage } from '@stencil/core/testing'

describe('rux-checkbox', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-checkbox></rux-checkbox>')

        const element = await page.find('rux-checkbox')
        expect(element).toHaveClass('hydrated')
    })
})
