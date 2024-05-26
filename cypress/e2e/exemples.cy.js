describe('Various exemples', () => {
    beforeEach(() => {
        cy.visit('/examples')

    })
    it('multi-page testings', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location("pathname").should("equal","/")

        cy.getDataTest('nav-overview').click()
        cy.location("pathname").should("equal","/overview")

        cy.getDataTest('nav-fundamentals').click()
        cy.location("pathname").should("equal","/fundamentals")

        cy.getDataTest("nav-forms").click()
        cy.location("pathname").should("equal","/forms")

        cy.getDataTest("nav-component").click()
        cy.location("pathname").should("equal","/component")

        cy.getDataTest("nav-best-practices").click()
        cy.location("pathname").should("equal","/best-practices")

        cy.getDataTest("nav-examples").click()
        cy.location("pathname").should("equal","/examples")
    })
    it('intercerpts', () => {
        cy.intercept("POST", 'http://localhost:3000/examples', {
                fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })
    it.only('grudges', () => {
        cy.contains(/Add Some Grudges/i)
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })
        cy.getDataTest('clear-button').should('not.exist')
        cy.getDataTest("grudge-input").within(() => {
            cy.get('input').type('Some Grudge')
        })
        cy.getDataTest('add-grudge-button').click()
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })
        cy.getDataTest("grudge-input").within(() => {
            cy.get('input').type('Item 2')
        })
        cy.getDataTest('add-grudge-button').click()

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contains.text', 'Some Grudge')
            cy.get('li').its(1).should('contains.text', 'Item 2')
        })
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            })
        })        
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
            cy.get('li').its(0).should('contains.text', 'Item 2')
        })
        cy.getDataTest('clear-button').click()
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })



    })
})