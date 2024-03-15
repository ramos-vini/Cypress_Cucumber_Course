import BasePage from "./basePage";

class LoginPage extends BasePage {

    navigateToLoginPage(){
        super.navigateTo('/Login-Portal/index.html');
    }

    typeUsername(username){
        cy.get("form input#text").click().type(username);
    }

    typePassword(password){
        cy.get("form input#password").click().type(password);
    }
    
    clickOnLoginButton(){
        cy.get("form #login-button").click();
    }
}

export default LoginPage;