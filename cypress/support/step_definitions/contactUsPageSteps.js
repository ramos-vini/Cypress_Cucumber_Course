import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../pages/basePage";

const basePage = new BasePage();

Given(`I am on the Contact Us page`, () => {
    basePage.navigateTo('/Contact-Us/contactus.html');
})

When(`I type in {string} as first name`, (first_name) => {
    cy.get('[name="first_name"]').click().type(first_name);
})


When(`I type in {string} as last name`, (last_name) => {
    cy.get('[name="last_name"]').click().type(last_name);
})


When(`I type in {string} as email address`, (email) => {
    cy.get('[name="email"]').click().type(email);
})

When(`I type in {string} as comment`, (comment) => {
    cy.get('textarea[name="message"]').click().type(comment);
}) 

When(`I submit the form`, () => {
    cy.get('input[type="submit"]').click();
}) 

Then(`I should see a success message`, () => {
    cy.contains('Thank You for your Message!');
    // cy.get('h1').should('have.text', 'Thank You for your Message!'); // Exact assertion
})

Then(`I should see an invalid email address error message`, () => {
    cy.contains('Error: Invalid email address');
}) 

Then('I should see the message {string}', (message) => {
    cy.contains(message);
})