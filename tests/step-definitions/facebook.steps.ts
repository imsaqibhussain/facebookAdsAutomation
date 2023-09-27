import { Given, When, Then } from '@cucumber/cucumber'
import { facebook } from '../page-objects/facebook/facebook';

const fb = new facebook()

Given('Open facebook', async function () {
  await fb.open()
});

When('login facebook using username and passowrd then visit market place', async function () {
  await fb.loginUser()
  await fb.visitMarketPlaceListing()
});

Then('fill the form using ads details {string} {string} {string} {string} {string} {string} {string}', async (picture, title, price, category, condition, availability, location)=> {
  
  await fb.saveNewListingwithDraft(picture, title, price, category, condition, availability, location) 
});

