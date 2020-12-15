describe('A User can see play buttons', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it('displays three buttons', () => {
    cy.get("[data-cy='rock-button']").click()
  });
})
