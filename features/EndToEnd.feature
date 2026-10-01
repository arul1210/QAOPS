Feature: EndToEnd Validation

@Regression
Scenario: Place the order
    Given user able to login Ecommerce webside "randyorden@gmail.com" and "Mallika@123"
    When add a product in AddToCard page and product name is "ADIDAS ORIGINAL"
    Then verify "ADIDAS ORIGINAL" is displayed in AddToCard page
    When Enter the valid "ind" and "India" details and place the order and verify "randyorden@gmail.com"
    Then verify order is present in the order history page and check the " Thankyou for the order. "