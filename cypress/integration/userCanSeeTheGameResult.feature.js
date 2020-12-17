describe("User can see the result of the game", () => {
  describe("When Computer selects rock", () => {
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: winner => {
          cy.stub(winner.Math, 'floor').returns(0)
        }
      })
    })
    it('and Human selects rock it is a tie', () => {
      cy.get("[data-cy='rock-button']").click()
      cy.get("[data-cy='tie-message']").should('contain', "It's a tie!")
    } )

    it('and Human selects paper Human wins', () => {
      cy.get("[data-cy='paper-button']").click()
      cy.get("[data-cy='human-wins']").should('contain', "You win!")
    });


  });
});
