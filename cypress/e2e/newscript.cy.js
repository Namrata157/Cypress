describe('Script',()=>
{
    it('Test1',()=>
    {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get(".display-3").invoke("text").then((val)=>{

            cy.log(val)
            //expect(val).to.be.equal("Test automation practice form")  
           cy.wrap(val).should('equal','Test automation practice form')
        })
        

    })

    it('Test2',()=>
    {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get(".display-3").then((ele)=>{

            let value=ele.text()
            cy.log(value)
            cy.wrap(value).should('equal','Test automation practice form')


        })
        

    })

    it.only('Test3',()=>
    {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get(".display-3").should('have.text','Test automation practice form')
        

    })


})