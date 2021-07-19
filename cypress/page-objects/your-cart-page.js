export class YourCartPage {

    checkout() {
        cy.get('[data-test=checkout]')
            .click()
    }

}