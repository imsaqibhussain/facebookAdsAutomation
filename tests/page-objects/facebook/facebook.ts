import { page } from '../../features/support/hooks';
import { Utilities } from '../utilities';
import * as path from 'path';
import { dirname } from 'path';
import fs from 'fs';
const utility = new Utilities()

export class facebook {

    loginButton = "//button[contains(@class,'_42ft _4jy0')]"
    email = "#email"
    password = "#pass"
    marketPlace = "text=Marketplace"
    createNewListing = "//a[@href='/marketplace/create/']//div"
    itemForSale = "//span[text()='Item for sale']"
    title = "//span[text()='Title']/following-sibling::input"
    price = "//span[text()='Price']/following-sibling::input"
    categoryDropDown = "//div[@class='xamitd3 x1pi30zi']"
    conditionDropDown = "(//div[@class='xamitd3 x1pi30zi']//i)[2]"
    description = "//span[text()='Description']/following::textarea"
    location = "//span[text()='Location']/following::input"
    saveDraft = "//span[text()='Save Draft']"

    async open(url: string) {
        // Open the provided URL
        console.log('visit the page: ', url)
        await page.goto(url);
    }

    async loginUser(email: any, password: any) {
        const details  = await utility.readUserDetails()
        console.log('password:',password)
        await page.fill(this.email, email)
        await utility.delay(4999)
        await page.fill(this.password, details.productDetails.password)
        await page.click(this.loginButton)
    }

    async visitMarketPlaceListing() {
        await page.waitForLoadState()
        await page.waitForSelector(this.marketPlace)
        await page.locator(this.marketPlace).click()
        await page.waitForLoadState()
        await page.click(this.createNewListing)
        await page.click(this.itemForSale)
    }

    async saveNewListingwithDraft(picture, title, price, category, condition, description, availability, location) {

        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.getByText("Add Photos").click();
        const fileChooser = await fileChooserPromise;
        // Get the directory containing the current file

        const currentDirectory = dirname('tests/setup/expected');
        console.log("currentDirectory", currentDirectory)


        const directoryPath = 'tests/setup/expected';
        const imagePath = path.join(directoryPath, picture);
        // Read the image file
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // 'data' contains the binary content of the image
                // You can do whatever you want with the image data here
            }
        });

        // Construct the full path to the image file

        await fileChooser.setFiles(imagePath)

        await page.fill(this.title, title)
        await page.fill(this.price, price)
        await page.click(this.categoryDropDown)
        if (category == "Furniture") {
            await page.locator("(//div[@class='x8aayfw'])[2]").click()
        }
        else {
            console.log("at the moment script only supporting furniture category")
        }
        await page.click(this.conditionDropDown)
        if (condition == "New") {
            await page.click("//div[@role='option']")
        }
        await page.fill(this.description, "Upgrade your sleep with our New Best Mattress Sale! Quality, comfort, and unbeatable prices await. Limited time offer for a better night's rest. Don't miss out.")

        if (availability == "stock") {
            await page.click("text=List as Single Item")
            await page.click("text=List as in Stock")
        }

        await page.click(this.location)
        await page.fill(this.location, location)
        await page.click('text=' + location)

        await page.click("//span[text()='Hide from friends']")

        await page.click("text=Door drop-off")

        await page.click(this.saveDraft)
    }

    async loginuser() {
        await page.fill("#email", "bilalmattress9@gmail.com")
        await page.fill("#pass", "Bilal@123")
        await page.click("//button[contains(@class,'_42ft _4jy0')]")
        await utility.delay(3000)
        await page.waitForSelector("text=Marketplace")
        await page.locator("text=Marketplace").click()

        await page.click("//a[@href='/marketplace/create/']//div")

        await page.click("//span[text()='Item for sale']")

        // Start waiting for file chooser before clicking. Note no await.
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.getByText("Add Photos").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles("E:/Development/github/SaqibHussain-GM-Assignment/tests/setup/expected/a.jpg")

        await page.fill("//span[text()='Title']/following-sibling::input", "testing")

        await page.fill("//span[text()='Price']/following-sibling::input", "10")

        await page.click("//div[@class='xamitd3 x1pi30zi']")

        await page.click("//span[text()='Furniture']")

        await page.click("(//div[@class='xamitd3 x1pi30zi']//i)[2]")

        await page.click("//div[@role='option']")

        await page.fill("//span[text()='Brand']/following::input", "testing brand")
        await page.fill("//span[text()='Description']/following::textarea", "test description")

        await page.click("(//div[@class='xamitd3 x1pi30zi']//i)[3]")

        await page.click("(//div[@role='option'])[2]")

        await page.click("//span[text()='Location']/following::input")

        await page.fill("//span[text()='Location']/following::input", "London, Ontario")
        await page.click("//div[@role='option']")
        await page.click("//span[text()='Door dropoff']")
        await page.click("//span[text()='Hide from friends']")
        await page.click("//span[text()='Save Draft']")
    }
}