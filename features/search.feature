Feature: Search

  @search
  Scenario Outline: Search function yields correct results
    Given I am on the home page
    When I enter <keyword> in the search box
    And I click the Submit Search button
    Then Only products that contain <keyword> are shown

    Examples: 
      | keyword  |
      | "Blouse" |
