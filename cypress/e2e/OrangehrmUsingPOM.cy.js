import Login from "../PageObjects/LoginPage";

describe("Orange HRM",()=>{

    it("Orange Hrm login using POM and fixture",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("OrangeHrm").then((data)=>{

            const ln=new Login()
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickLoginBtn()

            
        })




    })




})