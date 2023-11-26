Feature: Project - Dynamic Tables

    Scenario: Test Case 01 - Validate the default content of the inventory table
    Given the user is on "https://techglobal-training.com/frontend/project-4"
    Then the user should see the "Inventory" heading
    Then the user should see the table with the headers below
        | Quantity | Product | Price $ | Total $ |  
    Then the user should see the table with the rows below
        | 1 | iPhone  | 1,000 | 1,000 |  
        | 3 | Airpods | 100   | 300   |  
        | 2 | iPad    | 500   | 1,000 |  
    Then the user should see the "ADD PRODUCT" button is enabled
    Then the user should see the "Total = $2,300" text displayed

    Scenario: Test Case 02 - Validate the Add New Product modal
    Given the user is on "https://techglobal-training.com/frontend/project-4"
    When the user clicks on the "ADD PRODUCT" button
    Then the user should see the "Add New Product" modal with its heading
    Then the user should see the "X" button is enabled
    Then the user should see the label
        | Please select the quantity            |
        | Please enter the name of the product  |
        | Please enter the price of the product |

    Then the user should see the input box is enabled
        | Quantity |
        | Product  |
        | Price    |
            
    And the user should see the "SUBMIT" button is enabled 

    Scenario: Test Case 03 - Validate the Add New Product modal X button
    Given the user is on "https://techglobal-training.com/frontend/project-4"
    When the user clicks on the "ADD PRODUCT" button
    Then the user should see the "Add New Product" modal with its heading
    When the user clicks on the "X" button
    Then the user should not see the "Add New Product" modal

    Scenario: Test Case 04 - Validate the Add New Product modal X button
    Given the user is on "https://techglobal-training.com/frontend/project-4"
    When the user clicks on the "ADD PRODUCT" button
    Then the user enters the quantity as "2"
    Then the user enters the product as "Mouse"
    Then the user enters the price as "100"
    Then the user clicks on the "SUBMIT" button
    Then the user should see the table with the new row below
    | 2 | Mouse | 100 | 200 |
    Then the user should see the "Total = $2,500" text displayed