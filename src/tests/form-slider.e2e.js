describe('Slider with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:4444/tests/pages/form-slider.html')
    })
    it('submits the correct value when using a form', async () => {
        cy.get('#ruxCheckbox').click()
        cy.get('#nativeCheckbox').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxCheckbox:foo')
        cy.get('#log').contains('nativeCheckbox:foo')
    })

    // it('does not allow input if disabled', () => {

    // });
})
