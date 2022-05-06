describe("testing MDN's search functionality with Cypress", () => {
  beforeEach(() => {
    cy.visit("https://developer.mozilla.org/en-US/");
  });
  it("inputs keywords into search input", () => {
    cy.get("#top-nav-search-q").click().type(".reduce(){enter}");
    cy.get("#languages-switcher-button > .button-wrap").click();
    cy.get(".submenu > :nth-child(3) > .button > span").click();
    cy.get(".main-page-content > :nth-child(2) > p").should("contain",
      "La méthode reduce() applique une fonction"
    );
  });
});
