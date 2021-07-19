 /// <reference types="cypress" />

import { ProductPage } from "../page-objects/products-page"
import { LoginPage } from "../page-objects/login-page"
import { MenuPage } from "../page-objects/menu-page"
import { YourCartPage } from "../page-objects/your-cart-page"
import { CheckoutInformationPage } from "../page-objects/checkout-information-page"
import { CheckoutOverviewPage } from "../page-objects/checkout-overview-page"

 describe('Select and purchase products', () => {

    const loginPage = new LoginPage
    const menuPage = new MenuPage

    const filterOptions = {
        LOW_TO_HIGH: "Price (low to high)",
        HIGH_TO_LOW: "Price (high to low)"
    }

    beforeEach(() => {
        loginPage.login()
    })

    afterEach(() => {
        menuPage.resetAppState()
        menuPage.logout()
    })

    it('Should select and buy the lowest product', () => {

        const productPage = new ProductPage
        const yourCartPage = new YourCartPage
        const checkoutInformationPage = new CheckoutInformationPage
        const checkoutOverviewPage = new CheckoutOverviewPage

        productPage
            .filter(filterOptions.LOW_TO_HIGH)
            .addToCartProductInPosition(0)

        menuPage.goToYourCart()

        yourCartPage
            .checkout()

        checkoutInformationPage
            .setFirstName("Foo")
            .setLastName("Bar")
            .setPostalCode("1010")
            .continue()

        checkoutOverviewPage
            .finish()
    })

    it('Should select and buy the highest product', () => {

        const productPage = new ProductPage
        const yourCartPage = new YourCartPage
        const checkoutInformationPage = new CheckoutInformationPage
        const checkoutOverviewPage = new CheckoutOverviewPage

        productPage
            .filter(filterOptions.HIGH_TO_LOW)
            .addToCartProductInPosition(0)

        menuPage.goToYourCart()

        yourCartPage
            .checkout()

        checkoutInformationPage
            .setFirstName("Foo")
            .setLastName("Bar")
            .setPostalCode("1010")
            .continue()

        checkoutOverviewPage
            .finish()
    })

 })