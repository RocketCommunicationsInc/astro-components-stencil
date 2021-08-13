describe('Modal', () => {
    beforeEach(() => {
        cy.visitStory('components-modal--modal')
    })
    it('renders', () => {
        cy.get('rux-modal').should('have.class', 'hydrated')
    })
    it('closes when click occurs outside modal', () => {
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .click('topLeft')
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })
    it('closes when enter key pressed', () => {
        cy.get('rux-modal').shadow().find('dialog').click()
        cy.get('body').type('{enter}')
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })
})
