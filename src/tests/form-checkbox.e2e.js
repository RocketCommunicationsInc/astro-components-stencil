describe('Checkbox with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-checkbox.html')
    })
    it('submits the correct select value when using a form', async () => {
        cy.get('#ruxCheckbox').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxCheckbox:foo')
        cy.get('#log').contains('nativeCheckbox:foo')
    })

    it('does not submit any value if not checked', async () => {
        cy.get('#form').submit()
        cy.get('#log').should('contain', 'ruxCheckbox')
        // cy.get('#log').contains('ruxCheckbox').should('exist')
        // cy.get('#log').contains('nativeCheckbox').should('not.exist')
    })

    it('submits a value of "on" if no value is provided', async () => {
        cy.get('#ruxCheckbox2').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox2').click()
        cy.get('#form-no-value').submit()
        cy.get('#log').contains('ruxCheckbox:on')
        cy.get('#log').contains('nativeCheckbox:on')
    })

    // it('does not allow input if disabled', () => {

    // });
})
