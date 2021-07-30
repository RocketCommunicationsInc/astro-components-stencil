describe('Forms', () => {
    beforeEach(() => {
        cy.visit('localhost:3333/pages/forms/test.html')
    })
    it('renders', async () => {
        cy.get('#input').type('Hello')
        cy.get('#input2').type('Hello')
        cy.get('#form').submit()
        cy.get('rux-input-field').should('have.class', 'hydrated')
    })
})
