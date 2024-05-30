Cypress.Commands.add('clickElement', (locator) => {
    let element = cy.get(locator).should('exist');
    element.click();
});

Cypress.Commands.add('typeText', (locator, text) => {
    cy.get(locator).clear().type(text);
});