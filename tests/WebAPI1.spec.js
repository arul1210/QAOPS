const {test,request, expect}=require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');

const loginPayLoad = {userEmail: "randyorden@gmail.com", userPassword: "Mallika@123"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};


let response;

test.beforeAll( async()=>
{
  //login API
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);  
   
  
});


test('End to End', async ({page})=>
{
   
  await page.addInitScript(value=>{
    window.localStorage.setItem('token',value);

  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

 // ===== Orders Page Validation =====

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  const rows = page.locator("tbody tr");
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const tableOrderId = await rows.nth(i).locator("th").textContent();

    if (response.orderId.includes(tableOrderId)) {
      await rows.nth(i).locator("button:has-text('View')").click();
      break;
    }
  }

  const finalOrderId = await page
    .locator(".col-md-6 .col-text")
    .textContent();

  expect(response.orderId.includes(finalOrderId)).toBeTruthy();
});