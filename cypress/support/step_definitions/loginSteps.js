const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
import BasePage from "../pages/basePage";

const basePage = new BasePage();

let alertPopupStub;

Given("I am on the Login page", () => {
  basePage.navigateTo('/Login-Portal/index.html');
});

When("I type in {string} as username", (username) => {
  cy.get("form input#text").click().type(username);
});

When("I type in {string} as password", (password) => {
  cy.get("form input#password").click().type(password);
});

When("I click on the Login button", (status) => {
  alertPopupStub = cy.stub();
  // Event listener assigns the callback function to our stub
  cy.on("window:alert", alertPopupStub);
  cy.get("form #login-button").click();
});

Then("I should see a validation alert with {string} status", (status) => {
    if(status == 'valid'){
        expect(alertPopupStub).to.have.been.calledWith('validation succeeded');
    }
    else {
        expect(alertPopupStub).to.have.been.calledWith('validation failed');
    }
});
