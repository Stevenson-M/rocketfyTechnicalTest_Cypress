var pageLocators = {
    burgerButtom : '.topbar__toggle > .art-icon > svg > path',
    storeButtom: ':nth-child(2) > art-sidebar-item > .sidebar__item > button > .transition-fast',
}

class HomePage {
    burgerButtom(){ return cy.get(pageLocators.burgerButtom)}
    storeButtom(){ return cy.get(pageLocators.storeButtom)}

    clickBurgerButtom(){ this.burgerButtom().click()}
    clickStoreButtom(){ this.storeButtom().click()}
}

export default HomePage