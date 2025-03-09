import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("a página de login seja carregada", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("o usuario realiza o login com sucesso", ()    => {
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

Then("deve ser redirecionado para a página inicial", () => {
  cy.url().should("include", "/inventory.html");
  cy.contains("Swag Labs")
});