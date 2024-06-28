# Rockectfy Cypress Technical Test 

## Description: 

In this project, automated tests are carried out on the web application https://pr-407-rocketfy-v4.surge.sh/ using Cypress(9.7.0) and Allure report.


### Prerequisites

[Node.js](https://nodejs.org/en/ "Node.js") minimum in its verse 16 is necessary to be able to run the project. Version 18.2.1 was used during the implementation of the project.

### Scripts

The neccesary scripts to run the tests are in the folder `cypress/package.json`.

* The scripts are: 
       
   *  ` npm run open`: Run the project by using Cypress interface.
    
   * `npx cypress run`: Run the project in a headless mode.
      
### Setup 
      1.Download/clone the project. 
      2.Run command npm install.
      3.Run one of the indicated scripts.
 
## Notes
  * Cypress version `9.7.0` .
  * Cucumber was used to write the tests in conjunction with the POM design pattern.
  * Tests are located inside the folder  `cypress/integration`. 
  * `cypress/fixtures` Contains data used throughout the framework.
  * The neccesary scripts to run the tests are in the folder `cypress/package.json`.
  
##  Resources

* [Node.js](https://nodejs.org/en/ "Node.js")
* [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress "Cypress Documentation")
