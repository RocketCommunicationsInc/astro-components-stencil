// import { newE2EPage } from '@stencil/core/testing'

describe('rux-slider', () => {
    beforeEach(() => {
        cy.visitStory('components-slider--default-story')
    })
    it('renders', () => {
        cy.get('rux-slider').should('have.class', 'hydrated')
    })
})

describe('Slider with Form', () => {
    beforeEach(() => {
        cy.visit('localhost:3333/tests/pages/form-slider.html')
    })
    it('submits the correct value when using a form', () => {
        // Unable to get positioning to work with click to change the value of either input.
        // Found the documented way via Cypress docs (https://docs.cypress.io/api/commands/trigger#Interact-with-a-range-input-slider)
        cy.get('#ruxSlider').as('range').invoke('val', 25).trigger('change')
        cy.get('#nativeSlider').as('range').invoke('val', 75).trigger('change')
        cy.get('#form').submit()
        cy.get('#log').contains('ruxSlider:25')
        cy.get('#log').contains('nativeSlider:75')
    })

    it('submits the default value in default state without interaction', () => {
        cy.get('#ruxSlider').click()
        cy.get('#form').submit()
        cy.get('#log').contains('ruxSlider:50')
        cy.get('#log').contains('nativeSlider:50')
    })

    it('does not allow input if disabled', () => {
        cy.get('#nativeSlider')
            .should('be.enabled')
            .invoke('prop', 'disabled', true)
            .should('be.disabled')
        // Rux Slider isn't a native element therefore the usage above must be different
        cy.get('#ruxSlider')
            .invoke('attr', 'disabled', true)
            .should('have.attr', 'disabled', 'disabled')
        cy.get('#form').submit()
        cy.get('#log').should('be.empty')
    })
})
