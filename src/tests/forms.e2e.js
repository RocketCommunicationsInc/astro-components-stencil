describe('Forms', () => {
    beforeEach(() => {
        cy.visit('localhost:3333/tests/pages/forms.html')
    })
    it('renders', async () => {
        cy.get('#input').type('Hello')
        cy.get('#input2').type('Hello')
        cy.get('#form').submit()
        cy.get('#log').contains('timeStamp:Hello')
    })
})
