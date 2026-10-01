import { expect,Locator,Page } from "@playwright/test"
export class LoginPage { //add export keyword in front of class name then it ts export 
    page:Page
    userName:Locator
    passWord:Locator
    login:Locator

constructor(page:Page)
{

    this.page=page
    this.userName = page.locator("#userEmail") //Instand variable
    this.passWord = page.locator("#userPassword")
    this.login = page.locator("#login")


}

async validLogin(username:string,password:string){

    await this.userName.fill(username);
    await this.passWord.fill(password);
    await this.login.click();
}

async goto(){

    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login')
}

}
module.exports ={LoginPage};