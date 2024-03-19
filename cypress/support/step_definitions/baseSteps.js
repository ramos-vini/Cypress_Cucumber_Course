import {After, AfterAll, Before} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log('Executes before every single scenario.');
});

Before({tags: "@smoke"}, () => {
    cy.log('Executes before every @smoke scenario.');
});

After(() => {
    cy.log('Executes after every single scenario.');
});

AfterAll(()=> {
    cy.log("Executes after all scenarios.")
});