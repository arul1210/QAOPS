const base = require('@playwright/test')

exports.customeTest = base.test.extend(
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