Feature: Facebook Automation

    Scenario: Facebook market place
        Given Go to the url '<url>'
        When login fb user '<username>' and '<password>' and visit market place
        Then fill the form using '<picture>' '<title>' '<price>' '<category>' '<condition>' '<description>' '<availability>' '<location>'
        # Then place ads in marketplace
        Examples:
            | url                   | username             | password       | picture | title                                                       | price | category  | condition | availability | location          | description |
            # | https://facebook.com/ | saqib.msse@yhaoo.com |  | 1.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | London, Ontario    |  |
            # | https://facebook.com/ | saqib.msse@yhaoo.com |  | 2.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Waterloo, Ontario |             |
            # | https://facebook.com/ | saqib.msse@yhaoo.com |  | 3.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Dutton, Ontario    |  |
            # | https://facebook.com/ | saqib.msse@yhaoo.com |  | 4.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Norwich, Ontario   |  |
            # | https://facebook.com/ | saqib.msse@yhaoo.com |  | 5.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Oakville, Ontario  |  |
            # | https://facebook.com/ | saqib.msse@yhaoo.com |  | 6.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Ayr, Ontario       |  |


| https://facebook.com/ | saqib.msse@yhaoo.com |  | 7.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Milton, Ontario    |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 8.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Cambridge, Ontario |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 9.jpg   | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Toronto, Ontario   |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 10.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Ottawa, Ontario    |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 11.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Markham, Ontario   |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 12.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Rockwood, Ontario  |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 13.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Rodney, Ontario    |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 14.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Ridgetown, Ontario |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 15.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Chatham, Ontario   |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 16.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Comber, Ontario    |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 17.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Windsor, Ontario   |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 18.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Aylmer, Ontario    |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 19.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Welland, Ontario   |  |
# | https://facebook.com/ | saqib.msse@yhaoo.com |  | 20.jpg  | New Best Mattress Sale: Unbeatable Prices for Quality Sleep | 30    | Furniture | New       | stock        | Brantford, Ontario |  |