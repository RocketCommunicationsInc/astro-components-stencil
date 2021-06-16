import { newE2EPage } from '@stencil/core/testing'

describe('rux-table-header-row', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table-header-row></rux-table-header-row>')

        const element = await page.find('rux-table-header-row')
        expect(element).toHaveClass('hydrated')
    })
})
