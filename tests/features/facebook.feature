Feature: Facebook Automation
    Scenario: Facebook market place
        Given Open facebook
        When login facebook using username and passowrd then visit market place
        Then Save the product details into JSON file and fill the marketplace forms
            | title                                                     | price | condition | availability | location                     | image | category |
            | Sleep Like Royalty: Premium Mattresses for Sale           | 0     | New       | stock        | Pickering, Ontario           | test.png | Furniture  |
            # | Dreamland Comfort: Luxury Mattresses at Affordable Prices | 5     | New       | stock        | Ajax, Ontario                |
            # | Elevate Your Sleep: Quality Mattresses for Every Budget   | 10    | New       | stock        | Whitby, Ontario              |
            # | The Ultimate Slumber: Explore Our Mattress Collection     | 15    | New       | stock        | Oshawa, Ontario              |
            # | Unwind in Comfort: Find Your Dream Mattress Today         | 20    | New       | stock        | Bowmanville, Ontario         |
            # | Mattress Bliss: Your Ticket to Restful Nights             | 25    | New       | stock        | Milton, Ontario              |
            # | Discover Serenity: Shop Our Selection of Mattresses       | 30    | New       | stock        | Cambridge, Ontario           |
            # | Transform Your Bedroom: Mattresses That Define Comfort    | 35    | New       | stock        | Guelph, Ontario              |
            # | Wake Up Refreshed: Upgrade Your Sleep Experience          | 0     | New       | stock        | Kitchener, Ontario           |
            # | Quality Sleep, Quality Life: Mattresses for Sale          | 5     | New       | stock        | Waterloo, Ontario            |
            # | Embrace Restful Nights: Premium Mattresses Await          | 10    | New       | stock        | Georgetown, Ontario          |
            # | Your Sleep Oasis: Explore Our Mattress Options            | 15    | New       | stock        | Rockwood, Ontario            |
            # | Luxury Awaits: Find Your Perfect Mattress                 | 20    | New       | stock        | Oakville, Ontario            |
            # | Sleep Better, Live Better: Explore Our Mattress Range     | 25    | New       | stock        | Hamilton, Ontario            |
            # | The Mattress of Your Dreams: Shop Now                     | 30    | New       | stock        | Burlington, Ontario          |
            # | Rest Easy Tonight: Choose from Our Mattress Collection    | 35    | New       | stock        | Grimsby, Ontario             |
            # | Upgrade Your Slumber: Mattresses to Suit Your Style       | 0     | New       | stock        | Lincoln, Ontario             |
            # | Experience the Difference: Discover Our Mattresses        | 5     | New       | stock        | Thorold, Ontario             |
            # | Sleep Soundly, Wake Happily: Find Your Mattress           | 10    | New       | stock        | Niagara Falls, Ontario       |
            # | Elevate Your Comfort: Premium Mattresses on Sale          | 15    | New       | stock        | Niagara-On-The-Lake, Ontario |
            # | Dreamland Awaits: Explore Our Mattress Deals              | 20    | New       | stock        | Welland, Ontario             |
            # | Unleash Your Potential: Invest in Quality Sleep           | 25    | New       | stock        | Brantford, Ontario           |
            # | The Sleep You Deserve: Shop Our Mattress Selection        | 30    | New       | stock        | Beamsville, Ontario          |
            # | Quality Meets Comfort: Mattresses for Every Home          | 35    | New       | stock        | Ayr, Ontario                 |
            # | Rediscover Sleep: Browse Our Mattress Range               | 0     | New       | stock        | Woodstock, Ontario           |
            # | Rest Assured: Your Perfect Mattress Is Here               | 5     | New       | stock        | London, Ontario              |
            # | Sleep Like a Baby: Find Your Ideal Mattress               | 10    | New       | stock        | Norwich, Ontario             |
            # | Serenity Starts Here: Explore Our Mattress Options        | 15    | New       | stock        | Tillsonburg, Ontario         |
            # | Luxury for Less: Mattresses That Fit Your Budget          | 20    | New       | stock        | Aylmer, Ontario              |
            # | The Path to Better Sleep: Discover Our Mattresses         | 25    | New       | stock        | St. Thomas                   |
            # | Sweet Dreams Begin Here: Shop Our Mattress Deals          | 30    | New       | stock        | Dutton, Ontario              |
            # | Your Sleep Journey: Choose the Right Mattress             | 35    | New       | stock        | Rodney, Ontario              |
            # | Mattress Magic: Transform Your Bedroom Today              | 0     | New       | stock        | Ridgetown, Ontario           |
            # | Upgrade Your Sanctuary: Explore Our Mattress Range        | 5     | New       | stock        | Chatham, Ontario             |
            # | Sleep in Style: Find the Perfect Mattress for You         | 10    | New       | stock        | Tilbury, Ontario             |
            # | The Mattress Experience: Unleash Your Comfort             | 15    | New       | stock        | Comber, Ontario              |
            # | Your Ticket to Restful Nights: Mattresses on Sale         | 20    | New       | stock        | Windsor, Ontario             |
            # | The Sleep Revolution: Shop Our Mattress Collection        | 25    | New       | stock        | Ingersoll, Ontario           |
            # | Awaken to Comfort: Choose from Our Mattresses             | 30    | New       | stock        | Stoney Creek Mountain        |
            # | Sleep Like Never Before: Your Dream Mattress Awaits       | 35    | New       | stock        | Rural Halton Hills           |
            # | Rediscover Relaxation: Explore Our Mattress Deals         | 0     | New       | stock        | Centreville Chicopee         |
            # | The Comfort You Crave: Premium Mattresses for Sale        | 5     | New       | stock        | Downtown Dundas              |
            # | Dreams Delivered: Find Your Perfect Mattress Here         | 10    | New       | stock        | Beamsville, Ontario          |
            # | Elevate Your Slumber: Shop Our Mattress Selection         | 15    | New       | stock        | Waterdown                    |
            # | Luxury Meets Affordability: Mattresses That Wow           | 20    | New       | stock        | South Pelham, ON, Canada     |
            # | Your Sleep Upgrade: Discover Our Mattress Options         | 25    | New       | stock        | Newcastle, Ontario           |
            # | Rest Easy in Style: Explore Our Mattress Range            | 30    | New       | stock        | Courtice                     |