import BasePage from "./basePage";

class ContactUsPage extends BasePage {

    assertThatIamOnContactUsPage(){
        cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');
    }
}

export default ContactUsPage;