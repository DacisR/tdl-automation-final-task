Feature: Checkout

  @wip
  Scenario: Unregistered user can't proceed to Checkout
    Given I am on the home page
    And I am not signed in
    When I add an item to the cart
    And I click the Proceed to Checkout button
    Then I see the Login form
    And I see the Create an Account form
