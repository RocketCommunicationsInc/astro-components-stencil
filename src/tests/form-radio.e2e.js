describe('Radio with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-radio.html')
    })
    it('submits the correct value when using a form', () => {
        cy.get('#ruxRadioBlue').shadow().find('input').click({ force: true })
        cy.get('#nativeRadioBlue').click()
        cy.get('#form').submit()
        //Assert only two values were submitted.
        cy.get('#log').children().its('length').should('eq', 2)

        cy.get('#log').contains('ruxColor:blue')
        cy.get('#log').contains('nativeColor:blue')
    })

    it('submits a value of "on" if no value is provided', () => {
        cy.get('#ruxRadioBlue2').shadow().find('input').click({ force: true })
        cy.get('#nativeRadioBlue2').click()
        cy.get('#form-no-value').submit()
        //Assert only two values were submitted.
        cy.get('#log').children().its('length').should('eq', 2)

        cy.get('#log').contains('ruxColor:on')
        cy.get('#log').contains('nativeColor:on')
    })
    // it('does not allow input if disabled', () => {

    // });
})
