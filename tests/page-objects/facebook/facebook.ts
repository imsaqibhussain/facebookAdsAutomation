import { page } from '../../features/support/hooks';
import { Utilities } from '../utilities';
import * as path from 'path';
import { dirname } from 'path';
import fs from 'fs';
// Import dotenv and configure it
import { config } from 'dotenv';
config();

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

    async open() {
        // Open the provided URL
        await page.goto(process.env.URL);
    }

    async loginUser() {
        const details = await utility.readUserDetails()
        await page.fill(this.email, process.env.EMAIL)
        await page.fill(this.password, process.env.PASSWORD)
        await page.click(this.loginButton)

        await utility.delay(2000)
        console.log(await page.locator(this.loginButton).isVisible)
        console.log(await page.locator(this.loginButton).isVisible)
        if (await page.locator(this.loginButton).isVisible()) {
            if (page.locator('text=Log in with password').isVisible()) {
                await page.click('text=Log in with password')
                await page.fill(this.password, process.env.PASSWORD)
                await page.click(this.loginButton)
            }
        }
    }

    async visitMarketPlaceListing() {
        await page.waitForLoadState()
        await page.waitForSelector(this.marketPlace)
        await page.locator(this.marketPlace).click()
        await page.waitForLoadState()
        await page.click(this.createNewListing)
        await page.click(this.itemForSale)
    }

    async selectPicture(){
          // const fileChooserPromise = await page.waitForEvent('filechooser');
        // await page.getByText("Add Photos").click();
        // const fileChooser = await fileChooserPromise;
        // // Get the directory containing the current file
        // const currentDirectory = dirname('tests/setup/expected');
        // console.log("currentDirectory", currentDirectory)
        // const directoryPath = 'tests/setup/expected';
        // const imagePath = path.join(directoryPath, picture);
        // // Read the image file
        // fs.readFile(imagePath, (err, data) => {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         // 'data' contains the binary content of the image
        //         // You can do whatever you want with the image data here
        //     }
        // });
        // // Construct the full path to the image file
        // await fileChooser.setFiles(imagePath)
    }

    async saveNewListingwithDraft(picture, title, price, category, condition, availability, location) {

        await page.fill(this.title, title)
        await page.fill(this.price, price)
        // await page.click(this.categoryDropDown)
        // if (category == "Furniture") {
        //     await page.locator("(//div[@class='x8aayfw'])[2]").click()
        // }
        // else {
        //     console.log("at the moment script only supporting furniture category")
        // }
        await page.click(this.conditionDropDown)
        if (condition == "New") {
            await page.click("//div[@role='option']")
        }

        await page.click("text=More details")
        await page.fill(this.description, "Upgrade your sleep with our New Best Mattress Sale! Quality, comfort, and unbeatable prices await. Limited time offer for a better night's rest. Don't miss out.")
        if (availability == "stock") {
            await page.click("text=List as Single Item")
            await page.click("text=List as in Stock")
        }
        await page.click(this.location)
        await page.fill(this.location, location)
        await page.click('text=' + location)
        await page.click("//span[text()='Hide from friends']")
        // await page.click("text=Door drop-off")
        await page.click(this.saveDraft)
        await page.click(this.itemForSale)
    }
}
