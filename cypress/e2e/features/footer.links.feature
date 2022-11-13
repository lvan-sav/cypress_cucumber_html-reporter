Feature: Footer links usage scenarios

    Background:
        Given The Telnyx website
        And Accept all cookies
    
    Scenario: Should sign up by the footer link with random data
        
        Sign up after click "Sign up" in the
        footer by filling in all fields by
        random valid data on the main page

        Given I click "Sign up" footer link
        When I sign up with filling in all fields with random data
        Then I am on verify email page
           * I can see verify email
           * I can see "Resend verification email" button

    Scenario: Should open "What SIP trunking is" article
        
        Go to "What SIP trunking is" article by
        footer link to Elastic SIP trunking prod. page
        on the main page

        Given I click "Elastic SIP Trunking" footer link
        When I click "Resource Center" link in the "Frequency asked questions" block
        Then I am on the "What SIP trunking is" article page
           * The title of the article contains "What SIP trunking is"
           * The author of the article Odhran Reidy

    Scenario: Should open "Channel Billing" article

        Go to the "Channel Billing" article by footer
        link to Elastic SIP Trunking prod. page on the
        main page

        Given I click "Elastic SIP Trunking" footer link
        When I click "How many SIP trunks do I need" accordion
        And I click "channels" link
        Then I am on the "Channel Billing" article page
           * The title of the article contains "Channel Billing"
           * The author of the article Josh Whitaker

    Scenario: Should open "SIP Trunking Pricing" page from accordion in product page

        Go to the "SIP Trunking Pricing" page by
        accordion on the Elastic SIP Trunking prod.
        page after footer link click on the main

        Given I click "Elastic SIP Trunking" footer link
        When I click "How much does SIP trunking cost" accordion
        And I click "pricing" link
        Then I am on the SIP Trunk Pricing page
           * The title of the page contains "SIP Trunk Pricing"





