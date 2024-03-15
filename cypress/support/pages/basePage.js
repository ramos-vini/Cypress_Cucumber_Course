class basePage {

    navigateTo(path){
        cy.fixture('config.json').then((data) => {
            cy.visit(data.baseUrl + path)
        });
    }

    getPageTitle(){
        return cy.title();
    }
}

export default basePage;