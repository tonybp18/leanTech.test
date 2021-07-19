export class MenuPage {

    showMenu() {
        cy.get('.bm-menu-wrap')
            .invoke('attr','aria-hidden')
            .then(isMenuHidden => {
                if(isMenuHidden) {
                    cy.get('#react-burger-menu-btn')
                        .click()
                }
            })
        return this
    }

    logout() {
        this.showMenu()

        cy.get('#logout_sidebar_link')
            .click()
    }

    resetAppState() {
        this.showMenu()

        cy.get('#reset_sidebar_link')
            .click()
    }
    
}