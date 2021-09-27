describe('Tree Node', () => {
    beforeEach(() => {
        cy.visitForm('rux-tree-node')
    })
    it('renders', () => {
        cy.get('rux-tree-node').should('have.class', 'hydrated')
    })
})
