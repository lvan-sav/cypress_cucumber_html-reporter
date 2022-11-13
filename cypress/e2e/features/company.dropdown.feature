Feature: "Company" header dropdown usage scenarios

    Background:
        Given The Telnyx website
        And Accept all cookies
    
    Scenario: Should open the "About Telnyx" page

        Go to the "About Telnyx" page by clicking
        "About Tenyx" link in "Company" header
        dropdown on the main page

        Given I hover over the "Company" dropdown in the header
        When I click "About Telnyx" link
        Then I am on the "About Telnyx" page
           * I can see "About us" subtitle above the title
           * I can see Telnyx office pictures
    
    Scenario: Should open the "Careers" page

        Go to the "Cereers" page by clicking
        "Careers" link in "Company" header
        dropdown on the main page

        Given I hover over the "Company" dropdown in the header
        When I click "Careers" link
        Then I am on the "Careers" page
           * I can see "careers at telnyx" subtitle above the title
           * I can see "Come and work with us!" title
    
    Scenario: Should become to Telnyx partners on the Partners page with random data

        Become to Tenyx partners on the "Parents"
        page by filling in all fields after clicking
        "Parents" link in "Company" header
        dropdown on the main page

        Given I hover over the "Company" dropdown in the header
        When I click "Partners" link
        And I fill in the all fields in "Become a Telnyx partner" form with random data
        Then All fields are filled

    Scenario Outline: Should go to the "MS Teams integrations" page

        Go to the "MS Teams integrations" page in
        the marketplace from main page

        Given I hover over the "Company" dropdown in the header
        When I click "Integrations" link
        And I click "Explore our marketplace" button
        And I search '<search>' by the search field
        And I click first link in possible result list
        Then I am on the '<search>' page
           * I can see '<search>' title
           * I can see "Get started" button
           * Last item in the breadcrumb is '<search>'

        Examples:
        |search|
        |Teams |
    
    Scenario: Should become a Beta Tester in the Integrations page with random data

        Go to the Integrations page from main page
        and become a Beta Tester by filling in the all
        fields

        Given I hover over the "Company" dropdown in the header
        When I click "Integrations" link
        And I fill in all fields in the Become a Beta Tester form with random data
        Then All fields are filling