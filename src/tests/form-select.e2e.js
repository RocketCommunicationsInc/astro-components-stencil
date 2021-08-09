describe('Select with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-select.html')
    })
    it(' should submit the correct value when using a form', () => {
        cy.get('#ruxSelect')
            .find('select')
            .select('blue')
            .should('have.value', 'blue')
        cy.get('#form').submit()
        cy.get('#log').contains('bestThing:blue')
    })

    it(' should default to the option with no value', () => {
        cy.get('#ruxSelect').find('select').should('have.value', '')
    })

    it('should be disabled if disabled attribute is true', () => {
        cy.get('#ruxSelect')
            .get('rux-select')
            .then(($select) => {
                $select[0].setAttribute('disabled', true)
            })
        cy.get('#ruxSelect').find('select').should('be.disabled')
    })

    it('should not submit a value if disabled', () => {
        cy.get('#ruxSelect')
            .get('rux-select')
            .then(($select) => {
                $select[0].setAttribute('disabled', true)
            })
        cy.get('#ruxSelect').find('select').select('green', { force: true })
        cy.get('#form').submit()
        cy.get('#log').should('not.contain', 'bestThing:green')
    })
})
