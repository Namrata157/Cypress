
//My first test
describe('My first test',()=>
{

    it('test1',()=>
    {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Ggle')
        

    }
    
    )
}
)
