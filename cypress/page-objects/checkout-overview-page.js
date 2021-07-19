export class CheckoutOverviewPage {

    finish() {
        cy.pause()
        cy.get('[data-test=finish]')
            .click()
    }

}