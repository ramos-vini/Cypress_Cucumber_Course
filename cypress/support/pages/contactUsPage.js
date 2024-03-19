import BasePage from "./basePage";

class ContactUsPage extends BasePage {

    elements = {
        first_name_field: () => cy.get('[name="first_name"]'),
        last_name_field: () => cy.get('[name="last_name"]'),
        email_field: () => cy.get('[name="email"]'),
        comment_field: () => cy.get('textarea[name="message"]'),
        submit_button: () => cy.get('input[type="submit"]')
    };

    navigateToContactUsPage(){
        super.navigateTo('/Contact-Us/contactus.html');
    }

    assertThatIamOnContactUsPage(){
        cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');
    }

    typeFirstName(firstName){
        this.elements.first_name_field().click().type(firstName);
    }

    typeLastName(lastName){
        this.elements.last_name_field().click().type(lastName);
    }

    typeEmail(email){
        this.elements.email_field().click().type(email);
    }

    typeComment(comment){
        this.elements.comment_field().click().type(comment);
    }
    
    submitContactUsForm(){
        this.elements.submit_button().click();
    }

    assertThatMessageIsDisplayed(message){
        cy.contains(message);
    }
}

export default ContactUsPage;