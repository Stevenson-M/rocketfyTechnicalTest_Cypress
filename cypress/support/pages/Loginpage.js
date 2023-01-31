var pageLocators = {
    
    userInput : '.mt-2 > .block > .input > .ng-untouched',
    passwordInput : ':nth-child(2) > .block > .input > .ng-untouched',
    loginButton : '.btn > span',
}

class LoginPage {
    userInput(){ return cy.get(pageLocators.userInput)}
    passwordInput(){ return cy.get(pageLocators.passwordInput)}
    loginButton(){ return cy.get(pageLocators.loginButton)}

    fillUserInput(user){ this.userInput().type(user)}
    fillPasswordInput(password){ this.passwordInput().type(password)}
    clickLoginButton(){ this.loginButton().click()}

}

export default LoginPage