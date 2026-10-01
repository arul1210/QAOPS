const { Before, After, AfterStep, BeforeStep, Status, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { POManager } = require('../../PageObjects/POManager');
const playwright = require('@playwright/test');
const path = require("node:path");


Before(async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

});

BeforeStep( function(){
    console.log("Execute each steps")

})

BeforeAll(function(){
    console.log("Execute once before all scenario")
})

AfterAll(function(){
    console.log("Execute once after all scenarios")
})

AfterStep ( async function({result}){
    
    if(result.status === Status.FAILED){
        await this.page.screenshot({path:'screenshot1.png'})
    }
})

After(function () {
        console.log("Finish the testcases");
})