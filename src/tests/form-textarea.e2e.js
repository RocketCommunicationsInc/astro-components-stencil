describe('Text Area with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-textarea.html')
    })
    it('submits the correct value when using a form', () => {
        cy.get('#form').submit()
        cy.get('#log').contains('test1:TextArea Test 1')
        cy.get('#log').contains('native:Native Text Area')
    })
    it('submits correct value after typing into it', () => {
        cy.get('#noval').shadow().find('textarea').type('Eyes Up')
        cy.get('#form').submit()
        cy.get('#log').contains('noval:Eyes Up')
    })
    it('does not submit value if disabled', () => {
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'Disabled')
    })
})
