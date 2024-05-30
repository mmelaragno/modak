const CART_BUTTON = '.shop-cart--responsive--NnGUleD > .shop-cart--number--axE62FE';
const PAY_BUTTON = '.cart-summary > .comet-v2-btn';

Cypress.Commands.add('goCart', () => {
    cy.clickElement(CART_BUTTON);
    cy.assertButtons(PAY_BUTTON);
})