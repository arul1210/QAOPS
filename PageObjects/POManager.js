const {LoginPage} = require('./LoginPage')
const {Dashboardpage} = require('./DashboardPage')
const {CartPage} = require('./CardPage')
const {OrderReviewPage}= require('./OrderReviewPage')
const {OrderHistoryPage} = require ('./OrderHistoryPage')

class POManager

{

    constructor(page){

        this.page= page
        this.loginPage = new LoginPage(this.page)
        this.dashboardpage = new Dashboardpage(this.page)
        this.cartpage = new CartPage(this.page)
        this.orderreviewpage = new OrderReviewPage(this.page)
        this.orderhistroryPage = new OrderHistoryPage(this.page)
    }

    getLoginPage(){
        
        return  this.loginPage;
    }
    getDashboardPage(){
        
        return   this.dashboardpage;
    }

    getTheCartPage(){
        return  this.cartpage;
    }

    orderreviewPage(){
        return this.orderreviewpage;
    }

    getOrderHistoryPage(){

        return this.orderhistroryPage;
    }

}
module.exports={POManager}