//const base = require('@playwright/test')
import{test as baseTest} from'@playwright/test'
interface TestDataSetForOrder{
   username : string
    password : string
    productName : string
    CountryCode : string
    CountryName : string
    confirmationText : string

}

export const customeTest = baseTest.extend<{testDataSetForOrder:TestDataSetForOrder}>(
{

testDataSetForOrder : // costome feature
{
    username : "randyorden@gmail.com",
    password : "Mallika@123",
    productName : "ADIDAS ORIGINAL",
    CountryCode : "can", 
    CountryName : "Canada",
    confirmationText : " Thankyou for the order. "
}

}

)