import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que usuario está logado no site", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user"); 
  cy.get("#password").type("secret_sauce"); 
  cy.get("#login-button").click(); 
  cy.url().should("include", "/inventory.html"); 
});

When("deseja realizar o logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click(); 
});

Then("deve ser redirecionado para a página de login", () => {
    cy.url().should("eq", "https://www.saucedemo.com/"); 
});