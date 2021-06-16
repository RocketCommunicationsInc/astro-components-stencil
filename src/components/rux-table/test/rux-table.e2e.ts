import { newE2EPage } from '@stencil/core/testing'

describe('rux-table', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table></rux-table>')

        const element = await page.find('rux-table')
        expect(element).toHaveClass('hydrated')
    })
})
