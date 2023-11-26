class Project4 {

    getHeading() {
       return cy.get('.is-size-3')
    }
    getTableHeaders() {
        return cy.get('tr > th')
    }
    getTableRows(){
        return cy.get('tr > td')
    }
    getAddButton() {
        return cy.get('#add_product_btn')
    }
    getCloseButton(){
        return cy.get('.delete')
    }
    getSubmitButton(){
        return cy.get('#submit')
    }
    getTotal(){
        return cy.get('#total_amount')
    }
    getAddNewProductHeader() {
        return cy.get('#modal_title')
    }
    getAddProductsLable() {
        return cy.get('#name_form > div > label')
    }
    getAddProductInputField() {
        return cy.get('#name_form input')
    }
    getRowInfo() {
        return cy.get('tr:nth-child(4) > td')
    }


    getButtonByLabel(label){
        switch(label) {
            case "ADD PRODUCT": 
                return this.getAddButton()
            case "X": 
                return this.getCloseButton()
            case "SUBMIT":
                return this.getSubmitButton()
        }
    }
}
module.exports = Project4