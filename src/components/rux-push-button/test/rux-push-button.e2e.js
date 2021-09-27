describe('Push Button with Form', () => {
    beforeEach(() => {
        cy.visitComponent('rux-push-button')
    })

    it('renders', () => {
        cy.get('rux-push-button').should('have.class', 'hydrated')
    })

    it('submits the correct value when using a form', () => {
        // Looks like there are some issues with Cypress + clicking range inputs so this will need to be tweaked a little
        cy.get('#ruxPushButton').shadow().find('input').click({ force: true })
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxPushButton:true')
        cy.get('#log').contains('nativeCheckbox:true')
    })
    it('does not submit any value if not checked', () => {
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxPushButton')
    })
    it('does not submit a value if checked and then unchecked', () => {
        cy.get('#nativeCheckbox').click()
        cy.get('#ruxPushButton').shadow().find('input').click({ force: true })
        cy.get('#ruxPushButton').shadow().find('input').click({ force: true })
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxPushButton')
    })
    it('does not allow input if disabled', () => {
        cy.get('#ruxPushButtonDisabled')
            .shadow()
            .find('input')
            .should('be.disabled')
        cy.get('#ruxPushButtonDisabled')
            .shadow()
            .find('input')
            .click({ force: true })
        cy.get('#ruxPushButtonDisabled')
            .shadow()
            .find('input')
            .should('not.be', 'checked')
        cy.get('#ruxPushButton').click()
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'ruxPushButtonDisabled')
    })
    it('submits a value of on if no value was given', () => {
        cy.get('#ruxPushButtonNoVal')
            .shadow()
            .find('input')
            .click({ force: true })
        cy.get('#form').submit()
        cy.get('#log').contains('ruxPushButtonNoVal:on')
    })
})
