describe('Segmented Button', () => {
    beforeEach(() => {
        cy.visitForm('rux-segmented-button')
    })
    it('renders', () => {
        cy.get('rux-segmented-button').should('have.class', 'hydrated')
    })
})
