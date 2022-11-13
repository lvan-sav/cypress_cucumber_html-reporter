Feature: "Resources" header dropdown usage scenarios

    Background:
        Given The Telnyx website
        And Accept all cookies

    Scenario: Should open the first "Customer story" page

        Go to the first "Customer story" page from
        main page

        Given I hover over the "Resources" dropdown in the header
        When I click "Customer story" link
        And I click first "Read customer story"
        Then I am on the "Customer story" page
           * I can see side company information menu
           * I can see side menu with used products

    Scenario Outline: Should use saving calculator for Messaging API service

        Given I hover over the "Resources" dropdown in the header
        When I click "Saving Calculator" link
        And I choose "<service>"
        And I click "Continue" button
           * I type <local> local numbers
           * I type <toll-free> toll-free numbers
        And I click "Continue" button
           * I type <sendSMS> sendSMS
           * I type <receiveSMS> receiveSMS
           * I type <sendMMS> sendMMS
           * I type <receiveMMS> receive sendMMS
        Then I can see "Your saving" information block
           * I can see "Try Telnyx for free" button
        
        Examples:
        | service   | local | toll-free | sendSMS | receiveSMS | sendMMS | receiveMMS |
        | Messaging | 10    | 10        | 10      | 10         | 10      | 10         |

    Scenario Outline: Should use saving calculator for "Elastic SIP Trunking" service

        Given I hover over the "Resources" dropdown in the header
        When I click "Saving Calculator" link
        And I choose "<service>"
        And I click "Continue" button
           * I type <local> local numbers
           * I type <toll-free> toll-free numbers
        And I click "Continue" button
           * I type <to local> desired receive calls to local numbers
           * I type <to toll-free> desired receive calls to toll-free numbers
           * I type <outbond> desired outbond calls
        Then I can see "Your saving" information block
           * I can see "Try Telnyx for free" button

        Examples:
        | service  | local | toll-free | to local | to toll-free | outbond |
        | Trunking | 10    | 10        | 10       | 10           | 10      |

    Scenario Outline: Should use saving calculator for "Voice API" service

        Given I hover over the "Resources" dropdown in the header
        When I click "Saving Calculator" link
        And I choose "<service>"
        And I click "Continue" button
           * I type <local> local numbers
           * I type <toll-free> toll-free numbers
        And I click "Continue" button
           * I type <receive with call control> desired receive call with Call control
           * I type <make with call control> desired making calls with Call control
        Then I can see "Your saving" information block
           * I can see "Try Telnyx for free" button

           Examples:
           | service | local | toll-free | receive with call control | make with call control |
           | Voice   | 10    | 10        | 10                        | 10                     |
    
    Scenario: Should open the "Twillio migration guide" article from saving calculator page

        Given I hover over the "Resources" dropdown in the header
        When I click "Saving Calculator" link
        And I click "Read our Twillio Migration Guide" button
        Then I am on "Move from Twillio to Telnyx" article page
           * I can see "Move from Twillio to Telnyx" article title
           * The author of the article Odhran Reidy