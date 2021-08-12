describe('Checkbox with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:8080/tests/pages/form-checkbox.html')
    })
    it('submits the correct select value when using a form', async () => {
        cy.get('#ruxCheckbox').click()
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        // cy.get('#log').contains('ruxCheckbox:foo')
        cy.get('#log').contains('nativeCheckbox:foo')
    })

    // it('does not allow input if disabled', () => {

    // });
})
