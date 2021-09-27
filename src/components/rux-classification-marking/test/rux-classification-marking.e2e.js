describe('Classificaton Marking', () => {
    beforeEach(() => {
        cy.visitForm('rux-classification-marking')
    })
    it('renders', () => {
        cy.get('rux-classification-marking').should('have.class', 'hydrated')
    })
})
