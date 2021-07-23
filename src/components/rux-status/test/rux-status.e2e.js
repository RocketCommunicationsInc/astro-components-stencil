describe('Status', () => {
    beforeEach(() => {
        cy.visitStory('components-status--default-·story')
    })
    it('renders', async () => {
        cy.get('rux-status').should('have.class', 'hydrated')
    })
})
