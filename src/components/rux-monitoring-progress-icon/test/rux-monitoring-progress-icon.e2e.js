describe('Monitoring Progress Icon', () => {
    beforeEach(() => {
        cy.visitForm('rux-monitoring-progress-icon')
    })
    it('renders', () => {
        cy.get('rux-monitoring-progress-icon').should('have.class', 'hydrated')
    })
})
