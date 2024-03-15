import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../pages/basePage";

const basePage = new BasePage();

Given(`I am on the Home page`, () => {
    basePage.navigateTo('/');
})

When(`I click on the Contact Us page link`, () => {
    cy.clickAndOpenInSameTab('#contact-us');
})


Then(`I am redirected to the Contact Us page`, () => {
    cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');
})