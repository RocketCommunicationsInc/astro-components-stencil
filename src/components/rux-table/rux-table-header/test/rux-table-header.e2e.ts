import { newE2EPage } from '@stencil/core/testing'

describe('rux-table-header', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table-header></rux-table-header>')

        const element = await page.find('rux-table-header')
        expect(element).toHaveClass('hydrated')
    })
})
