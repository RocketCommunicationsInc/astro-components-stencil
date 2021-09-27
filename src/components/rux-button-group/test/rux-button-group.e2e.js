describe('Button Group', () => {
    beforeEach(() => {
        cy.visitForm('rux-button-group')
    })
    it('renders', () => {
        cy.get('rux-button-group').should('have.class', 'hydrated')
    })
})
