import { page } from '../../features/support/hooks';
import { Utilities } from '../utilities';
import * as path from 'path';

const utility = new Utilities()

export class facebook {


    async open(url: string) {
        // Open the provided URL
        console.log('visit the page: ', url)
        await page.goto(url);
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
        //path.join(__dirname, filePath));



        await page.fill("//span[text()='Title']/following-sibling::input", "testing")

        await page.fill("//span[text()='Price']/following-sibling::input", "10")

        await page.click("//div[@class='xamitd3 x1pi30zi']")

        await page.click("//span[text()='Tools']")

        await page.click("(//div[@class='xamitd3 x1pi30zi']//i)[2]")

        await page.click("//div[@role='option']")

        await page.fill("//span[text()='Brand']/following::input", "testing brand")
        await page.fill("//span[text()='Description']/following::textarea", "test description")


        await page.click("(//div[@class='xamitd3 x1pi30zi']//i)[3]")

        await page.click("(//div[@role='option'])[2]")

        // await page.setInputFiles("//div[@id='mount_0_0_Xm']/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]", )

        // const filePath = 'tests/setup/expected/a.jpg'
        // const picture = "//span[text()='Add Photos']"

        // await page.setInputFiles(picture, filePath);


        await page.click("//span[text()='Save Draft']")


        // await page.click("//div[@id='mount_0_0_OY']/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]")

        // await page.click("//div[@id='mount_0_0_OY']/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]")

    }
}