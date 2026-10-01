const { expect } = require('@playwright/test')


class OrderReviewPage {

    constructor(page) {
        this.page = page;
        this.selectCountry = page.locator("[placeholder='Select Country']")
        this.Dropdowncountry = page.locator(".ta-results")
        this.orderemail = page.locator(".user__name [type='text']")
        this.actionSubmit = page.locator(".action__submit")


    }

    async selectTheCountry(CountryCode, CountryName) {

        await this.selectCountry.pressSequentially(CountryCode);//enter the text one by one
        const dropdown = this.Dropdowncountry;
        await dropdown.first().waitFor();
        const options = await dropdown.locator("button").count();
        for (let i = 0; i < options; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();

            if (text.trim() === CountryName) {
                await dropdown.locator("button").nth(i).click();
                break;
            }

        }


    }


    async verifyTheEmail(email) {
        await expect(this.orderemail.first()).toHaveText(email);
        await this.actionSubmit.click();

    }
}

module.exports = { OrderReviewPage }