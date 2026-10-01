const {test}= require('@playwright/test');

test('playwright special locator', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();//getByLabel used for checkbox,static dropdown and ratio button mentioned in label tag in DOM
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByRole("button",{name: 'Submit'}).click();
       await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("link",{name:"Shop"}).click();
    

    //Special locator: getByAltText, getByTestId, getByLabel, getByRole, getByPlaceholder, getByTitle, getByText

    //getByROle:
    // getByRole (role: "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button" |
    // "caption" | "cell" | "checkbox" | "code" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" 
    // | "deletion" | "dialog" | "directory" | "document" | "emphasis" | "feed" | "figure" | "form" | "generic" | "grid" |
    //  "gridcell" | "group" | "heading" | "img" | "insertion" | "link" | "list" | "listbox" | "listitem" | "log" | "main" |
    //  "marquee" | "math" | "meter" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "navigation" | 
    // "none" | "note" | "option" | "paragraph" | "presentation" | "progressbar" | "radio" |

    //debub commands "npx playwright test --ui"

    //css in another method
    
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

});