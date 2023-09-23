Feature: Facebook Automation

    Scenario: Facebook market place
        Given Go to the url '<URL>'
        When login fb user
        # Then place ads in marketplace
        Examples:
            | URL                 |
            | https://facebook.com/ |