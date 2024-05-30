describe('AliExpress', () => {

    before(() => {
        cy.enterAliExpress();
        });

    it('Search for "instax mini" and check the second item on the second page', () => {
        const product = "instax mini"
        const page = "2"

        cy.acceptPromps();
        cy.searchproduct(product);
        cy.searchSubmit();
        cy.navigateToPage(page);
        cy.checkItemAvailable();
        cy.goCart();
    });
});