import { Given } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = 'https://www.webdriveruniversity.com/Contact-Us/contactus.html'

Given(`I am on the 'Contact us' page`, () => {
    cy.visit(url);
})