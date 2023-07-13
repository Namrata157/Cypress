describe('Google',()=>{


    it('Google Autosuggestion',()=>{
        cy.visit('https://www.google.com/')
        cy.get("textarea[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get(".wM6W7d>span").each(($ele,index,$list)=>{

            //cy.log(ele.text());
            if($ele.text() ==='cypress automation tutorial')
            cy.wrap($ele).click()
        })

        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')


 

    })
    

})
