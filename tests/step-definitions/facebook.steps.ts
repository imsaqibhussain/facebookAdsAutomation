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

// Then('fill the form using ads details {string} {string} {string} {string} {string} {string} {string}', async (picture, title, price, category, condition, availability, location)=> {
  
//   await fb.saveNewListingwithDraft(picture, title, price, category, condition, availability, location) 
// });


Then('Save the product details into JSON file', async function (dataTable: DataTable) {
 
  const adDetails = dataTable.hashes();

  await utility.writeJSONToFile('productsList.json', adDetails)

});

Then('fill the form using ads details', async function () {
 
  const adDetails = await utility.readProductDetails()
  // console.log('adDetails', adDetails)

  await utility.delay(5999)

  // Iterate through the array and call the saveNewListingwithDraft function for each set of data
  for (const details of adDetails) {
    const { picture, title, price, category, condition, availability, location } = details;

    // Call your saveNewListingwithDraft function with the current set of data
    console.log('testing',picture, title, price, category, condition, availability, location)
    
    fb.saveNewListingwithDraft(picture, title, price, category, condition, availability, location);
  }
});

