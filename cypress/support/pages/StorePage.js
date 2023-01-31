var pageLocators = {
    configurationButtom : '[label="Configuración"] > .tab-navigation__item',
    newLogoButtom : '.radius-2 > .flex-col > .btn',
    logoImage : '.flex-col > .flex > .object-cover',
    file: 'input[type="file"]',
}


class StorePage {
    configurationButtom(){ return cy.get(pageLocators.configurationButtom)}
    newLogoButtom(){ return cy.get(pageLocators.newLogoButtom)}
    logoImage(){ return cy.get(pageLocators.logoImage)}
    file(){ return cy.get(pageLocators.file)}

    clickConfigurationButtom(){ this.configurationButtom().click()}
    
    clickNewLogoButtom(){ this.newLogoButtom().click()}

    upploadLogo() {
        const fileName = 'logo.png';
        cy.fixture(fileName).then(fileContent => {
            this.file().attachFile({ fileContent, fileName, mimeType: 'image/png', encoding: 'base64' });
          });
      }

      validateLogo(){
        const fileName = 'logo.png';
        this.logoImage().should('have.attr', 'src').should('include', fileName);
        }
}

export default StorePage