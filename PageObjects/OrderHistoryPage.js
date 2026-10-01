const { expect } = require('@playwright/test')

class OrderHistoryPage {

    constructor(page) {

        this.page = page
        this.confirmText = page.locator(".hero-primary")
        this.orderidlocator = page.locator(".em-spacer-1 .ng-star-inserted")
        this.clickTheOrderPage = page.locator("button[routerlink*='myorders']")
        this.tableBody = page.locator("tbody")
        this.getRows =page.locator("tbody tr");
        this.validateOrder=page.locator(".col-md-6 .col-text")
        
    }



    async getTheOrderId(confirmationText) {

        await expect(this.confirmText).toHaveText(confirmationText);
        const orderId = await this.orderidlocator.first().textContent();
        console.log(orderId);
        return orderId
        
    }

    async selectTheOrderPage() {

        await this.clickTheOrderPage.click();
    }

    async validateTheOrderID(orderId) {

        await this.tableBody.waitFor();

        const rows =  this.getRows
        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
            const tableOrderId = await rows.nth(i).locator("th").textContent();

            if (orderId.includes(tableOrderId)) {
                await rows.nth(i).locator("button:has-text('View')").click();
                break;
            }
        }

        const finalOrderId = await this.validateOrder.textContent();

        expect(orderId.includes(finalOrderId)).toBeTruthy();
    }
}

module.exports={OrderHistoryPage}