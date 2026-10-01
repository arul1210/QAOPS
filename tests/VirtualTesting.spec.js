const {test, expect}=require('@playwright/test')

test('Vistual testing image to image validation',async ({page})=>
{
    await page.goto("https://www.qaclickacademy.com/lander?oref=https%3A%2F%2Frahulshettyacademy.com%2F")
    expect( await page.screenshot()).toMatchSnapshot('mainpage.png')

})