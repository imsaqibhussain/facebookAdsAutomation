import { Given, When, Then } from '@cucumber/cucumber'
import { DataTable } from 'cucumber'
import { facebook } from '../page-objects/facebook/facebook';
import { Utilities } from '../page-objects/utilities';
const utility = new Utilities()
const fb = new facebook()
Given('Open facebook', async function () {
  await fb.open()
});

When('login facebook using username and passowrd then visit market place', async function () {
  await fb.loginUser()
  await fb.visitMarketPlaceListing()
});

Then('Save the product details into JSON file and fill the marketplace forms', async function (dataTable: DataTable) {
  const data = await dataTable.hashes();
  console.log(data.length, 'Items found')
  for (let i = 0; i < data.length; i++) {
    await fb.saveNewListingwithDraft(
      data[i].title,
      data[i].price,
      data[i].condition,
      data[i].availability,
      data[i].location
    );
  }
});
