const {test,expect}=require('@playwright/test');

test('PopupValidation', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://rahulshettyacademy.com/practice");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on('dialog',dialog => dialog.accept());
    //page.on('dialog',dialog => dialog.dismiss());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

    //iframe
    const framepage = page.frameLocator("#courses-iframe ");
    await framepage.locator("li a[href*='lifetime-access']:visible").click();
    const content = await framepage.locator("div.text h2").textContent();
    console.log(content.split(" ")[1]);


});