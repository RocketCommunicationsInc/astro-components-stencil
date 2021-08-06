describe('Checkbox with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-checkbox.html')
    })
    it('submits the correct select value when using a form', () => {
        cy.get('#ruxCheckbox').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxCheckbox:foo')
        cy.get('#log').contains('nativeCheckbox:foo')
    })

    it('defaults to unchecked', () => {
        cy.get('#ruxCheckbox')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#nativeCheckbox').should('not.be', 'checked')
    })

    it('does not submit any value if not checked', () => {
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxCheckbox')
        cy.get('#log').should('not.contain', 'nativeCheckbox')
    })

    it('submits a value of "on" if no value is provided', async () => {
        cy.get('#ruxCheckbox2').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox2').click()
        cy.get('#form-no-value').submit()
        cy.get('#log').contains('ruxCheckbox:on')
        cy.get('#log').contains('nativeCheckbox:on')
    })

    it('does not allow input if disabled', () => {
        cy.get('#ruxCheckboxDisabled')
            .shadow()
            .find('input')
            .should('be.disabled')
        cy.get('#nativeCheckbox2').click()
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxCheckboxDisabled')
    })
})
