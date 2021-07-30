describe('Forms', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/forms.html')
    })
    it('submits the correct select value when using a form', async () => {
        cy.get('rux-select .rux-select').select('blue')
        cy.get('#form').submit()
        cy.get('#log').contains('bestThing:blue')
    })
})
