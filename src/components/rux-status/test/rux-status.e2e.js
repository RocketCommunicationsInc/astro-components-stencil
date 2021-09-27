describe('Status', () => {
    beforeEach(() => {
        cy.visitForm('rux-status')
    })
    it('renders', () => {
        cy.get('rux-status').should('have.class', 'hydrated')
    })
})
