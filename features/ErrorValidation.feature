Feature: EndToEnd Validation

@Validation
Scenario: Place the order
    Given user able to login Ecommerce webside "randyorden@gmail.com" and "Mallika@123"
    When add a product in AddToCard page and product name is "ADIDAS ORIGINAL1"
    Then verify "ADIDAS ORIGINAL" is displayed in AddToCard page
    
    @Param
    Scenario Outline: Place the order
    Given user able to login Ecommerce webside <username> and <password>
    When add a product in AddToCard page and product name is "ADIDAS ORIGINAL1"
    Then verify "ADIDAS ORIGINAL" is displayed in AddToCard page

    Examples:
    | username                  | password      |
    | randyorden@gmail.com      | Mallika@123"  |
    | arular@gmail.com          | adjdkjh@      |
    | preethi@gmail.com         | jain          |
   