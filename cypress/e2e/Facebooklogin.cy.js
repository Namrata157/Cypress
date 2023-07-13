//Facebook login
describe('facebook Login',()=>
{
    it('login',()=>
    {
        cy.visit("https://www.facebook.com/")
        cy.get("#email").type("8412871890")
        cy.get("#email").should('have.value',8412871890)
        cy.get("#pass").type("8412871890")
        cy.get('#loginbutton').click()

    })


})
