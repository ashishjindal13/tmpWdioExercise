Feature: Shopping Cart

  Scenario: Successfully add and remove items from Shopping Cart
    Given I navigate to home page of Application
    And I enter my login id "standard_user" in "Username" field
    And I enter my login secret "secret_sauce" in "Password" field
    And I click on "Login" button to enter into the application
    When I select by text Price (high to low) in Sort
    And I click on "SecondLowestPriceItem" to add in Shopping cart
    And I click on "LowestPriceItem" to add in Shopping cart
    And I click on "ShoppingCart" icon to view my items
    And I remove lowest price Item from my cart
    Then I click on "Checkout"
    And I close the application