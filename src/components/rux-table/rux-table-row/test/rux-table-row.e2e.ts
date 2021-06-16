import { newE2EPage } from '@stencil/core/testing'

describe('rux-table-row', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-table-row></rux-table-row>')

        const element = await page.find('rux-table-row')
        expect(element).toHaveClass('hydrated')
    })
})
