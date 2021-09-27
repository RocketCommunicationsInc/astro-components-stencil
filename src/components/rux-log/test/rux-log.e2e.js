describe('Log', () => {
    beforeEach(() => {
        cy.visitForm('rux-log')
    })
    it('renders', () => {
        cy.get('rux-log').should('have.class', 'hydrated')
    })
})
