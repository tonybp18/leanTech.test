 /// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page"
import { MenuPage } from "../page-objects/menu-page"

 describe('Login Page Tests', () => {

    const loginPage = new LoginPage
    const menuPage = new MenuPage 

    it('Should successfully login with a standard user', () => {
        loginPage
            .login()

        menuPage
            .logout()
    })

    it('Should not login with a locked out user', () => {
        loginPage
            .navigate()
            .setUsername(Cypress.env('locked_out_user'))
            .setPassword(Cypress.env('locked_out_user_pass'))
            .clickLoginButton()
            .assertErrorMessage('Epic sadface: Sorry, this user has been locked out.')
    })

 })