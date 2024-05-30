const SEARCH_INPUT = '#search-words';
const SEARCH_BUTTON = '.search--submit--2VTbd-T';

Cypress.Commands.add('searchproduct', (text) => {
    cy.assertElementExists(SEARCH_INPUT);
    cy.typeText(SEARCH_INPUT, text);
})

Cypress.Commands.add('searchSubmit', () => {
    cy.assertElementExists(SEARCH_BUTTON);
    cy.clickElement(SEARCH_BUTTON);
})