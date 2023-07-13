import 'cypress-iframe'

describe('Mouse Actions',()=>{


    it('Mouseover',()=>{

        cy.visit('https://demo.opencart.com/')
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").click()

    })

    it.only('Doubleclick',()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded("#iframeResult");
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
       
    })





})