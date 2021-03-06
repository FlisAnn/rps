describe("A User can see play buttons", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Player can choose Rock", () => {
    cy.get("[data-cy='rock-button']").click();
  });

  it("Player can choose Paper", () => {
    cy.get("[data-cy='paper-button']").click();
  });

  it("Player can choose Scissors", () => {
    cy.get("[data-cy='scissors-button']").click();
  });
});
