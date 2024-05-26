describe('forms tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('testeeee@gmail.com')
        cy.contains(/Successfully subbed: teste@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.getDataTest('subscribe-button')
        cy.contains(/Successfully subbed: testeeee@gmail.com!/i).should('exist')
        cy.wait(4000)
        cy.contains(/Successfully subbed: testeeee@gmail.com!/i).should('not.exist')
        cy.get('@subscribe-input').type('testeeee@gmail.io')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/invalid eMail: testeeee@gmail.io!/, {timeout: 1000,matchCase: false}).should('exist')
        cy.wait(3000)
        cy.contains(/invalid eMail: testeeee@gmail.io!/, {timeout: 1000,matchCase: false}).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/, {timeout: 1000,matchCase: false}).should('exist')
        cy.contains(/fail!/, {timeout: 3000,matchCase: false}).should('not.exist')





    })
}) 