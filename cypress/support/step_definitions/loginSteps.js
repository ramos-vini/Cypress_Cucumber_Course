const { Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");

baseUrl = "https://www.webdriveruniversity.com/Login-Portal/index.html";

Given("I am on the Login page", () => {
  cy.visit(baseUrl);
});

When("I type in {string} as username", (username) => {
  cy.get("form input#text").click().type(username);
});

When("I type in {string} as password", (password) => {
  cy.get("form input#password").click().type(password);
});

When("I click on the Login button with {string} credentials", (status) => {
  // Event listener for the alert popup message
  cy.on("window:alert", (message) => {
    if (status == "valid") {
      expect(message).to.equal("validation succeeded");
    } else {
      expect(message).to.equal("validation failed");
    }
  });

  cy.get("form #login-button").click();
});

Then("I should see a validation alert", () => {
  // This step is only for a clear steps sequence on the feature file
  // It is implemented on the previous step 'When I click on the Login button'
});
