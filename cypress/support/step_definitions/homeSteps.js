import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import BasePage from "../pages/basePage";
import HomePage from "../pages/homePage";
import ContactUsPage from "../pages/contactUsPage";

const basePage = new BasePage();
const homePage = new HomePage();
const contactUsPage = new ContactUsPage();

Given(`I am on the Home page`, () => {
    homePage.navigateToHomePage();
})

When(`I click on the Contact Us page link`, () => {
    homePage.clickOnContactUsPageLink();
})


Then(`I am redirected to the Contact Us page`, () => {
    contactUsPage.assertThatIamOnContactUsPage();
})