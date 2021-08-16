describe('Input Field', () => {
    beforeEach(() => {
        cy.visitStory('components-input-field--default-story')
    })
    it('renders', () => {
        cy.get('rux-input-field').should('have.class', 'hydrated')
    })
})

describe('Input Field with Form', () => {
    const testString = 'Hello World'

    beforeEach(() => {
        cy.visitForm('input-field')
    })

    it('submits the correct value when using a form', async () => {
        cy.get('#ruxInput').shadow().find('input').type(testString)
        cy.get('#nativeInput').type(testString)

        cy.get('#form').submit()

        cy.get('#log').children().its('length').should('eq', 2)

        cy.get('#log').contains(`ruxInput:${testString}`)
        cy.get('#log').contains(`nativeInput:${testString}`)
    })

    it('does not submit disabled even with value', async () => {
        cy.get('#ruxInput2')
            .shadow()
            .find('input')
            .invoke('val')
            .should('have.value', testString)

        cy.get('#nativeInput2').should('have.value', testString)

        cy.get('#ruxInput2').should('be.disabled')
        cy.get('#ruxInput2').shadow().find('input').should('be.disabled')
        cy.get('#nativeInput2').should('be.disabled')

        cy.get('#form').submit()

        cy.get('#log').children().its('length').should('eq', 2)

        cy.get('#log').contains(`ruxInput:${testString}`)
        cy.get('#log').contains(`nativeInput:${testString}`)
    })

    it('does not submit a value if input is cleared', () => {
        cy.get('#ruxInput')
            .shadow()
            .find('input')
            .type(testString)
            .should('have.value', testString)
        cy.get('#nativeInput').type(testString).should('have.value', testString)

        cy.get('#ruxInput').shadow().find('input').clear()
        cy.get('#nativeInput').clear()

        cy.get('#form').submit()
        cy.get('#log').should('not.contain', `ruxInput:${testString}`)
        cy.get('#log').should('not.contain', `nativeInput:${testString}`)
    })

    it('passes correct label', () => {
        cy.get('#ruxInput')
            .shadow()
            .find('.rux-input-label')
            .contains('Input Field')
    })

    it('prepends aesthetics to lable if required', () => {
        cy.get('#ruxInput3')
            .shadow()
            .find('.rux-input-label .rux-input-label__asterisk')
            .contains('*')
    })

    it('prepends help text if attribute set', () => {
        cy.get('#ruxInput3')
            .shadow()
            .find('.rux-help-text')
            .contains('Test Help Text')
    })
})
