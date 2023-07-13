class Login
{


    setUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
    }

    clickLoginBtn()
    {
        cy.get("button[type='submit']").click()
    }


}

export default Login