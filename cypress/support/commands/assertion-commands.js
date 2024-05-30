Cypress.Commands.add('assertElementExists', (locator) => {
    cy.get(locator, { timeout: 50000 }).should('exist');
});

Cypress.Commands.add('containsElement', (locator, text) => {
    cy.get(locator).contains(text).should('be.visible');
});

Cypress.Commands.add('assertButtons', (locator) => {
    cy.get(locator, { timeout: 50000 }).should('exist').and('be.visible').and('be.enabled');
});