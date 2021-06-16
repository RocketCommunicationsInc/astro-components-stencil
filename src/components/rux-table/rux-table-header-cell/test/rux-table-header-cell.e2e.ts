import { newE2EPage } from '@stencil/core/testing'

describe('rux-table-header-cell', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table-header-cell></rux-table-header-cell>')

        const element = await page.find('rux-table-header-cell')
        expect(element).toHaveClass('hydrated')
    })
})
