describe('Progress', () => {
    beforeEach(() => {
        cy.visitForm('rux-progress')
    })
    it('renders', () => {
        cy.get('rux-progress').should('have.class', 'hydrated')
    })
})
