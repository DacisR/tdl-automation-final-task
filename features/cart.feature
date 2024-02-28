Feature: Cart

  @addtocart
  Scenario: User can successfully add an item to cart
    Given I am on the home page
    When I select Women menu item
    And I click on a product
    And I select size and color
    And I click Add to Cart button
    And I click Proceed to Checkout button
    Then My cart shows 1 item

  @remove
  Scenario: User can successfully remove an item from cart
    Given I am on the home page
    And I have an item in cart
    When I remove the item from cart
    Then My cart is empty
