describe('Tree', () => {
    beforeEach(() => {
        cy.visit(
            'http://localhost:6006/iframe.html?id=components-tree--tree&args=&viewMode=story'
        )
    })
    it('Visits the Kitchen Sink', async () => {
        // cy.realPress('Enter');
        const parent = cy.get('rux-tree-node').first().shadow().find('.parent')
        parent.focus()
        cy.wait(1000)
        // cy.get('rux-tree').shadow().find('.parent').focus()

        // cy.get('#node-7').focus()
        cy.focused().should('have.attr', 'expanded')

        // cy.focused(r => {
        //   console.log('focused', r);
        cy.wait(1000)
        cy.realPress('ArrowDown')
        cy.focused().contains('Tree item 1.1')
        cy.focused().should('have.attr', 'expanded')
        cy.wait(1000)
        cy.realPress('ArrowLeft')

        cy.focused().should('not.have.attr', 'expanded')
        // })
        // cy.focused().should('equal', parent)
        // firstNode.focus()
        // console.log('node', firstNode);
    })
})
