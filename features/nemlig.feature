Feature: Nemlig

  Scenario: User can see the list of products
    Given a user is on the home page
    When they click on the "Vin og spiritus" category
    Then they should end up on the "Vin og spiritus" page
    And they should see a list of products
