const {test, expect}= require('@playwright/test');
const { promise } = require('selenium-webdriver');
const { Context } = require('selenium-webdriver/firefox');

//test.describe.configure({mode:'parallel'}) running each working assinged for each test
test.describe.configure({mode:'serial'}) // if failed any sequence or continue testcases then skipped the upcoming testcases

test('UI controls', async ({page})=>
{

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const singIn = page.locator("#signInBtn");
    const documentlink = page.locator("[href*='documents-request']");
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await page.locator("span.radiotextsty").last().click();
    await expect(page.locator("span.radiotextsty").last()).toBeChecked();
    await page.locator("#okayBtn").click();
    //use another method for checked or not not using assertion
    //console.log(await page.locator("span.radiotextsty").last().isChecked());

await page.locator("select.form-control").selectOption("Teacher");
await page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked(); // verify the check box clicked or not 
await page.locator("#terms").uncheck(); //we can uncheck the check box as well with the help of playweight   
 expect(await page.locator("#terms").isChecked()).toBeFalsy();
await singIn.click();

await expect(documentlink).toHaveAttribute('class','blinkingText');

});


test('window handling', async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentlink = page.locator("[href*='documents-request']");
const userName = page.locator("#username");
const [newpage] = await Promise.all( //listen the promise have 3 rule pending, rejected and fulfilled
[
page.context().waitForEvent('page'),
documentlink.click(),
]) // new page opened

const email = await newpage.locator("p.red").textContent();
console.log(email);
const array = email.split('@');
const domain = array[1].split(" ")[0];
//console.log(domain);
await newpage.bringToFront(); //back to parent window
await userName.fill(domain);
//await page.pause();
// how to print input value in attributes similar getattributes methods in selenium
console.log(await userName.inputValue());

});






