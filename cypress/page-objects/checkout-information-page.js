export class CheckoutInformationPage {

    setFirstName(name) {
        cy.get('[data-test=firstName]')
            .type(`${name}`)
        return this
    }

    setLastName(lastname) {
        cy.get('[data-test=lastName]')
            .type(`${lastname}`)
        return this
    }

    setPostalCode(postalCode) {
        cy.get('[data-test=postalCode]')
            .type(`${postalCode}`)
        return this
    }

    continue() {
        cy.get('[data-test=continue]')
            .click()
    }

}