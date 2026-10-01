const {test,request, expect}=require('@playwright/test');
const {APIUtils} = require('./utils/APIUtils');

const loginPayLoad = {userEmail: "randyorden@gmail.com", userPassword: "Mallika@123"};
const orderPayLoad = {orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};
const fakePayLoadorders = {data:[],message:"No Orders"};


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
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
   async route=> 
    {
      const response = page.request.fetch(route.request())
      let body = JSON.stringify(fakePayLoadorders);
      route.fulfill(
        {
          response,
          body,
        }
      )
    }
  )
  
 // ===== Orders Page Validation =====

  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForEvent("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
  console.log(await page.locator(".mt=4").textContent())

});