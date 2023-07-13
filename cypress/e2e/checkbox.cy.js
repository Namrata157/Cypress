describe('All tests',()=>{

    it('checkbox',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get(".form-check-input[type='checkbox']").should('be.visible')
        .check().should('be.checked')

        cy.wait(2000)
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.wait(2000)

        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')

        })
    })
