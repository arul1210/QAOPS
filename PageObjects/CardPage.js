const {expect} = require('@playwright/test');
class CartPage
{

    constructor(page){

        this.page = page
        this.productNameList = page.locator("h3")
        this.clickTheCardButton = page.locator("text=Checkout")

   }

   

     async verifyTheProductIsDisplayed(productName){
        await this.productNameList.first().waitFor();
        const product = this.getProductName(productName)
        await expect(product).toBeVisible();
    }

    async clickTheCard(){
         await this.clickTheCardButton.click();
    }

    getProductName(productName){
        return this.page.locator(`h3:has-text("${productName}")`)
    }
}

module.exports={CartPage}