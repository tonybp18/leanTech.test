export class LoginPage {

    navigate() {
        cy.visit(Cypress.env('URL'))
        return this
    }

    setUsername(username) {
        cy.get('[data-test=username]')
            .type(`${username}`)
        return this
    }

    setPassword(password) {
        cy.get('[data-test="password"]')
            .type(`${password}`)
        return this
    }

    clickLoginButton() {
        cy.get('input[data-test="login-button"]')
            .click()
        return this
    }

    getErrorMessage() {
        return cy.get('[data-test=error]')
    }

    assertErrorMessage(message) {
        cy.get('[data-test=error]')
            .contains(message)
            .should('be.visible')
        return this
    }

    login() {
        this.navigate()
        
        this.setUsername(Cypress.env('standard_user'))
        this.setPassword(Cypress.env('standard_user_pass'))
        
        this.clickLoginButton()

        cy.get('.app_logo')
            .should('be.visible')

        return this
    }

}