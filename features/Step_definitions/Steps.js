const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager');
const { expect } = require('@playwright/test')
const playwright = require('@playwright/test')

setDefaultTimeout(60 * 1000); // 60 seconds

Given('user able to login Ecommerce webside {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    
     //this.poManager is a world constructor
    const loginPage = this.poManager.getLoginPage()
    await loginPage.goto()
    await loginPage.validLogin(username, password)
});

When('add a product in AddToCard page and product name is {string}', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardpage = this.poManager.getDashboardPage()
    await this.dashboardpage.searchProductAddtoCard(productName)
    await this.dashboardpage.addTOCard()
});

Then('verify {string} is displayed in AddToCard page', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartpage = this.poManager.getTheCartPage()
    await cartpage.verifyTheProductIsDisplayed(productName)
    await cartpage.clickTheCard()
});
When('Enter the valid {string} and {string} details and place the order and verify {string}', async function (CountryCode, CountryName, username) {
    // Write code here that turns the phrase above into concrete actions
    const orderReview = this.poManager.orderreviewPage()
    await orderReview.selectTheCountry(CountryCode,CountryName)
    await orderReview.verifyTheEmail(username)
});

Then('verify order is present in the order history page and check the {string}', async function (confirmationText) {
    // Write code here that turns the phrase above into concrete actions
    const orderhistory = this.poManager.getOrderHistoryPage()
    const orderId = await orderhistory.getTheOrderId(confirmationText)
    await orderhistory.selectTheOrderPage()
    await orderhistory.validateTheOrderID(orderId)
});