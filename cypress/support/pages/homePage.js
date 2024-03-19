import BasePage from "./basePage";

class HomePage extends BasePage {

    navigateToHomePage(){
        super.navigateTo('/');
    }

    clickOnContactUsPageLink(){
        cy.clickAndOpenInSameTab('#contact-us');
    }
}

export default HomePage;