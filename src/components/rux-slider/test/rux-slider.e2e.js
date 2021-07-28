// import { newE2EPage } from '@stencil/core/testing'

describe('rux-slider', () => {
    beforeEach(() => {
        cy.visitStory('components-slider--default-story')
    })
    it('renders', async () => {
        cy.get('rux-slider').should('have.class', 'hydrated')
    })
    it('slides', () => {
        cy.get('rux-slider').click(20, 10)
    })
})
