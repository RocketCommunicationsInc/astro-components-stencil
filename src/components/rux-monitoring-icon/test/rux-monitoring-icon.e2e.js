describe('Monitoring Icon', () => {
    beforeEach(() => {
        cy.visitForm('rux-monitoring-icon')
    })
    it('renders', () => {
        cy.get('rux-monitoring-icon').should('have.class', 'hydrated')
    })
})
