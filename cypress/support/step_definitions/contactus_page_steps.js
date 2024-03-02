import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = 'https://www.webdriveruniversity.com/Contact-Us/contactus.html'

Given(`I am on the 'Contact us' page`, () => {
    cy.visit(baseUrl);
})

When(`I type in my first name`, () => {

})

When(`I type in my last name`, () => {

})

When(`I type in my email address`, () => {

})

When(`I type in a comment`, () => {

}) 

When(`I submit the form`, () => {

}) 

Then(`I should see the message 'Thank You for your Message!'`, () => {

}) 