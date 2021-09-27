describe('Icon', () => {
    beforeEach(() => {
        cy.visitForm('rux-icon')
    })
    it('renders', () => {
        cy.get('rux-icon').should('have.class', 'hydrated')
    })
})
