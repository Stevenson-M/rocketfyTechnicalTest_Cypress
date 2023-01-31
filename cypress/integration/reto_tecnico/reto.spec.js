import LoginPage from "../../support/pages/Loginpage"
import HomePage from "../../support/pages/HomePage"
import StorePage from "../../support/pages/StorePage"

const loginPage = new LoginPage()
const homePage = new HomePage()
const storePage = new StorePage()


describe('prueba tecnica', () => {
  beforeEach(() => {
    cy.visit('https://pr-407-rocketfy-v4.surge.sh/')
  })


  it('Flujo de navegacion', () => {

    const user = "qa2prulatam@testrocketfy.co";
    const password = "M1234567*"


    loginPage.fillUserInput(user)
    loginPage.fillPasswordInput(password)
    loginPage.clickLoginButton()

    homePage.clickBurgerButtom()
    homePage.clickStoreButtom()

    storePage.clickConfigurationButtom()
    storePage.clickNewLogoButtom()

    storePage.upploadLogo()
    
    storePage.validateLogo()
  })




})
