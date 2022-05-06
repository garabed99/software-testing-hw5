describe("testing MDN's search functionality with Cypress", () => {
  beforeEach(() => {
    cy.visit("https://developer.mozilla.org/en-US/");
  });
  it("inputs keyword into search input and checks title", () => {
    cy.get("#top-nav-search-q").click().type(".reduce(){enter}");
    cy.get("h1").should("have.text", "Array.prototype.reduce()");
  });

  it("checks career in marketing in US", () => {
    cy.get(".page-footer-nav-col-1 > .footer-nav-list > :nth-child(3) > a")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("include", "/careers/listings");
    cy.get("main > :nth-child(3)").should("contain.text", "Remote US");
  });
});
