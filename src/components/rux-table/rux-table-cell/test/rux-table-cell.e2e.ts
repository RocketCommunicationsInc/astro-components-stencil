import { newE2EPage } from '@stencil/core/testing'

describe('rux-table-cell', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table-cell></rux-table-cell>')

        const element = await page.find('rux-table-cell')
        expect(element).toHaveClass('hydrated')
    })
})
