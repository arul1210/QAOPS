import { expect,Locator,Page } from "@playwright/test";
export class Dashboardpage
{
    page:Page
    products:Locator
    productsText:Locator
    addCard:Locator

    constructor(page:Page)
    {       
        this.page=page
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.addCard = page.locator("[routerlink*='cart']")

    }

async searchProductAddtoCard(productName:string)
{

     const titles = await this.productsText.allTextContents()
    console.log(titles)
        await this.products.first().waitFor(); // very npx important
        const count = await this.products.count();
       
        for (let i = 0; i < count; i++){
            let productText:any
           productText= await this.products.nth(i).locator("b").textContent();
          if( productText.trim() === productName)
    
            {
               await this.products.nth(i).locator("button.w-10").click();
                break;
            }
    
       }
    
      
}

async addTOCard()
{

     await this.addCard.click();
}

}
module.exports={Dashboardpage}