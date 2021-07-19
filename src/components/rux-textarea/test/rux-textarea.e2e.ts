import { newE2EPage } from '@stencil/core/testing'

describe('rux-textarea', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-textarea></rux-textarea>')

        const element = await page.find('rux-textarea')
        expect(element).toHaveClass('hydrated')
    })
})
