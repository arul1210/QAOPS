const {test,request, expect}=require('@playwright/test');

const loginPayLoad = {userEmail: "randyorden@gmail.com", userPassword: "Mallika@123"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};

let token;
let orderId;

test.beforeAll( async()=>
{
  //login API
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data:loginPayLoad
        }
    )
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
     token = loginResponseJson.token;
    console.log('Token',token);

    //orderAPI

    const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
      {
        data : orderPayLoad,
        headers: 
        {
          'authorization': token,
          'content-type':'application/json'
        }
      }
    ) 
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponse);
    orderId = orderResponseJson.orders[0];
  
});

test.beforeEach( async()=>
{

});

test('End to End', async ({page})=>
{

  const orderId = createOrder()
  await page.addInitScript(value=>{
    window.localStorage.setItem('token',value);

  }, token);

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

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