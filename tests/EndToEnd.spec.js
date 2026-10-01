const {test, expect} = require('@playwright/test');

test('End to End', async ({page})=>
{
 const productName = "ZARA COAT 3";  

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator("#userEmail").fill("randyorden@gmail.com");
    await page.locator("#userPassword").fill("Mallika@123");
    await page.locator("#login").click();

    const products = page.locator(".card-body");
    await products.first().waitFor(); // very npx important
    const count = await products.count();
   
    for (let i = 0; i < count; i++){
      const productText= await products.nth(i).locator("b").textContent();
      if( productText.trim() === productName)

        {
           await products.nth(i).locator("button.w-10").click();
            break;
        }

   }

   await page.locator("[routerlink*='cart']").click();
   await page.locator("h3").first().waitFor();
  //   const bool =await page.locator("h3:has-text('ZARA COAT 3')").isVisible(); //h3:has-text('ZARA COAT 3') new css for playwright options we can use sudo class (has-text)
  // //"isVisible" is not an auto await in playwright so we can add one addtional step in above the invisible "waitfor()"
  //  expect(bool).toBeTruthy();

    const product = page.locator(`h3:has-text("${productName}")`);
await expect(product).toBeVisible();

   await page.locator("text=Checkout").click();

  //  await page.locator("input[type='text']").nth(1).fill("25415");
  //  await page.locator("input[type='text']").nth(2).fill("rahul");
  //  await page.locator("input[type='text']").nth(3).fill("rahulshettyacademy");
  //  await page.locator("button.btn-primary").click();


    await page.locator("[placeholder='Select Country']").pressSequentially("ind");//enter the text one by one
    const dropdown =page.locator(".ta-results");
    await dropdown.first().waitFor();
    const options = await dropdown.locator("button").count();
    for(let i = 0; i<options; ++i){
      const text = await dropdown.locator("button").nth(i).textContent();

      if(text.trim() === "India"){
        await dropdown.locator("button").nth(i).click();
        break;
      }

    }
    await expect(page.locator(".user__name [type='text']").first()).toHaveText("randyorden@gmail.com");
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId  = await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
    console.log(orderId);

// ===== Orders Page Validation =====

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  const rows = page.locator("tbody tr");
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const tableOrderId = await rows.nth(i).locator("th").textContent();

    if (orderId.includes(tableOrderId)) {
      await rows.nth(i).locator("button:has-text('View')").click();
      break;
    }
  }

  const finalOrderId = await page
    .locator(".col-md-6 .col-text")
    .textContent();

  expect(orderId.includes(finalOrderId)).toBeTruthy();
});
    

