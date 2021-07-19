export class CheckoutOverviewPage {

    finish() {
        cy.get('[data-test=finish]')
            .click()
    }

}