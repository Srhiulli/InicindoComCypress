describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header')
    .contains(/Testing Fundamentals/i)
  })
    it('Accordion works correctly', () => {
      cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
      cy.getDataTest('accordion-item-1') .find('div[role="button"]').click()
      cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
      cy.getDataTest('accordion-item-1').find('div[role="button"]').click()
      cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
})
})
