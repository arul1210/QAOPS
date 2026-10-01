const {test,expect} = require('@playwright/test');

test('loginpage', async ({page})=>
    {

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const singIn = page.locator("#signInBtn");
    const elementName=page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("learning");
    await password.fill("welcome123");
    await singIn.click();
    console.log(await page.locator("[style='display: block;']").textContent()); 
    await expect(page.locator("[style='display: block;']")).toContainText("Incorrect");
    //we can use type instead of fill. fill we can use clear the text box aswell
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await singIn.click();
    console.log(await elementName.nth(2).textContent());//we use index
    //or
    console.log(await elementName.first().textContent());
    console.log(await elementName.allTextContents()); // we can see all the elements name but here playwright not support for directly 
    // write this code because this is list/array structure so playwright wait mechanism doesnot support. once you comments the line #21 &223line #24 not working
    



    
    

    });  