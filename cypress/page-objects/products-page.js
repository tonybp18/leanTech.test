export class ProductPage {

    filter(option){
        cy.get('[data-test=product_sort_container]')
            .select(option)
        return this
    }

    addToCartProductInPosition(position) {
        cy.get('#inventory_container .inventory_item')
            .eq(position)
            .contains("Add to cart")
            .click()
    }

}