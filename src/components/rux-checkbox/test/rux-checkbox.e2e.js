describe('Checkbox', () => {
    beforeEach(() => {
        cy.visitStory('components-checkbox--default-story')
    })
    it('renders', () => {
        cy.get('rux-checkbox').should('have.class', 'hydrated')
    })
    it('emits the onblur event', () => {
        cy.get('rux-checkbox').shadow().find('input').click({ force: true })
        cy.get('rux-checkbox').blur()
    })
})
