// import { newE2EPage } from '@stencil/core/testing'

describe('rux-slider', () => {
    beforeEach(() => {
        cy.visitStory('components-slider--default-story')
    })
    it('renders', async () => {
        cy.get('rux-slider').should('have.calss', 'hydrated')
    })
})

/*

  it('emits a rux-input event on value change', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-slider></rux-slider>')
        const slider = await page.find('rux-slider')
        const inputEvent = await slider.spyOnEvent('rux-input')

        await slider.click()
        expect(inputEvent).toHaveReceivedEvent()
    })
    it('changes val to 0 if given val is not valid', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-slider val="s"></rux-slider>')
        const slider = await page.find('rux-slider')
        expect(slider).toEqualAttribute('val', 0)
    })
    it('changes min to be 0 if given min is not valid', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-slider min="s"></rux-slider>')
        const slider = await page.find('rux-slider')
        expect(slider).toHaveProperty('min', 0)
    })
    it('changes max to be 100 if given max is not valid', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-slider max="s"></rux-slider>')
        const slider = await page.find('rux-slider')
        expect(slider).toHaveProperty('max', 100)
    })
    it('changes val to equal min if given val is less than min', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-slider min="10" val="1"></rux-slider>')
        const slider = await page.find('rux-slider')
        expect(slider).toHaveAttribute('min')
    })


*/
