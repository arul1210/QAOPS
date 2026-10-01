class LoginPage {

constructor(page)
{

    this.page=page
    this.userName = page.locator("#userEmail") //Instand variable
    this.passWord = page.locator("#userPassword")
    this.login = page.locator("#login")


}

async validLogin(username,password){

    await this.userName.fill(username);
    await this.passWord.fill(password);
    await this.login.click();
}

async goto(){

    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login')
}

}
module.exports ={LoginPage};