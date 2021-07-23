describe('Tree', () => {
    beforeEach(() => {
        cy.visit('components-tree--default-story&args=&viewMode=story')
    })
    it('Visits the Kitchen Sink', async () => {
        const parent = cy.get('rux-tree-node').first().shadow().find('.parent')
        parent.focus()
        cy.focused().should('have.attr', 'expanded')
        cy.realPress('ArrowDown')
        cy.focused().contains('Tree item 1.1')
        cy.focused().should('have.attr', 'expanded')
        cy.realPress('ArrowLeft')
        cy.focused().should('not.have.attr', 'expanded')
    })
})
