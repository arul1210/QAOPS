const { expect } = require('@playwright/test')
import { Expect, type Page,type Locator } from "@playwright/test";
import path from "node:path";


 export class OrderReviewPage {

    page:Page;
    selectCountry:Locator
    Dropdowncountry:Locator
    orderemail:Locator
    actionSubmit:Locator
   

    constructor(page:Page) {
        this.page = page;
        this.selectCountry = page.locator("[placeholder='Select Country']")
        this.Dropdowncountry = page.locator(".ta-results")
        this.orderemail = page.locator(".user__name [type='text']")
        this.actionSubmit = page.locator(".action__submit")


    }

    async selectTheCountry(CountryCode:string, CountryName:string) {

        await this.selectCountry.pressSequentially(CountryCode);//enter the text one by one
        const dropdown = this.Dropdowncountry;
        await dropdown.first().waitFor();
        const options = await dropdown.locator("button").count();
        for (let i = 0; i < options; ++i) {
            let text:any;
             text = await dropdown.locator("button").nth(i).textContent();

            if (text.trim() === CountryName) {
                await dropdown.locator("button").nth(i).click();
                break;
            }

        }


    }


    async verifyTheEmail(email:string) {
        await expect(this.orderemail.first()).toHaveText(email);
        await this.actionSubmit.click();

    }
}

module.exports = { OrderReviewPage }