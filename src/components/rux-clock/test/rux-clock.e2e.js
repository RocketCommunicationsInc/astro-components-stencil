describe('Clock', () => {
    beforeEach(() => {
        cy.visitForm('rux-clock')
    })
    it('renders', () => {
        cy.get('rux-clock').should('have.class', 'hydrated')
    })
})
