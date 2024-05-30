const PAGINATION = '.comet-pagination-item-2 > a';

Cypress.Commands.add('navigateToPage', (page) => {
    cy.assertElementExists(PAGINATION);
    cy.get(PAGINATION).contains(page).click();
})