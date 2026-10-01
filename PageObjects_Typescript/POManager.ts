//const {LoginPage} = require('./LoginPage')// this is js import
import{LoginPage} from './LoginPage';//add export keyword in front of class name then it ts export 
//const {Dashboardpage} = require('./DashboardPage')
import{Dashboardpage} from'./DashboardPage';
//const {CartPage} = require('./CardPage')
import{CartPage} from'./CardPage'
//const {OrderReviewPage}= require('./OrderReviewPage')
import{OrderReviewPage} from './OrderReviewPage'
//const {OrderHistoryPage} = require ('./OrderHistoryPage')
import{OrderHistoryPage} from'./OrderHistoryPage'

import { Expect,type Page } from '@playwright/test';


export class POManager

{

    page:Page
    loginPage:LoginPage //return type of object
    dashboardpage:Dashboardpage
    cartpage:CartPage
    orderreviewpage:OrderReviewPage
    orderhistroryPage:OrderHistoryPage

    constructor(page: Page){

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