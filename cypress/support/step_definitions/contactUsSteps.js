import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import ContactUsPage from "../pages/contactUsPage";

const contactUsPage = new ContactUsPage();

Given(`I am on the Contact Us page`, () => {
    contactUsPage.navigateToContactUsPage();
})

When(`I type in {string} as first name`, (firstName) => {
    contactUsPage.typeFirstName(firstName);
})


When(`I type in {string} as last name`, (lastName) => {
    contactUsPage.typeLastName(lastName);
})


When(`I type in {string} as email address`, (email) => {
    contactUsPage.typeEmail(email);
})

When(`I type in {string} as comment`, (comment) => {
    cy.get('textarea[name="message"]').click().type(comment);
}) 

When(`I submit the form`, () => {
    contactUsPage.submitContactUsForm();
}) 

Then('I should see the message {string}', (message) => {
    contactUsPage.assertThatMessageIsDisplayed(message);
})