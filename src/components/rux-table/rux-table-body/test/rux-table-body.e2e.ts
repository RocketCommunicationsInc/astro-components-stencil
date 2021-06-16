import { newE2EPage } from '@stencil/core/testing'

describe('rux-table-body', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table-body></rux-table-body>')

        const element = await page.find('rux-table-body')
        expect(element).toHaveClass('hydrated')
    })
})
