describe('Radio', () => {
    beforeEach(() => {
        cy.visitForm('rux-radio')
    })
    it('renders', () => {
        cy.get('rux-radio').should('have.class', 'hydrated')
    })
})
