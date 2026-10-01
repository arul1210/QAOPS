import { Expect,type Locator, type Page } from "@playwright/test";
let name1 :string = "arul";
console.log(name1)
let age : number=25;
let option : boolean =true;
let emp : number[]=[13,4,35,435,35];
let location1 : any = "chennai";
location1 = 14;

//example

class CartPage
{
    page:Page; //converted ts format and provide the return type of the function or class or menthod
    productNameList:Locator;
    clickTheCardButton:Locator;

    constructor(page:any){

        this.page = page
        this.productNameList = page.locator("h3")
        this.clickTheCardButton = page.locator("text=Checkout")

   }}