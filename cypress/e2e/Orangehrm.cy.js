

describe('All tests',()=>{

    it('Login using should assertion',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        cy.url().should('contain','dashboard')
        cy.title().should('contain','OrangeHRM')

        let expname='Albert'

        cy.get(".oxd-userdropdown-name").then((ele)=>{
           let actname=ele.text()
           cy.wrap(actname).should('not.contain',expname)
        })
    })

    it('Login using expect assertion',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        cy.url().should('contain','dashboard')
        cy.title().should('contain','OrangeHRM')

        let expname='Albert'

        cy.get(".oxd-userdropdown-name").then((ele)=>{
           expect(ele.text()).to.not.contain(expname)
        })
    })

    it.only('Login using custom commands',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.login("Admin","admin123")




    })




})