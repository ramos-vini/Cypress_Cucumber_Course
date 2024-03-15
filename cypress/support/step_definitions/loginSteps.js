const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
import BasePage from "../pages/basePage";
import LoginPage from "../pages/LoginPage";

const basePage = new BasePage();
const loginPage = new LoginPage();

let alertPopupStub;

Given("I am on the Login page", () => {
  loginPage.navigateToLoginPage();
});

When("I type in {string} as username", (username) => {
  loginPage.typeUsername(username);
});

When("I type in {string} as password", (password) => {
  loginPage.typePassword(password)
});

When("I click on the Login button", (status) => {
  alertPopupStub = cy.stub();
  // Event listener assigns the callback function to our stub
  cy.on("window:alert", alertPopupStub);
  loginPage.clickOnLoginButton();
});

Then("I should see a validation alert with {string} status", (status) => {
    if(status == 'valid'){
        expect(alertPopupStub).to.have.been.calledWith('validation succeeded');
    }
    else {
        expect(alertPopupStub).to.have.been.calledWith('validation failed');
    }
});
