const {test,expect} = require('@playwright/test'); //import the playwright test

// test('First testcase Playwright test',function() // declare the 1st test cases (Whenever we using AWAIT keyword that functions consider as asynchronous so that means is not executed sequence)

// //we can use "function()"  instead of "()=>" in new version that function called as anonymous function
// //once we use "await" keyword we should change the anonymous function "function()" as "async function()"

// {
// //Playwright script and JS is asynchronous

//npx playwright codegen https://rahulshettyacademy.com/ we can automatically generate the code
// });

test('Browser context Playwright test', async ({browser})=> //".only is run only that test cases"

{
//Playwright script and JS is asynchronous
const context = await browser.newContext(); // created a new context mean open a new incognito browser
const page = await context.newPage(); // created a new page in new incognito browser
await page.route('**/*.css',route=>route.abort());
await page.route('**/*.{jpg,jpeg,png}'),route=>route.abort()
await page.on('request',request=>console.log(request.url()))
await page.on('response',response=>console.log(response.url(),response.status()))
await page.goto("https://rahulshettyacademy.com/practice");
console.log(await page.title());

});

test('page context Playwright test', async ({page})=> //without using broswer feature

{
// //Playwright script and JS is asynchronous
// const context = await browser.newContext(); // created a new context mean open a new incognito browser
// const page = await context.newPage(); // created a new page in new incognito browser
await page.goto("https://google.com");
console.log(await page.title());
await expect(page).toHaveTitle("Google")
});