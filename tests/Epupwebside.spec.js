const {test, expect} =require('@playwright/test');


test('Login Register', async({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    // await page.locator(".text-reset").click();
    // await page.locator("#firstName").fill("Randy");
    // await page.locator("#lastName").fill("order");
    // await page.locator("#userEmail").fill("randyorder1@gmail.com");
    // await page.locator("#userMobile").fill("9236548879");   
    // await page.locator("select[formcontrolname='occupation']").selectOption("Engineer"); 
    // await page.locator("input[value='Male']").click();
    // await page.locator("#userPassword").fill("Hornet@20");
    // await page.locator("#confirmPassword").fill("Hornet@20");
    // await page.locator("input[type='checkbox']").click();
    // await page.locator("input[value='Register']").click();
    // console.log(await page.locator("h1[class='headcolor']").textContent());
    // await expect(page.locator("h1[class='headcolor']")).toContainText("Account Created Successfully"); //After create a account we can't get the successful test
    await page.locator("#userEmail").fill("randyorden@gmail.com");
    await page.locator("#userPassword").fill("Mallika@123");
    await page.locator("#login").click();
    //await page.waitForLoadState('networkidle'); //it'll help to load the all the element in API network page
    //Above line is not working sometime so we can use alternative
    await page.locator(".card-body b").first().waitFor();
    const productlog = await page.locator(".card-body b").allTextContents();
    console.log(productlog);


    

 

 

   


    
    
    
   

});