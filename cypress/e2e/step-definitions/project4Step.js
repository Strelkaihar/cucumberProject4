const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
const Project4 = require("../../pages/Project4");

const project4 = new Project4()


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	project4.getHeading().should('have.text', heading)
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project4.getTableHeaders().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()
	
	project4.getTableRows().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (buttonName) => {
	project4.getButtonByLabel(buttonName).should('be.enabled')
})

Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	project4.getTotal().should('have.text',total)
})

When(/^the user clicks on the "([^"]*)" button$/, (buttonName) => {
	project4.getButtonByLabel(buttonName).click()
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (newProductHeader) => {
	project4.getAddNewProductHeader().should('have.text', newProductHeader)
})


Then(/^the user should see the label$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project4.getAddProductsLable().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project4.getRowInfo().each((el, index) => {
		cy.wrap(el).should('have.text', arr[index])
	})
})


Then(/^the user should see the input box is enabled$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project4.getAddProductInputField().each((el, index) => {
		cy.wrap(el).should('have.attr', 'id', arr[index].toLowerCase())
	})
})

Then(/^the user should not see the "([^"]*)" modal$/, () => {
	project4.getAddNewProductHeader().should('not.exist')
})

Then(/^the user enters the following inputs$/, (dataTable) => {
	const arr = dataTable.rawTable.flat()

	project4.getAddProductInputField().each((el, index) => {
		cy.wrap(el).type(arr[index])
	})
})















