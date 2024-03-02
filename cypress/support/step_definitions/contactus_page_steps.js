import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = 'https://www.webdriveruniversity.com/Contact-Us/contactus.html'

Given(`I am on the 'Contact us' page`, () => {
    cy.visit(baseUrl);
})

When(`I type in my first name`, () => {
    cy.get('[name="first_name"]').click().type('Vinicius');
})

When(`I type in {string} as first name`, (first_name) => {
    
})

When(`I type in my last name`, () => {
    cy.get('[name="last_name"]').click().type('Ramos');
})

When(`I type in {string} as last name`, (last_name) => {
    
})

When(`I type in my email address`, () => {
    cy.get('[name="email"]').click().type('viniciusramos@email.com');
})

When(`I type in {string} as email address`, (email) => {
    
})

When(`I type in a comment`, () => {
    cy.get('textarea[name="message"]').click().type('My comment here.');
}) 

When(`I type in {string} and {int} as comment`, (string_message, int_message) => {
    
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