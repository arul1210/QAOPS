//const {expect} = require('@playwright/test');
import { expect, Locator,Page } from "@playwright/test";
 export class CartPage
{
    page:Page
    productNameList:Locator
    clickTheCardButton:Locator

    constructor(page:Page){

        this.page = page
        this.productNameList = page.locator("h3")
        this.clickTheCardButton = page.locator("text=Checkout")

   }

   

     async verifyTheProductIsDisplayed(productName:string){
        await this.productNameList.first().waitFor();
        const product = this.getProductName(productName)
        await expect(product).toBeVisible();
    }

    async clickTheCard(){
         await this.clickTheCardButton.click();
    }

    getProductName(productName:string){
        return this.page.locator(`h3:has-text("${productName}")`)
    }
}

module.exports={CartPage}