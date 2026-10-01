const {test}= require("@playwright/test")

test("screenshot", async ({page})=>
{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await page.locator('#displayed-text').screenshot({path: 'partialscreenshot.png'})
await page.screenshot({path:'screenshot.png'})



})






